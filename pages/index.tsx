import type { NextPage } from "next";
import Hero from "../components/hero";
import About from "../components/about";
import Features from "../components/features";
import Team from "../components/team";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="content">
        <About />
        <Features />
        <Team />
      </div>
    </>
  );
};

export default Home;
