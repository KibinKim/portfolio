import styled from "styled-components";
import { Row, Text, media } from "common/styleUtil";
import { Cursor2 } from "anim/styleUtil";

export const TypingText = styled(Text)`
    font-size: 100px;
    width: max-content;
    color: transparent;
    display: ${(props) => props.display};
    animation: ${Cursor2} 0.6s infinite;
    text-shadow: #e6e6e6 1px 5px 10px;
    -webkit-text-stroke: 1px #1a1a1a;
    -webkit-font-smoothing: antialiased;
    transition: all 0.8s;
    @media only screen and (max-width: 1600px) {
        font-size: 70px;
    }
    @media only screen and (max-width: 1230px) {
        font-size: 55px;
    }
    @media only screen and (max-width: 970px) {
        font-size: 45px;
    }
    ${media.phone`
        font-size: 20px;
    `};
`;

export const ItemText = styled(Text)`
    font-size: 19px;
    line-height: 2.37;
    ::before {
        display: inline-block;
        width: 5px;
        height: 5px;
        margin-bottom: 4px;
        margin-right: 8px;
        vertical-align: middle;
        background-color: #141414;
        content: "";
    }
    ${media.phone`
        font-size: 15px;
    `};
`;

export const AppealContainer = styled(Row)`
    margin-top: 100px;
    align-self: center;
    white-space: nowrap;
    @media only screen and (max-width: 940px) {
        transform: scale(0.8);
    }
    ${media.phone`
        flex-direction: column;
        width: 100%;
        margin-top: 70px;
        transform: scale(1);
    `};
`;
