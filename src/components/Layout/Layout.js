import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Men from "../../components/Men/Men";
import Women from "../../components/Women/Women";
import Kids from "../../components/Kids/Kids";
import Explorer from "../../components/Explorer/Explorer";
import Footer from "../../components/Footer/Footer";

import "./Layout.css";

const Layout = (props) => {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Men />
      <Women />
      <Kids />
      <Explorer />
      <main className="content">{props.children}</main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
