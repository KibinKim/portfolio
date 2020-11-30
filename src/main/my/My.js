import React, { Component } from "react";
import { Container, Column, Row, Text, Img, DesktopBr } from "common/styleUtil";
import { MyContainer } from "main/my/styleUtil";
import profile from "assets/img/profile.png";
import js from "assets/img/js.png";
import react from "assets/img/react.png";
import styled_components from "assets/img/styledcomponents.png";
import redux from "assets/img/redux.png";

export default class My extends Component {
    render() {
        return (
            <MyContainer
                padding_left="130px"
                mobile_padding_left="30px"
                padding_right="130px"
                mobile_padding_right="30px"
                padding_top="150px"
                mobile_padding_top="50px"
                padding_bottom="150px"
                mobile_padding_bottom="50px"
                align_items="center"
            >
                <Row>
                    <Column>
                        <Text
                            size="50px"
                            mobile_size="20px"
                            letter_spacing="-3px"
                            mobile_letter_spacing="-1px"
                            font_family="NotoSansCJKkr-Bold"
                            align_self="flex-start"
                        >
                            Make the Question
                        </Text>
                        <Img
                            src={profile}
                            width="180px"
                            height="237px"
                            border_radius="30px"
                            style={{ border: "2px #000000 solid" }}
                            top="90px"
                        />
                        <Text top="30px" size="16px" font_family="NotoSansCJKkr-Medium">
                            언제나 물음표를 던지는 웹 개발자
                            <DesktopBr />
                            <span style={{ fontFamily: "NotoSansCJKkr-Bold", fontSize: "30px" }}>김기빈입니다!</span>
                        </Text>
                        <Row top="30px" width="33px" height="2px" color="#222222" />
                        <Text top="25px" size="14px">
                            {" "}
                            어떤 환경에서도 완벽히 반응하여
                            <br />
                            보기 편안한 UI/UX를 제공하는 웹
                            <br />
                            <br />
                            작동되는 코드 보단 효율적인 코드,
                            <br />
                            하드코딩이 아닌 가독성이 좋은 코드,
                            <br />
                            유지 및 보수가 쉬운 코드를 짜는 것
                            <br />
                            <br />
                            항상 물음표를 던져 발전하는
                            <br />
                            프론트엔드 개발자가 되고자 합니다.
                        </Text>
                    </Column>
                    <Row top="155px">
                        <Column left="30px">
                            <Text size="24px" color="dark_blue" font_family="NotoSansCJKkr-Bold">
                                about me
                            </Text>
                            <Text top="15px" size="12px" height="19px">
                                <span style={{ fontFamily: "NotoSansCJKkr-Bold", fontSize: "16px" }}>김기빈</span>
                                <br />
                                <Row top="2px" />
                                1996.11.06
                                <br />
                                서울특별시 송파구 문정2동
                                <br />
                                kibin3846@gmail.com
                            </Text>
                            <Text top="60px" size="20px" color="dark_blue" font_family="NotoSansCJKkr-Medium">
                                Education
                            </Text>
                            <Text top="15px" size="12px" height="19px">
                                2015.02 &nbsp; 가락고등학교 졸업
                                <br />
                                2020.02 &nbsp; 서일대학교 컴퓨터정보공학과 졸업
                                <br />
                                2021.02 &nbsp; 서일대학교 정보통신공학과 졸업
                            </Text>
                            <Text top="60px" size="20px" color="dark_blue" font_family="NotoSansCJKkr-Medium">
                                Activity
                            </Text>
                            <Text top="15px" size="12px" height="19px">
                                2015
                                <br />
                                형상사진회 동아리
                                <br />
                                <Row top="2px" />
                                2018
                                <br />
                                징검다리, 스터디그룹 활동, PBL 사업
                                <br />
                                <Row top="2px" />
                                2019
                                <br />
                                징검다리, 전공동아리 활동, 벤처창업동아리,
                                <br />
                                창업 경진 대회, 드론 교육, 황재근 디자이너 특강,
                                <br />
                                SW마에스트로 100+ 컨퍼러스
                            </Text>
                        </Column>
                        <Column left="70px">
                            <Text size="20px" color="dark_blue" font_family="NotoSansCJKkr-Medium">
                                Carrer
                            </Text>
                            <Text top="15px" size="12px" height="19px">
                                2019.11 ~ 2020.11 &nbsp; 피클플러스 웹 개발, 출시 및 서비스 유지/보수
                            </Text>
                            <Text top="60px" size="20px" color="dark_blue" font_family="NotoSansCJKkr-Medium">
                                Certificate
                            </Text>
                            <Text top="15px" size="12px" height="19px">
                                정보처리산업기사
                                <br />
                                자동차운전면허 2종보통
                            </Text>
                            <Text top="60px" size="20px" color="dark_blue" font_family="NotoSansCJKkr-Medium">
                                Skill
                            </Text>
                            <Row top="15px">
                                <Img src={js} width="60px" height="60px" />
                                <Row
                                    align_items="center"
                                    justify_content="center"
                                    width="60px"
                                    height="60px"
                                    left="10px"
                                    color="#fafafa"
                                    border_radius="10px"
                                >
                                    <Img src={react} width="50px" height="50px" />
                                </Row>
                            </Row>
                            <Row top="10px">
                                <Row
                                    align_items="center"
                                    justify_content="center"
                                    width="60px"
                                    height="60px"
                                    color="#fafafa"
                                    border_radius="10px"
                                >
                                    <Img src={redux} width="40px" height="40px" />
                                </Row>
                                <Img src={styled_components} width="60px" height="60px" left="10px" />
                            </Row>
                        </Column>
                    </Row>
                </Row>
            </MyContainer>
        );
    }
}
