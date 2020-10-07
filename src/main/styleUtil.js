import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { Container, Text, media } from "common/styleUtil";
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

const SlideIn = keyframes`
    0% {
        margin-left: 50px;
        opacity: 0;
    }
    50% {
        margin-left: 0px;
        opacity: 1;
    }
`;

const SlowSlideIn = keyframes`
    0% {
        margin-left: 50px;
        opacity: 0;
    }
    50% {
        margin-left: 50px;
        opacity: 0;
    }
    100% {
        margin-left: 0px;
        opacity: 1;
    }
`;

const Bounce = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }
    25% {
        transform: tanslate3d(0, -60px, 0);
    }
    40% {
        transform: tanslate3d(0, 0, 0);
    }
    60% {
        transform: translate3d(0, -30px, 0);
    }
    70% {
        transform: tanslate3d(0, 0, 0);
    }
    100% {
        transform: tanslate3d(0, 0, 0);
    }
`;

const Heart = keyframes`
    0% {
        transform: scale(1);
    }
    30% {
        transform: scale(.9);
    }
    40% {
        transform: scale(1.2);
    }
    60% {
        transform: scale(.9);
    }
    70% {
        transform: scale(1.2);
    }
    80% {
        transform: scale(1);
    }
`;

export const PageContainer = styled(Container)`
    overflow-y: auto;
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
    align-items: center;
    padding-top: 140px;
    padding-bottom: 220px;
    background-color: #000;
    ${media.phone`
        height: 400px;
        padding-top: 100px;
        padding-bottom: 100px;
        padding-left: 30px;
        padding-right: 30px;
    `}
`;

export const SlideInText = styled(Text)`
    font-family: ${(props) => props.font_family || "NotoSansCJKkr"};
    color: #fff;
    letter-spacing: 1px;
    animation: ${SlideIn} ${(props) => props.second} ease-in;

    ${media.phone`
        font-size: ${(props) => props.mobile_size || "20px"}; 
    `}
`;

export const SlowSlideInText = styled(SlideInText)`
    animation: ${SlowSlideIn} ${(props) => props.second} ease-in;
`;

export const BounceText = styled(Text)`
    animation: ${Bounce} 0.8s;
    animation-iteration-count: 2;
`;

export const HeartText = styled(Text)`
    animation: ${Heart} 2s infinite;
`;
