export interface IStyle {
  classes: {
    container: string;
  };
}

export interface IHomeProps {}

export interface IProps extends IStyle, IHomeProps {}
