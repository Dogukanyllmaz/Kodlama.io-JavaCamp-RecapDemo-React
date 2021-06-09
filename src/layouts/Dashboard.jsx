import React from "react";
import { Button, GridColumn, Icon, Label } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <GridColumn width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:productName" component={ProductDetail} />
            <Route path="/cart-details" component={CartDetail} />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
