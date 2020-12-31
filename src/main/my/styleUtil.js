import styled, { css } from "styled-components";
import { FadeIn, ShakeAnim } from "anim/styleUtil";
import { Container, Column, Text, media } from "common/styleUtil";

export const MyContainer = styled(Container)`
    ${(props) =>
        props.activate &&
        css`
            animation: ${FadeIn} 2s ease-in;
        `}
`;

export const TextArea = styled(Column)`
    margin-right: 100px;
    letter-spacing: 5px;
    align-items: flex-end;
    ${media.phone`
        margin-right: 0px;
      `};
`;

export const ShakeText = styled(Text)`
    animation: ${ShakeAnim} 2s infinite;
`;
