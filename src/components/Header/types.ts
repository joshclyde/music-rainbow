export interface IStyle {
  classes: {
    container: string;
    pageButton: string;
  };
}

export interface IHeaderProps {}

export interface IProps extends IStyle, IHeaderProps {}
