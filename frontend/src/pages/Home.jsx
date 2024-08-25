import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import world from "../assets/images/world.png";
import experinceImg from "../assets/images/experience.png";
import Subtitle from "../shared/Subtitle";
import SerachBar from "../shared/SerachBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/images-galery/MasonryImagesGallery";
import Testimonials from "../components/Testimoni/Testimonials";
import NewSletter from "../shared/NewSletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d_flex align-items-center">
                  <Subtitle Subtitle={"Tabrak tabrak masuk"} />
                  <img src={world} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight"> memories</span>{" "}
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate eius voluptatem molestiae a voluptates repellendus
                  voluptatum aspernatur modi voluptatibus quod?
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SerachBar />
          </Row>
        </Container>
      </section>
      {/* hero section */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What We Serve</h5>
              <h2 className="services__title">We offer out best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* featured tour section */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h5 className="subtitle">Explore</h5>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* featured tour section selesai */}

      {/* experience section mulai */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <h5 className="subtitle">Experince</h5>
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  a molestias placeat obcaecati labore asperiores!
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k</span>
                  <h6>Succesful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15k</span>
                  <h6>Years experince</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experince__img">
                <img src={experinceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* experience section selesai */}
      {/* galery section selesai */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h5 className="subtitle">Gallery</h5>
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* galery section selesai */}
      {/* testimonial  section mulai */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h5 className="subtitle">Fans Love</h5>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* testimonial  section selesai */}
      <NewSletter />
    </>
  );
};

export default Home;
