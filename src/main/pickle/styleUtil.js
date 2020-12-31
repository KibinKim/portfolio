import styled, { css, keyframes } from "styled-components";
import { Column, Circle, Text, Img, media } from "common/styleUtil";
import { HeartAnim, TypingAnim, TypingAnim2, cursor, BounceAnim2 } from "anim/styleUtil";
import pickle_mobile_mockup from "assets/img/pickle_mobile_mockup.svg";

export const SkillCircle = styled(Circle)`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background-color: #11c78f;
    filter: opacity(0.6);
`;

export const CheckImg = styled(Img)`
    width: 20px;
    height: 20px;
`;

export const TypingText = styled(Text)`
    position: relative;
    font-size: 14px;
    font-color: #1a1a1a;
    height: 30px;
    line-height: 24px;
    display: inline-block;
    overflow: hidden;
    margin-left: 30px;
    animation: ${TypingAnim} 9s steps(30, end) infinite;
    font-family: NotoSansCJKkr-Light;
    ::after {
        position: absolute;
        display: block;
        content: "";
        width: 40px;
        height: 14px;
        top: 6px;
        right: 0;
        border-right: 1px solid #000;
        animation: ${cursor} 0.5s step-end infinite;
    }
`;

export const TypingText2 = styled(TypingText)`
    animation: ${TypingAnim2} 9s steps(30, end) infinite;
`;

export const CodeImg = styled(Img)`
    border-radius: 6px;
    box-shadow: 0 15px 32px 0 rgba(15, 15, 15, 0.15);
    z-index: ${(props) => props.z_index};
    &:hover {
        box-shadow: ${(props) => props.hover_shadow};
        z-index: 5;
    }
`;

export const BounceCodeImg = styled(CodeImg)`
    &:hover {
        animation: ${BounceAnim2} 1.5s infinite;
    }
`;

export const BounceImg = styled(Img)`
    animation: ${BounceAnim2} 2s infinite;
`;

export const HeartCodeImg = styled(CodeImg)`
    &:hover {
        animation: ${HeartAnim} 1.5s infinite;
    }
`;

export const ShadowText = styled(Text)`
    font-size: 14px;
    margin-bottom: 50px;
    color: #1a1a1a;
    font-family: NotoSansCJKkr-Medium;
    &:hover {
        text-shadow: #f7819f 1px 0 20px;
        transition: 0.3s all ease-in;
    }
`;

export const BorderText = styled(Text)`
    font-size: 120px;
    color: transparent;
    position: absolute;
    white-space: nowrap;
    -webkit-text-stroke: 2px #1a1a1a;
    -webkit-font-smoothing: antialiased;
`;

const PhoneAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const PhoneBox = styled(Column)`
    height: 814px;
    justify-content: center;
    align-items: center;
    ${media.phone`
        position: static;
        width: 480px;
        height: 599px;
        margin-top: 14px;
    `}
`;

export const PhoneFrame = styled.img.attrs({
    src: pickle_mobile_mockup,
})`
    z-index: 4;
    width: 653px;
    height: 736px;
    ${media.phone`
        width: 435px;
    `}
`;

export const PhoneDisplayFrame = styled.div`
    width: 290px;
    height: 604px;
    transform: translate(4px, -677px);
    ${media.phone`
        width: 235px;
        height: 508px;
        transform: translate(4px, -10px);
    `}
`;

export const PhoneDisplay = styled.img`
    position: absolute;
    width: 290px;
    height: 603px;
    z-index: 1;
    ${media.phone`
        width: 235px;
        height: 508px;
    `}
    ${(props) =>
        props.selected &&
        !props.init &&
        css`
            z-index: 3;
            animation: ${PhoneAnimation} 0.4s linear;
        `}
        ${(props) =>
        props.before &&
        css`
            z-index: 2;
        `}
`;
