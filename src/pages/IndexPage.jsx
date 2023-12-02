import Company from "../components/Company";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import Newsletter from "../components/Newsletter";
import Portfolio from "../components/Portfolio";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Jobs />
      <Portfolio />
      <Company />
      <Newsletter />
    </>
  );
};

export default IndexPage;
