// react bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";
// next img
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <Container>
          <Row>
            <Col xl={6} className="align-self-center">
              <div className="banner_content">
                <h1>Digital Product Agency</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum qui tempore, reiciendis accusamus velit mollitia.
                </p>
                <Button className="bg-dark text-light border-dark">
                  Discover
                </Button>
              </div>
            </Col>
            <Col xl={6} className="align-self-center">
              <Image
                className="img-fluid"
                src="/img/banner.svg"
                width="500px"
                height="300px"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
