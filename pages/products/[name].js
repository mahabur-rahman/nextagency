import { data } from "../../data/data";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Card } from "react-bootstrap";

const Products = ({ product }) => {
  return (
    <>
      <section id="productId" className="py-5">
        <Container>
          <Row>
            <Col xl={6}>
              <Card>
                {product.images.map((img) => {
                  return (
                    <Image
                      src={img.url}
                      width="50%"
                      height="100%"
                      objectFit="cover"
                      alt=""
                    />
                  );
                })}
              </Card>
            </Col>
            <Col xl={6}>
              <div className="product_content">
                <h1>{product.title}</h1>
                <p>{product.desc}</p>
                <button className="btn btn-dark text-white">
                  <Link href="/contact">Contact Us</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export const getStaticPaths = async () => {
  const products = data;

  const paths = products.map((item) => {
    return {
      params: { name: item.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const name = ctx.params.name;
  const product = data.filter((item) => item.name === name)[0];

  return {
    props: {
      product,
    },
  };
};

export default Products;
