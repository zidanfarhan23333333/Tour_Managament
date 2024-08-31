import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/NewSletter";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";

const TourDetail = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  useEffect(() => {
    if (tour) {
      setReviews(tour.reviews);
      window.scrollTo(0, 0);
    }
  }, [tour]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading tour details: {error.message}</h2>;
  if (!tour) return <h2>Tour not found</h2>;

  const { photo, title, desc, price, address, city, maxGroupSize, distance } =
    tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    if (!user || user === undefined || user === null) {
      alert("Please Sign in");
      return; // Stop the submission if user is not logged in
    }

    try {
      const reviewObj = {
        username: user.username, // Use the logged-in user's username
        reviewText,
        rating: tourRating,
        date: new Date().toISOString(), // Set the current date in ISO format
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }

      // Update the reviews state with the newly added review
      setReviews([...reviews, reviewObj]);
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <Container>
        {loading && <h4 className="text-center pt-5">Loading....</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {!loading && !error && (
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt={title} />
                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="rating d-flex align-items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`ri-star-fill ${
                            index < avgRating ? "filled" : "unfilled"
                          }`}
                          style={{ color: "var(--secondary-color)" }}
                        ></i>
                      ))}
                      {avgRating === 0 ? "Not Rated" : avgRating}
                      {totalRating !== 0 && (
                        <span>({reviews.length} reviews)</span>
                      )}
                    </span>
                    <span>
                      <i className="ri-map-pin-user-fill"></i> {address}
                    </span>
                  </div>

                  <div className="tour__extra-details d-flex align-items-center gap-3">
                    <span>
                      <i className="ri-map-pin-2-line"></i> {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i> ${price}
                      /person
                    </span>
                    <span>
                      <i className="ri-map-pin-time-line"></i> {distance} km
                    </span>
                    <span>
                      <i className="ri-group-line"></i> {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* Tour reviews section */}
                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          onClick={() => setTourRating(star)}
                          className={star <= tourRating ? "active" : ""}
                        >
                          {star} <i className="ri-star-s-fill"></i>
                        </span>
                      ))}
                    </div>

                    <div className="reviews__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your experience"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews.map((review, index) => (
                      <div className="review__item" key={index}>
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {new Date(review.date).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="rating2 d-flex align-items-center">
                              {review.rating} <i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* Tour reviews section end */}
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        )}
      </Container>
      <Newsletter />
    </section>
  );
};

export default TourDetail;
