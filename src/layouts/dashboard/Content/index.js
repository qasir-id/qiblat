// Vendors
import React, { useState } from 'react';
import clsx from 'clsx';

// Styles
import useStylesContent from './style';

const Content = ({ children }) => {
  const classes = useStylesContent();
  return (
    <main
    // className={clsx(classes.root, {
    //   [classes.contentShift]: openMenuMobile,
    // })}
    >
      {children}
    </main>
  );
};

export default Content;
