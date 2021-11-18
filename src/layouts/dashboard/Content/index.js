// Vendors
import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';

// Styles
import useStylesContent from './style';

const Content = (props) => {
  const { children, stateLayout } = props;
  const { sidebarOpen } = stateLayout.dashboard;
  const classes = useStylesContent();
  return (
    <main
      className={clsx(classes.root, {
        [classes.contentShift]: sidebarOpen,
      })}
    >
      {children}
    </main>
  );
};

const mapStateToProps = ({ layout }) => ({
  stateLayout: layout,
});

export default connect(mapStateToProps)(Content);
