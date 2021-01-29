import React, { Component } from "react";
import { Column, Row, Text, Img, SideText, DesktopBr, MobileBr } from "common/styleUtil";
import { MyContainer } from "main/my/styleUtil";
import { connect } from "react-redux";
import profile from "assets/img/kibin.png";
import js from "assets/img/js.png";
import react from "assets/img/react.png";
import styled_components from "assets/img/styledcomponents.png";
import redux from "assets/img/redux.png";

class My extends Component {
    render() {
        const { scroll } = this.props;
        return (
            <MyContainer
                padding_left="130px"
                mobile_padding_left="25px"
                padding_right="130px"
                mobile_padding_right="25px"
                padding_top="150px"
                mobile_padding_top="50px"
                padding_bottom="150px"
                mobile_padding_bottom="50px"
                align_items="center"
                mobile_letter_spacing="-2px"
            >
                <SideText
                    ab_right="150px"
                    mobile_ab_right="40px"
                    color="light_gray"
                    scroll={scroll}
                    active={1700}
                    mobile_active={1100}
                    mobile_transform="translateY(-30px)"
                >
                    {" "}
                    저를 소개합니다 -{" "}
                </SideText>
                <Row mobile_direction="column">
                    <Column>
                        <Text
                            size="50px"
                            mobile_size="30px"
                            letter_spacing="-3px"
                            mobile_letter_spacing="-1px"
                            font_family="NotoSansCJKkr-Bold"
                            align_self="flex-start"
                        >
                            Make the Question
                        </Text>
                        <Column mobile_direction="row" mobile_justify_content="space-between">
                            <Column mobile_align_items="center">
                                <Img
                                    src={profile}
                                    width="220px"
                                    mobile_width="120px"
                                    height="240px"
                                    mobile_height="140px"
                                    border_radius="30px"
                                    style={{ border: "2px #000000 solid" }}
                                    top="90px"
                                    mobile_top="25px"
                                />
                                <Text
                                    top="30px"
                                    mobile_top="15px"
                                    size="16px"
                                    mobile_size="14px"
                                    font_family="NotoSansCJKkr-Medium"
                                >
                                    견고하고 역동적인 <MobileBr />웹 개발자
                                    <DesktopBr />
                                    <Text font_family="NotoSansCJKkr-Bold" size="30px" mobile_size="18px">
                                        김기빈입니다!
                                    </Text>
                                </Text>
                            </Column>
                            <Column mobile_justify_content="center" mobile_left="20px">
                                <Row
                                    top="30px"
                                    mobile_top="0px"
                                    width="33px"
                                    mobile_width="0px"
                                    height="2px"
                                    mobile_height="0px"
                                    color="#000"
                                />
                                <Text top="25px" mobile_top="20px" size="14px" mobile_size="12px">
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
                        </Column>
                    </Column>
                    <Row mobile_top="30px" mobile_width="100%" mobile_height="1px" color="#616161" />
                    <Row top="155px" mobile_top="25px" mobile_justify_content="space-between">
                        <Column left="30px" mobile_left="0px">
                            <Text size="24px" mobile_size="18px" color="dark_blue" font_family="NotoSansCJKkr-Bold">
                                about me
                            </Text>
                            <Text top="15px" mobile_top="10px" size="12px" height="19px">
                                <Text font_family="NotoSansCJKkr-Bold" size="16px" mobile_size="14px">
                                    김기빈
                                </Text>
                                <DesktopBr />
                                <Row top="2px" />
                                1996.11.06
                                <br />
                                서울특별시 송파구 문정2동
                                <br />
                                kibin3846@gmail.com
                            </Text>
                            <Text
                                top="60px"
                                mobile_top="30px"
                                size="20px"
                                mobile_size="16px"
                                color="dark_blue"
                                font_family="NotoSansCJKkr-Medium"
                            >
                                Education
                            </Text>
                            <Text top="15px" mobile_top="10px" size="12px" height="19px">
                                2015.02 &nbsp; <MobileBr />
                                가락고등학교 졸업
                                <br />
                                2020.02 &nbsp; <MobileBr />
                                서일대학교 컴퓨터정보공학과 졸업
                                <br />
                                2021.02 &nbsp; <MobileBr />
                                서일대학교 정보통신공학과 졸업
                            </Text>
                            <Text
                                top="60px"
                                mobile_top="30px"
                                size="20px"
                                mobile_size="16px"
                                color="dark_blue"
                                font_family="NotoSansCJKkr-Medium"
                            >
                                Activity
                            </Text>
                            <Text top="15px" mobile_top="10px" size="12px" height="19px">
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
                                징검다리, 전공동아리 활동, <MobileBr /> 벤처창업동아리,
                                <DesktopBr />
                                창업 경진 대회, <MobileBr />
                                드론 교육, 황재근 디자이너 특강,
                                <br />
                                SW마에스트로 100+ 컨퍼러스
                            </Text>
                        </Column>
                        <Column left="70px" mobile_left="0px">
                            <Text size="20px" mobile_size="16px" color="dark_blue" font_family="NotoSansCJKkr-Medium">
                                Carrer
                            </Text>
                            <Text top="15px" mobile_top="10px" size="12px" height="19px">
                                2019.11 ~ 2020.11 &nbsp; <br /> 피클플러스 웹 개발, <MobileBr />
                                출시 및 서비스 유지/보수
                            </Text>
                            <Text
                                top="60px"
                                mobile_top="30px"
                                size="20px"
                                mobile_size="16px"
                                color="dark_blue"
                                font_family="NotoSansCJKkr-Medium"
                            >
                                Certificate
                            </Text>
                            <Text top="15px" mobile_top="10px" size="12px" height="19px">
                                정보처리산업기사
                                <br />
                                자동차운전면허 2종보통
                            </Text>
                            <Text
                                top="60px"
                                mobile_top="30px"
                                size="20px"
                                mobile_size="16px"
                                color="dark_blue"
                                font_family="NotoSansCJKkr-Medium"
                            >
                                Skill
                            </Text>
                            <Row top="15px" mobile_top="10px">
                                <Img src={js} width="60px" mobile_width="40px" height="60px" mobile_height="40px" />
                                <Row
                                    align_items="center"
                                    justify_content="center"
                                    width="60px"
                                    mobile_width="40px"
                                    height="60px"
                                    mobile_height="40px"
                                    left="10px"
                                    mobile_left="5px"
                                    color="#fafafa"
                                    border_radius="10px"
                                >
                                    <Img
                                        src={react}
                                        width="50px"
                                        mobile_width="30px"
                                        height="50px"
                                        mobile_height="30px"
                                    />
                                </Row>
                            </Row>
                            <Row top="10px" mobile_top="5px">
                                <Row
                                    align_items="center"
                                    justify_content="center"
                                    width="60px"
                                    mobile_width="40px"
                                    height="60px"
                                    mobile_height="40px"
                                    color="#fafafa"
                                    border_radius="10px"
                                >
                                    <Img
                                        src={redux}
                                        width="40px"
                                        mobile_width="20px"
                                        height="40px"
                                        mobile_height="20px"
                                    />
                                </Row>
                                <Img
                                    src={styled_components}
                                    width="60px"
                                    mobile_width="40px"
                                    height="60px"
                                    mobile_height="40px"
                                    left="10px"
                                    mobile_left="5px"
                                />
                            </Row>
                        </Column>
                    </Row>
                </Row>
            </MyContainer>
        );
    }
}

export default connect(
    (state) => ({
        scroll: state.layout.get("scroll"),
    }),
    (dispatch) => ({}),
)(My);
