import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Column, Row, Circle, Text, Img, media } from "common/styleUtil";
import { HeartAnim, TypingAnim, TypingAnim2, cursor, BounceAnim2 } from "anim/styleUtil";
import pickle_mobile_mockup from "assets/img/pickle_mobile_mockup.svg";

/* 로고 */
export const Logo = (props) => {
    const color = props.color || "#1a1a1a";
    const Svg = styled.svg`
        width: ${(props) => props.width || "350px"};
        height: ${(props) => props.height || "auto"};
        ${media.phone`
            width: ${(props) => props.mobile_width || "160px"};
            height: ${(props) => props.mobile_height || "auto"};
        `}
    `;
    return (
        <Svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1182.01 406.63"
            {...props}
        >
            <path
                id="패스_348"
                data-name="패스 348"
                style={{ fill: color }}
                d="M906.2,216.89a28.92,28.92,0,0,0-27.45,29.16v209.2A28.9,28.9,0,0,0,906.2,484.4,28.42,28.42,0,0,0,935.57,457c0-.32,0-.64,0-1V245.3a28.42,28.42,0,0,0-28.42-28.42h-1"
                transform="translate(-178.99 -146.68)"
            />
            <path
                id="패스_349"
                data-name="패스 349"
                style={{ fill: color }}
                d="M750.35,335.05v-89a28.92,28.92,0,0,0-27.44-29.16,28.43,28.43,0,0,0-29.38,27.44c0,.33,0,.65,0,1V455.25A28.92,28.92,0,0,0,721,484.4,28.41,28.41,0,0,0,750.33,457c0-.32,0-.64,0-1V415.53a.08.08,0,0,1,.1,0l0,0,60.81,60.64a28.42,28.42,0,0,0,40.13-40.26l-101-100.81h0"
                transform="translate(-178.99 -146.68)"
            />
            <path
                id="패스_350"
                data-name="패스 350"
                style={{ fill: color }}
                d="M280.17,282.64a100.57,100.57,0,0,0-52,14.37A28.39,28.39,0,0,0,179,316.35V524.86a28.42,28.42,0,1,0,56.84,0V474.85a101.21,101.21,0,1,0,44.34-192.19M280.42,430a46.28,46.28,0,1,1,44.34-48.13c0,.63,0,1.26,0,1.89A45.35,45.35,0,0,1,280.42,430"
                transform="translate(-178.99 -146.68)"
            />
            <path
                id="패스_351"
                data-name="패스 351"
                style={{ fill: color }}
                d="M428.72,295a29,29,0,0,0-27.44,29.25V455.81a29,29,0,0,0,27.44,29.25,28.47,28.47,0,0,0,29.38-27.52c0-.33,0-.65,0-1v-133A28.46,28.46,0,0,0,429.7,295l-1,0"
                transform="translate(-178.99 -146.68)"
            />
            <path
                id="패스_352"
                data-name="패스 352"
                style={{ fill: color }}
                d="M429.94,216.89a28.5,28.5,0,1,0,28.49,28.5h0a28.5,28.5,0,0,0-28.49-28.5"
                transform="translate(-178.99 -146.68)"
            />
            <path
                id="패스_353"
                data-name="패스 353"
                style={{ fill: color }}
                d="M537.43,383.26a44.37,44.37,0,0,1,3-15.78c.31-.79.63-1.55,1-2.31.22-.51.45-1,.69-1.46.41-.88.89-1.74,1.39-2.6s1-1.62,1.49-2.37a23.17,23.17,0,0,1,1.42-2c.22-.32.48-.64.7-.91.59-.77,1.23-1.49,1.89-2.22s1.61-1.71,2.47-2.5a25.18,25.18,0,0,1,1.89-1.68c.29-.26.6-.5.91-.76.64-.51,1.29-1,2-1.49A42.81,42.81,0,0,1,562,343.8a30.11,30.11,0,0,1,3-1.36h0c1-.42,2.06-.79,3.1-1.14a43.9,43.9,0,0,1,13.45-2.1h.06c.73,0,1.42,0,2.12.06s1.38.06,2.05.16a40.21,40.21,0,0,1,7.54,1.39c.48.13.92.26,1.36.42a37.17,37.17,0,0,1,4.9,1.87c.47.22,1,.44,1.45.69a41.41,41.41,0,0,1,5.61,3.36c.83.56,1.64,1.17,2.41,1.81a5.7,5.7,0,0,1,.44.37c.76.61,1.49,1.27,2.22,1.94a44,44,0,0,1,3.63,4,3,3,0,0,1,.35.45c.63.75,1.7,2.09,3,3.57.8.89,1.64,1.87,2.57,2.79l1.23,1.23c.5.48,1,1,1.54,1.46a.66.66,0,0,0,.22.19,12.35,12.35,0,0,0,1.2,1,3.48,3.48,0,0,0,.48.38c.17.12.32.25.48.38a35.61,35.61,0,0,0,5,3.3,20.28,20.28,0,0,0,1.84,1,23.72,23.72,0,0,0,4.76,1.71,2.36,2.36,0,0,1,.42.13,6.41,6.41,0,0,0,.75.21l.35.06c.66.13,1.29.29,2,.38h0a25.73,25.73,0,0,0,9.38-.38c1.87-.5,3.86-1.17,4.07-1.23.45-.16.86-.35,1.3-.53a18.29,18.29,0,0,0,1.77-.89s.91-.47,1.61-.91c.22-.16.48-.32.72-.51a13,13,0,0,0,1.64-1.2,12.82,12.82,0,0,0,1.33-1.11,2.42,2.42,0,0,0,.32-.32,26.57,26.57,0,0,0,7-20.3V346a11.26,11.26,0,0,0-.19-1.65,46.41,46.41,0,0,0-8.93-20.5c-.1-.1-.16-.21-.25-.31-1.13-1.68-2.25-3.14-3.19-4.31s-1.92-2.26-3-3.36c-.4-.45-.75-.92-1.17-1.33a102.23,102.23,0,0,0-15.28-13.28,99.9,99.9,0,0,0-156.3,66.28A104.64,104.64,0,0,0,481,383.37v1.36a104.64,104.64,0,0,0,1.23,15.81,99.85,99.85,0,0,0,156.3,66.28,102.23,102.23,0,0,0,15.28-13.28c.41-.41.76-.88,1.17-1.33,1-1.11,2-2.21,3-3.36a46.79,46.79,0,0,0,3.19-4.3c.1-.1.16-.22.25-.32a46.41,46.41,0,0,0,8.93-20.5,11.28,11.28,0,0,0,.19-1.64V422a26.57,26.57,0,0,0-7-20.31,2.42,2.42,0,0,0-.32-.32,12.82,12.82,0,0,0-1.33-1.11,13.79,13.79,0,0,0-1.64-1.2c-.24-.19-.5-.35-.72-.51-.7-.44-1.61-.92-1.61-.92a16.2,16.2,0,0,0-1.77-.88c-.44-.19-.85-.38-1.3-.54-.21-.06-2.21-.73-4.07-1.23a25.73,25.73,0,0,0-9.38-.38h0c-.69.1-1.33.26-2,.38l-.35.06a6.45,6.45,0,0,0-.75.22l-.42.13a23.69,23.69,0,0,0-4.76,1.7,18.15,18.15,0,0,0-1.84,1,35.54,35.54,0,0,0-5,3.29,4.35,4.35,0,0,1-.48.38,5.71,5.71,0,0,0-.48.38c-.4.31-.82.66-1.2,1a.66.66,0,0,0-.22.19c-.53.48-1,1-1.54,1.46L621.21,406c-.92.91-1.77,1.9-2.57,2.79-1.33,1.49-2.4,2.82-3,3.58a3.87,3.87,0,0,1-.35.45,42.71,42.71,0,0,1-3.63,4c-.73.67-1.45,1.33-2.22,1.94a5.74,5.74,0,0,1-.44.38c-.76.63-1.58,1.23-2.41,1.8a41.41,41.41,0,0,1-5.61,3.36c-.48.25-1,.48-1.45.69a37.17,37.17,0,0,1-4.9,1.87,12.76,12.76,0,0,1-1.36.41,40.21,40.21,0,0,1-7.54,1.39,19.77,19.77,0,0,1-2.05.16c-.7,0-1.39.06-2.12.06h-.06a43.9,43.9,0,0,1-13.45-2.1c-1-.35-2.08-.72-3.1-1.14h0c-1-.41-2-.85-3-1.36a42.88,42.88,0,0,1-5.72-3.4c-.67-.47-1.33-1-2-1.49-.31-.24-.63-.5-.91-.75a25.18,25.18,0,0,1-1.89-1.68c-.86-.79-1.68-1.62-2.47-2.5s-1.29-1.46-1.89-2.21c-.22-.29-.48-.61-.7-.93a23,23,0,0,1-1.42-2c-.5-.77-1-1.55-1.49-2.38a24.77,24.77,0,0,1-1.39-2.6c-.24-.48-.47-1-.69-1.46-.35-.76-.67-1.52-1-2.31a44.37,44.37,0,0,1-3-15.78v-1.56Z"
                transform="translate(-178.99 -146.68)"
            />
            <path
                id="패스_354"
                data-name="패스 354"
                style={{ fill: color }}
                d="M1138.88,396.77a25,25,0,0,0-34,9.66l0,.07a57.17,57.17,0,0,1-40,27.8,51.83,51.83,0,0,1-54-74.22,49.91,49.91,0,0,1,39.91-27.74,47.52,47.52,0,0,1,26.69,6l-19.51,17a25.08,25.08,0,0,0,32.75,38c19.75-16.2,28.16-24.09,32.08-28.05.33-.33.78-.78,1.32-1.41a36.77,36.77,0,0,0,8.32-22.55,47.53,47.53,0,0,0-11.77-30.89c-16.81-21.44-47.8-29.87-73.33-28.1a99.49,99.49,0,0,0-81.2,55.3A102.17,102.17,0,0,0,1071.49,484a107.64,107.64,0,0,0,77.08-53.18,25.15,25.15,0,0,0-9.7-34.14"
                transform="translate(-178.99 -146.68)"
            />
            <path
                id="사각형_432"
                data-name="사각형 432"
                style={{ fill: color }}
                d="M799.21,321.06l16.37-14.36A24.84,24.84,0,0,1,850.66,309h0a24.87,24.87,0,0,1-2.29,35.09L832,358.45a24.87,24.87,0,0,1-35.09-2.29h0A24.89,24.89,0,0,1,799.21,321.06Z"
                transform="translate(-178.99 -146.68)"
            />
            <path
                style={{ fill: color }}
                d="M1361,244.39a21.22,21.22,0,0,0-21.4-20.15h-56V167.56a20.88,20.88,0,0,0-20.87-20.88l-.71,0a21.23,21.23,0,0,0-20.16,21.4v56.14H1186a21.23,21.23,0,0,0-21.41,20.15A20.87,20.87,0,0,0,1184.7,266l.72,0h56.41v55.75A21.24,21.24,0,0,0,1262,343.14,20.89,20.89,0,0,0,1283.56,323c0-.24,0-.48,0-.72V266h56.56A20.89,20.89,0,0,0,1361,245.1C1361,244.87,1361,244.63,1361,244.39Z"
                transform="translate(-178.99 -146.68)"
            />
        </Svg>
    );
};

