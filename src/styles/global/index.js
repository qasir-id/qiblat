import { css, createGlobalStyle } from 'styled-components';

import NProgress from './nprogress';

const StyleGlobal = createGlobalStyle`${css`
  ${NProgress}
`}`;

export default StyleGlobal;
