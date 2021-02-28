import React from "react";
import Layout from "../components/Layout";
import SectionOne from "../components/pages/PageOneComponents/SectionOne";
import SectionTwo from "../components/pages/PageOneComponents/SectionTwo";

const Home = () => {
  return (
    <Layout>
      <main className="PageOnePage">
        <SectionOne />
        <SectionTwo />
      </main>
    </Layout>
  );
};

export default Home;