export const SkillCircle = styled(Circle)`
    max-width: 120px;
    width: 40vw;
    max-height: 120px;
    height: 40vw;
    border-radius: 60px;
    background-color: #11c78f;
    filter: opacity(0.6);
    ${media.phone`
        width: 80px;
        height: 80px;
    `};
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
    ${media.phone`
        font-size: 40px;
    `}
`;

//MobilePage
const PhoneAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

//MobilePage
export const PhoneBox = styled(Column)`
    height: 814px;
    justify-content: center;
    align-items: center;
    ${media.phone`
        position: static;
        width: 280px;
        height: 600px;
    `}
`;

//MobilePage
export const PhoneFrame = styled.img.attrs({
    src: pickle_mobile_mockup,
})`
    z-index: 4;
    width: 653px;
    height: 736px;
    ${media.phone`
        width: 435px;
        height: 600px;
    `}
`;

//MobilePage
export const PhoneDisplayFrame = styled.div`
    width: 290px;
    height: 604px;
    transform: translate(4px, -677px);
    ${media.phone`
        width: 235px;
        height: 508px;
        transform: translate(3px, -555px);
    `}
`;

//MobilePage
export const PhoneDisplay = styled.img`
    position: absolute;
    width: 290px;
    height: 603px;
    z-index: 1;
    ${media.phone`
        width: 235px;
        height: 495px;
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
