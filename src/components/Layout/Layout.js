import { Fragment } from "react";

import classes from "./Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
