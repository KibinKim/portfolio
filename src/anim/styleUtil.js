import { keyframes } from "styled-components";

export const FadeIn = keyframes`
    0% {
        opacity:0
    }
    50% {
        opacity:1
    }
`;

export const SlowFadeIn = keyframes`
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

export const SlideIn = keyframes`
    0% {
        margin-left: 50px;
        opacity: 0;
    }
    50% {
        margin-left: 0px;
        opacity: 1;
    }
`;

export const SlowSlideIn = keyframes`
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

export const BounceAnim = keyframes`
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

export const HeartAnim = keyframes`
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
