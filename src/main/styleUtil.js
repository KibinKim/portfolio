import React from "react";
import styled, { css } from "styled-components";
import { Container, Row, Text, media } from "common/styleUtil";
import { SlideIn, BounceAnim } from "anim/styleUtil";
import backimg from "assets/img/bigsur.png";

export const PageContainer = styled(Container)`
    overflow-y: scroll;
`;

export const Page_1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 1500px;
    padding-top: 400px;
    padding-bottom: 400px;
    padding-left: 130px;
    padding-right: 130px;
    background-image: url(${backimg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    ${media.phone`
        height: 700px;
        padding-top: 150px;
        padding-left: 30px;
        padding-right: 30px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    `}
`;

export const Page_2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 140px;
    padding-bottom: 220px;
    background-color: #fff;
    ${media.phone`
        padding-top: 80px;
        padding-bottom: 80px;
    `}
`;

const WorkButtonBase = styled(Row)`
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: ${(props) => props.border || "solid 2px #fff"};
    border-radius: 8px;
    cursor: pointer;
    font-family: NotoSansCJKkr-Medium;
    color: ${(props) => props.font_color || "#fff"};
    transition: filter 0.2s ease-in;
    &:hover {
        filter: grayscale(0.4) opacity(0.6);
    }
    ${media.phone`
        font-size: 12px;
        margin-top: ${(props) => props.mobile_top};
    `}
`;

export const WorkButton = (props) => {
    return (
        <WorkButtonBase
            position={props.position}
            top={props.top}
            mobile_top={props.mobile_top}
            right={props.right}
            mobile_right={props.mobile_right}
            left={props.left}
            width="270px"
            mobile_width="200px"
            height="60px"
            mobile_height="40px"
            font_color={props.font_color}
            border={props.border}
            style={props.style}
            onClick={props.onClick}
        >
            {props.a
                ? "작업물 보기"
                : props.b
                ? "기록 보기"
                : props.c
                ? "이력서 보기(링크)"
                : props.d
                ? "프로젝트 보기(링크)"
                : "공부노트 보기(링크)"}

            <Row
                left="10px"
                width={props.a || props.b ? "130px" : "80px"}
                mobile_width={props.a || props.b ? "80px" : "50px"}
                height="1px"
                color={props.color}
            />
        </WorkButtonBase>
    );
};

export const SlideInText = styled(Text)`
    font-family: ${(props) => props.font_family || "NotoSansCJKkr"};
    color: #fff;
    letter-spacing: 1px;
    animation: ${SlideIn} ${(props) => props.second} ease-in;
    ${media.tablet`
        font-size: ${(props) => props.tablet_size || "40px"}; 
    `}
    ${media.phone`
        font-size: ${(props) => props.mobile_size || "20px"}; 
    `}
`;

export const BounceText = styled(Text)`
    animation: ${BounceAnim} 0.8s;
    animation-iteration-count: 2;
`;
