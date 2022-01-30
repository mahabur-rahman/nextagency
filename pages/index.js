import Head from "next/head";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import { data } from "../data/data";

const Home = ({ services }) => {
  // console.log(services);
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <Services services={services} />
      <Testimonial />
    </>
  );
};

export const getStaticProps = async () => {
  const services = data;
  return {
    props: {
      services,
    },
  };
};

export default Home;
