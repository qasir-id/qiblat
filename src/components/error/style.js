import styled from 'styled-components';

export const WrapperError = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 32%;
    margin-bottom: 10px;
    @media (max-width: 767px) {
      width: 50%;
    }
  }
  h3 {
    color: #f04b32;
  }
  p {
    padding: 15px 35px;
    margin-bottom: 30px;
    font-size: 20px;
    @media (max-width: 767px) {
      text-align: center;
      font-size: 16px;
    }
  }
  button {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    -webkit-appearance: none;
    border: 0;
    padding: 0 20px;
    color: #fff;
    background: #f04b32;
    border-radius: 4px;
    line-height: 40px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    display: inline-block;
    width: 210px;
    height: 40px;
  }
  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active,
  .ant-btn.active {
    color: white;
    background: #f04b32;
    border-color: #f04b32;
  }
`;
