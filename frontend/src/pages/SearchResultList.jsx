import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router";
import CommonSection from "../shared/CommonSection";
import TourCard from "../shared/TourCard";
import NewSletter from "../shared/NewSletter";

const SearchResultList = () => {
  const location = useLocation();
  const data = location.state || [];

  console.log(data);

  return (
    <>
      <CommonSection title={"Tour Search"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <Col lg="12">
                <h4 className="text-center">No tour found</h4>
              </Col>
            ) : (
              data.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewSletter />
    </>
  );
};

export default SearchResultList;
