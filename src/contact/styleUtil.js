import styled, { css } from "styled-components";
import { media, Column } from "common/styleUtil";
import { SlideIn } from "anim/styleUtil";

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    width: 650px;
    height: 800px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
    background-color: #fff;
    padding-top: 35px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 35px;
    align-items: ${(props) => props.align_items};
    margin-top: ${(props) => props.top};
    border-radius: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${SlideIn} 1s linear;
    ${media.phone`
        padding-top: 20px;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 20px;
        width: 300px;
        height: 600px;
    `};
`;

export const ContentsBox = styled(Column)`
    width: 98%;
    height: 400px;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 3px;
    padding-right: 3px;
    border: solid 2px #e1e1e1;
    border-radius: 5px;
    margin-top: 15px;
    transition: 0.5s all ease-in-out;
    overflow-y: auto;
    ${(props) =>
        props.activate &&
        css`
            border: solid 2px #4460aa;
        `};
    ${media.phone`
    height: 350px;
        margin-top: 5px;
        padding-right: 0px;
    `};
`;

export const ContentsInput = styled.textarea`
    width: 98%;
    height: 100%;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    border: none;
    outline: none;
    letter-spacing: -0.96px;
    caret-color: ${(props) => props.theme.mi_blue};
    transition: 1s all ease-out;
    ::placeholder {
        color: ${(props) => props.theme.warm_gray};
        font-family: "NotoSansCJKkr-Light";
        letter-spacing: -0.96px;
        font-size: 20px;
    }
    ${media.phone`
        ::placeholder {
            font-size: 14px;
            font-family: "NotoSansCJKkr-Light";
        }
        font-size: 14px;
    `};
`;
