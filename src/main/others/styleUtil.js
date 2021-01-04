import styled from "styled-components";
import { Row, media } from "common/styleUtil";
import { CodeImg } from "main/pickle/styleUtil";

export const OthersImg = styled(CodeImg)`
    position: absolute;
    &:hover {
        box-shadow: ${(props) => (props.white ? "0 0 17px 20px #f0f0f0" : "0 0 17px 20px #1a1a1a")};
    }
    @media only screen and (max-width: 1550px) {
        transform: ${(props) => props.transform + `scale(0.8)`};
    }
    ${media.phone`
        transform: ${(props) => props.mobile_transform};
    `}
`;

export const OthersRow = styled(Row)`
    @media only screen and (max-width: 1330px) {
        flex-direction: column;
        align-items: center;
    }
`;
