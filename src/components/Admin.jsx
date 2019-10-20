import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 70px;
  left: 470px;
  div {
    margin: 0 5px;
    font-size: 12px;
  }
`;

const Admin = () => {
  return (
    <Wrapper className="Admin">
      <div>身份 :游客</div>
      <div>登陆</div>
      <div>注册</div>
      <div>使用手册</div>
    </Wrapper>
  );
};

export default Admin;
