import styled from "styled-components";
import React from "react";
import contactIcon from "@assets/icon/contact-icon.png";
import developerIcon from "@assets/icon/developer-icon.png";

export const HwFooter = () => {
  const contactUrl = "https://www.youtube.com/user/youhyunwoo/discussion";

  return (
    <Wrapper className="hwUserSelectNone">
      <Content>
        <ImageArea src={contactIcon} alt="contact icon" />

        <AnchorArea target="_blank" href={contactUrl} rel="noreferrer">
          현우u Youtube
        </AnchorArea>
      </Content>

      <Content>
        <ImageArea src={developerIcon} alt="developer icon" />

        <LabelArea>Hyun-woo Yoo</LabelArea>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  height: 21px;
  color: rgb(187, 187, 187);
  background-color: rgb(60, 63, 65);
  border-top: 1px solid #515658;
  bottom: 0;
  width: 100%;
  padding: 0 10px 3px 10px;
  font-size: 13px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
`;

const ImageArea = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(0.9);
`;

const AnchorArea = styled.a`
  margin-left: 7px;
  color: rgb(187, 187, 187);
  cursor: pointer;

  &:hover {
    color: cadetblue;
  }
`;

const LabelArea = styled.label`
  margin-left: 7px;
`;
