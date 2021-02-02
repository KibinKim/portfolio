import React, { Component } from "react";
import { Column, Row, Text, Img, LottieResponsive, DesktopBr } from "common/styleUtil";
import { BounceImg } from "main/pickle/styleUtil";
import pickle_spread from "assets/motion/pickle_spread";
import pickle_icon from "assets/img/pickle_icon.png";
import pickle_check from "assets/img/pickle_check.png";
import pickle_wave from "assets/img/pickle_wave.png";

export default class EtcPage extends Component {
    render() {
        return (
            <Column style={{ display: "block" }} position="relative" justify_content="center" color="#fff">
                <LottieResponsive
                    isClickToPauseDisabled={true}
                    options={{
                        animationData: pickle_spread,
                        loop: true,
                        autoplay: true,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid meet",
                        },
                    }}
                    height="100%"
                    position="absolute"
                    mobile_height="250px"
                    mobile_ab_top="0"
                ></LottieResponsive>
                <Row
                    align_items="center"
                    justify_content="space-around"
                    padding_top="130px"
                    mobile_padding_top="30px"
                    laptop_padding_top="80px"
                    padding_bottom="130px"
                    mobile_padding_bottom="30px"
                    laptop_padding_bottom="80px"
                    padding_left="110px"
                    mobile_padding_left="15px"
                    padding_right="110px"
                    mobile_padding_right="15px"
                    laptop_direction="column"
                >
                    <Text
                        size="43px"
                        laptop_size="30px"
                        mobile_size="18px"
                        height="65px"
                        laptop_height="50px"
                        mobile_height="24px"
                        text_align="center"
                        font_family="NotoSansCJKkr-Bold"
                    >
                        팀원들과
                        <br /> 협업은 <br />
                        이렇게 했어요 🙌🏼 <br />
                    </Text>
                    <Column laptop_top="40px" mobile_top="30px">
                        <Row>
                            <Img
                                top="6px"
                                width="23px"
                                mobile_width="16px"
                                height="20px"
                                mobile_height="13px"
                                src={pickle_check}
                            />
                            <Text
                                left="8px"
                                mobile_left="5px"
                                size="18px"
                                mobile_size="13px"
                                height="30px"
                                mobile_height="24px"
                                color="dark_gray"
                            >
                                Prittier 설정으로 코드 스타일을 통일시켰어요. <br />
                                Github 사용법을 익히고 branch 등 개념을 이해하여 코드를 안전하게 관리하였고,{" "}
                                <DesktopBr />
                                팀원 간의 코드 리뷰를 통해 계속해서 코드를 개선했습니다!
                            </Text>
                        </Row>
                        <Row top="50px" mobile_top="25px">
                            <Img
                                top="6px"
                                width="23px"
                                mobile_width="16px"
                                height="20px"
                                mobile_height="13px"
                                src={pickle_check}
                            />
                            <Text
                                left="8px"
                                mobile_left="5px"
                                size="18px"
                                mobile_size="13px"
                                height="30px"
                                mobile_height="24px"
                                color="dark_gray"
                            >
                                백엔드 개발자와 끝 없이 소통하여 응답 데이터를 효율적으로 관리하였고, Postman으로{" "}
                                <DesktopBr />
                                통신 테스트를 했어요.
                            </Text>
                        </Row>
                        <Row top="50px" mobile_top="25px">
                            <Img
                                top="6px"
                                width="23px"
                                mobile_width="16px"
                                height="20px"
                                mobile_height="13px"
                                src={pickle_check}
                            />
                            <Text
                                left="8px"
                                mobile_left="5px"
                                size="18px"
                                mobile_size="13px"
                                height="30px"
                                mobile_height="24px"
                                color="dark_gray"
                            >
                                디자이너와 가깝게 일하며 의도를 이해하고 존중하며 '함께' 좋은 결과물을 만듭니다.
                                <br /> Zeplin, XD, Figma를 사용하여 생산성과 협업을 위한 지식을 배우고 적용하며
                                <DesktopBr /> 공유했습니다!
                            </Text>
                        </Row>
                        <Row top="50px" mobile_top="25px">
                            <Img
                                top="6px"
                                width="23px"
                                mobile_width="16px"
                                height="20px"
                                mobile_height="13px"
                                src={pickle_check}
                            />
                            <Text
                                left="8px"
                                mobile_left="5px"
                                size="18px"
                                mobile_size="13px"
                                height="30px"
                                mobile_height="24px"
                                color="dark_gray"
                            >
                                협업 툴을 적극적으로 사용하여 계속 소통하며 피드백을 반영하고 문제점을 <DesktopBr />
                                해결했어요.
                            </Text>
                        </Row>
                    </Column>
                </Row>

                <BounceImg
                    position="absolute"
                    width="70px"
                    mobile_width="35px"
                    height="70px"
                    mobile_height="35px"
                    src={pickle_icon}
                    style={{ bottom: "0", right: "40px" }}
                />
            </Column>
        );
    }
}
