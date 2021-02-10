import styled from 'styled-components';

const SignUpWrapper = styled.div`
  padding: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid navy;
  border-radius: 10px;
  width: 500px;
  margin: 0 auto;
  background-color: #efefef;
  box-shadow: 7px 5px 7px 5px rgba(140, 140, 140, 0.75);

  .pageTitle {
    margin-bottom: 20px;
  }
  .formLabel {
    font-weight: 700;
    display: block;
    margin-bottom: 10px;
  }
  .formInput {
    display: block;
    width: 100%;
  }
  .formBtn {
    padding: 5px 15px;
    border: 1px solid navy;
    border-radius: 5px;
    background-color: lightblue;
    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);
  }
  .formBtn:hover,
  .formBtn:focus {
    background-color: yellowgreen;
  }
`;

export default SignUpWrapper;
