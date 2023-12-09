import Company from "../components/Company";
import Hero from "../components/Hero";
import Hiring from "../components/Hiring";
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
      <Hiring />
    </>
  );
};

export default IndexPage;
