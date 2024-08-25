import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/tour.css";
import tourData from "../assets/data/tours";
import TourCard from "./../shared/TourCard";
import SerachBar from "./../shared/SerachBar";
import Newsletter from "./../shared/NewSletter";
import { useEffect, useState } from "react";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SerachBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-0" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {Array(pageCount)
                  .fill()
                  .map((_, number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
