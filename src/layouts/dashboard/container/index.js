// Qasir UI
import Container from '@material-ui/core/Container';

// Layout Components
import Header from '../header';
import Sidebar from '../Sidebar';
import Content from '../Content';
// import Footer from '../Footer';

// Styles
import useStylesContainer from './style';

export default (props) => {
  const { window, children } = props;
  const classes = useStylesContainer();
  return (
    <Container disableGutters maxWidth={false} component="section" className={classes.root}>
      <Header />
      <Sidebar />
      <Content>{children}</Content>
      {/* <Footer /> */}
    </Container>
  );
};
