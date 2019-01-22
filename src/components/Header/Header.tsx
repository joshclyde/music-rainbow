import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

import { IHeaderProps, IProps } from "./types";

const Header = ({ classes }: IProps) => (
  <div className={classes.container}>
    <Link className={classes.pageButton} to="/">
      Home
    </Link>
    <Link className={classes.pageButton} to="/">
      Spotify
    </Link>

    <Link className={classes.pageButton} to="/">
      Youtube
    </Link>
  </div>
);

const styles = {
  container: {
    // height: 50,
    borderBottomStyle: "solid",
    borderWidth: 1,
  },

  pageButton: {
    height: "100%",
    marginRight: 20,
  },

  hovering: {
    background: "lightgrey",
    adf: "lightgrey",

    bacadsfasdf: "lightgrey",
  },
};

export default injectSheet(styles)(Header) as React.SFC<IHeaderProps>;
