import React from "react";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// data
import { users } from "../data/data";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-5 my-5">
      <Container>
        <h1 className="mb-4">Testimonial</h1>
        <Row>
          {users.map((user) => {
            return (
              <Col key={user.id} xl={4}>
                <span className={`${user.iconColor}`}>{user.icon}</span>
                <p className="my-3">{user.desc}</p>
                <Image src={user.imgSrc} width="80" height="80" />
                <span className="fw-bold">{user.name}</span>
                <br />
                <span className="mx-5 px-5">{user.intro}</span>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
