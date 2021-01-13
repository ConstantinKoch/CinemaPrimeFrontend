import React from "react";
import { MdShoppingCart, MdAccountCircle, MdSearch } from 'react-icons/md';
import "./Header.css";
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

export default class Header extends React.Component {

  render() {
    return (
          <header>
              <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
              >
                  <Grid item xs={3}>
                      <div className="logo">
                          <Link to="/" className="logoInner">Cinema<div className="prime">Prime</div></Link>
                      </div>
                  </Grid>
                  <Grid item xs={3}>
                      <Grid
                          container
                          direction="row"
                          justify="space-evenly"
                          alignItems="center"
                      >
                          <Grid item xs={3}><Link to="/cart" className="iconLink"><MdShoppingCart /></Link></Grid>
                          <Grid item xs={3}><Link to="/account" className="iconLink"><MdAccountCircle /></Link></Grid>
                          <Grid item xs={3}><Link to="/search" className="iconLink"><MdSearch /></Link></Grid>
                      </Grid>
                  </Grid>
              </Grid>
          </header>
    );
  }

}
