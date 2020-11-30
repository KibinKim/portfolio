import styled from "styled-components";
import { Container, Text, media } from "common/styleUtil";
import backimg from "assets/img/background.png";
import { SlideIn, SlowSlideIn, BounceAnim } from "anim/styleUtil";

export const PageContainer = styled(Container)`
    overflow-y: scroll;
`;

export const Page_1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 900px;
    padding-top: 200px;
    padding-left: 130px;
    padding-right: 130px;
    background-image: url(${backimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: grayscale(0) opacity(1);
    ${media.phone`
        height: 500px;
        padding-top: 150px;
        padding-left: 30px;
        padding-right: 30px;
        background-position: top;
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
        padding-top: 80px;
        padding-bottom: 80px;
    `}
`;

export const SlideInText = styled(Text)`
    font-family: ${(props) => props.font_family || "NotoSansCJKkr"};
    color: #fff;
    letter-spacing: 1px;
    animation: ${SlideIn} ${(props) => props.second} ease-in;
    ${media.tablet`
        font-size: ${(props) => props.tablet_size || "40px"}; 
    `}
    ${media.phone`
        font-size: ${(props) => props.mobile_size || "20px"}; 
    `}
`;

export const SlowSlideInText = styled(SlideInText)`
    animation: ${SlowSlideIn} ${(props) => props.second} ease-in;
    ${media.tablet`
        font-size: ${(props) => props.tablet_size || "40px"}; 
    `}
    ${media.phone`
        font-size: ${(props) => props.mobile_size || "20px"}; 
    `}
`;

export const BounceText = styled(Text)`
    animation: ${BounceAnim} 0.8s;
    animation-iteration-count: 2;
`;
