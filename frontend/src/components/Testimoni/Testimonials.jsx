import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

// Slick Slider styles

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-2 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id ut
          voluptatibus facere laboriosam est similique ea odit ex architecto.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="Avatar 1" />
          <div>
            <h5 className="mb-0 mt-3">Farhan Kebab</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-2 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id ut
          voluptatibus facere laboriosam est similique ea odit ex architecto.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="Avatar 2" />
          <div>
            <h5 className="mb-0 mt-3">Jane Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-2 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id ut
          voluptatibus facere laboriosam est similique ea odit ex architecto.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="Avatar 3" />
          <div>
            <h5 className="mb-0 mt-3">John Smith</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-2 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id ut
          voluptatibus facere laboriosam est similique ea odit ex architecto.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="Avatar 3" />
          <div>
            <h5 className="mb-0 mt-3">John </h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
