import React, { useState, useContext } from "react";
import "./booking.css";
import {
  Container,
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    fullName: title,
    tourName: title,
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = price * Number(booking.guestSize) + serviceFee;

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(booking);

    try {
      if (!user) {
        return alert("Please Sign in");
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>${price} /per person</h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating !== 0 && (
            <>
              {avgRating} <span>({reviews?.length || 0})</span>
            </>
          )}
        </span>
      </div>

      {/* booking form */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full name"
              id="fullName"
              required
              onChange={handleChange}
              value={booking.fullName}
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
              value={booking.phone}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="date"
              id="bookAt"
              required
              onChange={handleChange}
              value={booking.bookAt}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="number"
              placeholder="Guest size"
              id="guestSize"
              required
              onChange={handleChange}
              value={booking.guestSize}
            />
          </FormGroup>

          <Button className="btn primary_btn w-100 mt-4" type="submit">
            Book Now
          </Button>
        </Form>
      </div>

      {/* booking bottom */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> {booking.guestSize}{" "}
              {booking.guestSize > 1 ? "people" : "person"}
            </h5>
            <span>${price * Number(booking.guestSize)}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Booking;
