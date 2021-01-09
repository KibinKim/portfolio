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

export const SlideInTop = keyframes`
    0% {
        margin-top: 50px;
        opacity: 0;
    }
    50% {
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

export const BounceAnim2 = keyframes`
    0% { 
        transform: scale(1,1) translateY(0)
    }
    10% { 
        transform: scale(1.1,.9) translateY(0)
    }
    30%  { 
        transform: scale(.9,1.1) translateY(-100px)
    }
    50%  { 
        transform: scale(1,1)    translateY(0)
    }
    57%  { 
        transform: scale(1,1)    translateY(-7px)
    }
    64%  { 
        transform: scale(1,1)    translateY(0)
    }
    100% { 
        transform: scale(1,1)    translateY(0)
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

export const ModalOpen = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const ShakeAnim = keyframes`
0% {
    transform: rotate(0deg);
}
20% {
    transform: rotate(13deg);
}
24% {
    transform: rotate(-13deg);
}
28% {
    transform: rotate(13deg);
}
32% {
    transform: rotate(-13deg);
}
36% {
    transform: rotate(0deg);
}
`;

export const TypingAnim = keyframes`
  0% {
      width: 0%
  }
  100% {
    width: 440px
  }
  50% {
    opacity:1
  }
`;

export const TypingAnim2 = keyframes`
  0% {
    width: 0%
  }
  100% {
    width: 180px
  }
  50% {
    opacity:1
  }
`;

export const cursor = keyframes`
  0% {
    opacity: 0
  }
  50% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`;

export const Cursor2 = keyframes`
  0% {
      border-right: 1px solid #fff
  }
  50% {
    border-right: 1px solid #000
  }
  100% {
    border-right: 1px solid #fff
  }
`;

export const RotateAnim = keyframes`
  100% {
      transform: rotate(360deg);
  }
`;
