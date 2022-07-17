import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";
import Checkout from "./containers/Checkout/Checkout";
import Account from "./containers/Account/Account";
import Product from "./pages/Product";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Routes>
              <Route path="/product/:id" component={Product} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/account" component={Account} />
              <Route path="/" exact component={Shopping} />
            </Routes>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
