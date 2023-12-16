import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="imgg">
      <Header />
      <SearchForm />
      <div className="foo">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
