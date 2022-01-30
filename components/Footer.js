import Link from "next/link";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="text-center py-4 bg-light text-dark">
        <Container>
          <p className="mb-0">
            &copy; copyright and all rights reserved 2022. Developed by
            <Link href="/contact"> Mahabur Rahman</Link>
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
