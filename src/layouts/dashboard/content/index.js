// Styles
import useStylesContent from './style';

const Content = ({ children }) => {
  const classes = useStylesContent();
  return <main className={classes.root}>{children}</main>;
};

export default Content;
