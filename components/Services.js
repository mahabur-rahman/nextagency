// react bootstrap
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = ({ services }) => {
  return (
    <>
      <section id="service">
        <Container>
          <h1>What can we do ?</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            maiores!
          </p>
          <Row className="gy-4">
            {services.map((service) => {
              return (
                <Link passHref href={`/products/${service.name}`}>
                  <Col xl={4}>
                    <Card>
                      <Card.Img fluid variant="top" src={service.photo} />
                      <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>{service.text}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
