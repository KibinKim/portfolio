import styled, { css, keyframes } from "styled-components";
import { Column, Text, media } from "common/styleUtil";
import { FadeIn, LoadingBounce } from "anim/styleUtil";

export const LoadingBox = styled(Column)`
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
    border: solid 5px #000;
    animation: ${LoadingBounce} 2s linear;
    ${media.phone`
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 20px;
        padding-right: 20px;
        border: solid 4px #000;
    `}
`;

export const ReadyText = styled(Text)`
    margin-top: 20px;
    font-size: 20px;
    animation: ${FadeIn} 0.5s ease-in;
    ${media.phone`
        margin-top: 15px;
        font-size: 16px;
    `}
`;
