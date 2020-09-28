import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { Text, media } from "common/styleUtil";
// import backimg from "assets/img/react_background_img.png";
import backimg from "assets/img/background.png";

const FadeIn = keyframes`
    0% {
        opacity:0
    }
    50% {
        opacity:1
    }
`;

const SlowFadeIn = keyframes`
    0% {
        opacity:0
    }
    50% {
        opacity:0
    }
    100% {
        opacity:1
    }
`;

export const Page_1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 900px;
    padding-top: 200px;
    padding-left: 130px;
    padding-right: 130px;
    position: relative;
    background-image: url(${backimg});
    background-size: auto auto;
    background-repeat: no-repeat;
    background-position-y: top;
    filter: grayscale(0) opacity(1);
    ${media.phone`
        height: 500px;
        padding-top: 100px;
        padding-bottom: 100px;
        padding-left: 30px;
        padding-right: 30px;
    `}
`;

export const Page_2 = styled.div`
    display: flex;
    flex-direction: column;
    height: 800px;
    padding-top: 200px;
    padding-bottom: 200px;
    padding-left: 130px;
    padding-right: 130px;
    background-color: #000;
    ${media.phone`
        height: 400px;
        padding-top: 100px;
        padding-bottom: 100px;
        padding-left: 30px;
        padding-right: 30px;
    `}
`;

export const Page_Text = styled(Text)`
    font-family: ${(props) => props.font_family || "NotoSansCJKkr"};
    color: #fff;
    letter-spacing: 1px;
    animation: ${FadeIn} ${(props) => props.second} ease-in;
    ${media.phone`
        font-size: ${(props) => props.mobile_size || "20px"}; 
    `}
`;

export const Page_Text_Slow = styled(Page_Text)`
    animation: ${SlowFadeIn} ${(props) => props.second} ease-in;
`;
