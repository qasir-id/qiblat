// Local components
import Header from '../header';
import Content from '../Content';
import Footer from '../Footer';

export default ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};
