import React, { Component } from "react";
import { Column, Row, Text, Img, LottieResponsive } from "common/styleUtil";
import { BounceImg } from "main/pickle/styleUtil";
import pickle_spread from "assets/motion/pickle_spread";
import pickle_icon from "assets/img/pickle_icon.png";
import pickle_check from "assets/img/pickle_check.png";
import pickle_wave from "assets/img/pickle_wave.png";

export default class EtcPage extends Component {
    render() {
        return (
            <Column
                position="relative"
                justify_content="center"
                height="90%"
                padding_left="110px"
                padding_right="110px"
                color="#fff"
            >
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
                ></LottieResponsive>
                <Row position="absolute" transform="translateX(50%)">
                    <Text size="43px" height="65px" text_align="center" font_family="NotoSansCJKkr-Bold">
                        팀원들과
                        <br /> 협업은 <br />
                        이렇게 했어요 🙌🏼 <br />
                    </Text>
                </Row>
                <Column position="absolute" transform="translateX(85%)">
                    <Row>
                        <Img top="6px" width="23px" height="20px" src={pickle_check} />
                        <Text left="8px" size="18px" height="30px" color="dark_gray">
                            Prittier 설정으로 코드 스타일을 통일시켰어요. <br />
                            Github 사용법을 익히고 branch 등 개념을 이해하여 코드를 안전하게 관리하였고, <br />
                            팀원 간의 코드 리뷰를 통해 계속해서 코드를 개선했습니다!
                        </Text>
                    </Row>
                    <Row top="50px">
                        <Img top="6px" width="23px" height="20px" src={pickle_check} />
                        <Text left="8px" size="18px" height="30px" color="dark_gray">
                            백엔드 개발자와 끝 없이 소통하여 응답 데이터를 효율적으로 관리하였고, Postman으로 <br />
                            통신 테스트를 했어요.
                        </Text>
                    </Row>
                    <Row top="50px">
                        <Img top="6px" width="23px" height="20px" src={pickle_check} />
                        <Text left="8px" size="18px" height="30px" color="dark_gray">
                            디자이너와 가깝게 일하며 의도를 이해하고 존중하며 '함께' 좋은 결과물을 만듭니다.
                            <br /> Zeplin, XD, Figma를 사용하여 생산성과 협업을 위한 지식을 배우고 적용하며
                            <br /> 공유했습니다!
                        </Text>
                    </Row>
                    <Row top="50px">
                        <Img top="6px" width="23px" height="20px" src={pickle_check} />
                        <Text left="8px" size="18px" height="30px" color="dark_gray">
                            협업 툴을 적극적으로 사용하여 계속 소통하며 피드백을 반영하고 문제점을 <br />
                            해결했어요.
                        </Text>
                    </Row>
                </Column>
                <BounceImg
                    position="absolute"
                    width="70px"
                    height="70px"
                    src={pickle_icon}
                    style={{ bottom: "0", right: "40px" }}
                />
            </Column>
        );
    }
}
