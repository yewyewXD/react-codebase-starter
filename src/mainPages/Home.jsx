import React from "react";
import Layout from "../components/Layout";
import SectionOne from "../components/pages/HomeComponents/SectionOne";
import SectionTwo from "../components/pages/HomeComponents/SectionTwo";

const Home = () => {
  return (
    <Layout>
      <main className="HomePage">
        <SectionOne />
        <SectionTwo />
      </main>
    </Layout>
  );
};

export default Home;
