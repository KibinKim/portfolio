import styled, { css } from "styled-components";
import { FadeIn } from "anim/styleUtil";
import { Container } from "common/styleUtil";

export const MyContainer = styled(Container)`
    ${(props) =>
        props.activate &&
        css`
            animation: ${FadeIn} 2s ease-in;
        `}
`;
