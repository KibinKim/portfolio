import styled, { css } from "styled-components";
import { FadeIn, ShakeAnim } from "anim/styleUtil";
import { Container, Column, Row, Text, media, Img } from "common/styleUtil";

export const MyContainer = styled(Container)`
    ${(props) =>
        props.activate &&
        css`
            animation: ${FadeIn} 2s ease-in;
        `}
`;

export const WorkContainer = styled(Row)`
    justify-content: center;
    @media only screen and (max-width: 945px) {
        flex-direction: column;
    }
`;

export const TextArea = styled(Column)`
    margin-right: 100px;
    letter-spacing: 5px;
    align-items: flex-end;
    white-space: nowrap;
    @media only screen and (max-width: 1134px) {
        margin-right: 50px;
    }
    @media only screen and (max-width: 945px) {
        margin-right: 0px;
    }
`;

export const ShakeText = styled(Text)`
    animation: ${ShakeAnim} 2s infinite;
`;

export const Heading = styled(Text)`
    line-height: 1.7;
    font-size: 40px;
    font-family: NotoSansCJKkr-Medium;
    @media only screen and (max-width: 1134px) {
        font-size: 30px;
    }
    ${media.phone`
        font-size: 25px;
      `};
`;

export const WorkMenuFrame = styled(Column)`
    margin-top: 30px;
    margin-left: 100px;
    @media only screen and (max-width: 1134px) {
        margin-left: 60px;
    }
    @media only screen and (max-width: 945px) {
        margin-top: 70px;
        margin-left: 0px;
    }
`;

export const WorkMenuImg = styled(Img)`
    width: 24px;
    height: 27px;
    @media only screen and (max-width: 1134px) {
        width: 21px;
        height: 24px;
    }
    ${media.phone`
        margin-top: 2px;
        width: 17px;
        height: 20px;
      `};
`;

export const WorkMenu = styled(Text)`
    margin-left: 13px;
    font-size: 20px;
    font-family: NotoSansCJKkr-Medium;
    @media only screen and (max-width: 1134px) {
        margin-left: 11px;
        font-size: 16px;
    }
    ${media.phone`
        margin-top: 1px;
        margin-left: 8px;
      `};
`;

export const WorkText = styled(Text)`
    margin-top: 17px;
    font-size: 18px;
    line-height: 30px;
    font-family: NotoSansCJKkr-Light;
    @media only screen and (max-width: 1134px) {
        font-size: 15px;
    }
    ${media.phone`
        font-size: 13px;
        line-height: 30px;
      `};
`;
