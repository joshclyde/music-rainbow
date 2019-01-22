import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import Header from "@components/Header";
import multiclass from "@utils/multiclass";

import { IHomeProps, IProps } from "./types";

const Home = ({ classes }: IProps) => (
  <div className={multiclass(classes.container)}>
    <Header />
    Content
  </div>
);

const styles = {
  container: {},

  hovering: {
    background: "lightgrey",
    adf: "lightgrey",

    bacadsfasdf: "lightgrey",
  },
};

export default injectSheet(styles)(Home) as React.SFC<IHomeProps>;
