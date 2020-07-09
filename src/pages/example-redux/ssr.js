import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '@/hoc/example-redux/Page';
import { addCount } from 'store/example-redux/count/action';
import { wrapper } from '@/redux/store';
import { serverRenderClock, startClock } from 'store/example-redux/tick/action';

const Other = (props) => {
  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return <Page title="Other Page" linkTo="ssg" />;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(serverRenderClock(true));
  store.dispatch(addCount());
});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Other);
