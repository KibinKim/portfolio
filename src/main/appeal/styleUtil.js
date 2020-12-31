import styled, { css } from "styled-components";
import { Text } from "common/styleUtil";
import { Cursor2 } from "anim/styleUtil";

export const TypingText = styled(Text)`
    font-size: 100px;
    width: max-content;
    color: transparent;
    margin-left: 18px;
    display: ${(props) => props.display};
    animation: ${Cursor2} 0.6s infinite;
    -webkit-text-stroke: 1px #1a1a1a;
    -webkit-font-smoothing: antialiased;
    transition: all 0.8s;
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
`;
