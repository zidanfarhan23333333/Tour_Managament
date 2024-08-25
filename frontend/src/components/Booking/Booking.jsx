import React, { useState } from "react";
import "./booking.css";
import {
  Container,
  Form,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";

import { useNavigate } from "react-router-dom"; // Correct import path

const Booking = ({ tour, avgRating }) => {
  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "sfarkhan48@Gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const { price, reviews } = tour;
  const navigate = useNavigate(); // Invoke useNavigate

  const serviceFee = 10;
  const totalAmount = price * Number(credentials.guestSize) + serviceFee;

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Send data to the server
  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
    // After successful booking, navigate to the thank-you page
    navigate("/thank-you");
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
            />
          </FormGroup>

          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input type="date" id="bookAt" required onChange={handleChange} />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="number"
              placeholder="Guest size"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>

          <Button className="btn primary_btn w-100 mt-4" type="submit">
            Book Now
          </Button>
        </Form>
      </div>

      {/* booking form end */}

      {/* booking bottom */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> {credentials.guestSize}{" "}
              {credentials.guestSize > 1 ? "people" : "person"}
            </h5>
            <span>${price * Number(credentials.guestSize)}</span>
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
