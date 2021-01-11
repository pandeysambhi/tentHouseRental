import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from'../components/landingPage'
import Login from '../components/login'
import Register from '../components/register'
import Products from '../components/product'
import AddProduct from "../components/addProduct"
import Customer from "../components/customer"
import AddCustomer from "../components/addCustomer"
import Detailed from "../components/detailedReport"
import Summary from "../components/summaryReport"
import Rent from "../components/rentItems"
import Return from "../components/returnItems"
import Layout from "../components/layout"

const Routes = (props) => {
    return (
        <div>
          <Router>
          <Layout />
          <Switch>
            
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Products/Add" component={AddProduct} />
            
            <Route
              exact
              path="/Customer"
              component={Customer}
            />
            <Route
              exact
              path="/Customer/Add"
              component={AddCustomer}
            />

            <Route
              exact
              path="/report/detailed"
              component={Detailed}
            />
             <Route
              exact
              path="/report/summary"
              component={Summary}
            />
             <Route
              exact
              path="/transaction/rent"
              component={Rent}
            />
             <Route
              exact
              path="/transaction/return"
              component={Return}
            />
          
          
          </Switch>
     
      </Router>
    </div>
    );
};

export default Routes;