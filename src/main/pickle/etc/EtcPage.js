import React, { Component } from "react";
import { Column, Row, Text, Img } from "common/styleUtil";
import { CodeImg } from "main/pickle/styleUtil";
import { WorkButton } from "main/styleUtil";
import pickle_axios from "assets/img/pickle_code_axios.png";
import pickle_communication from "assets/img/pickle_code_communication.png";
import pickle_opensocket from "assets/img/pickle_code_opensocket.png";
import pickle_authconnect from "assets/img/pickle_code_authconnect.png";
import pickle_kakaoalarm from "assets/img/pickle_kakaoalarm.png";
import notion_dom from "assets/img/notion_dom.png";
import notion_js from "assets/img/notion_js.png";
import notion_lifecycle from "assets/img/notion_lifecycle.png";
import notion_router from "assets/img/notion_router.png";

export default class EtcPage extends Component {
    render() {
        return (
            <Column
                padding_top="110px"
                padding_bottom="110px"
                padding_left="110px"
                padding_right="110px"
                color="#eff2fb"
            >
                <Text size="20px" font_family="NotoSansCJKkr-Bold">
                    또 무엇을 공부했냐면요 🥸
                </Text>
                <Text top="60px" size="16px" color="dark_gray">
                    토큰 기반 인증을 통해 보안을 강화시킵니다
                </Text>
                <Text top="15px" size="14px" height="24px" color="dark_gray" font_family="NotoSansCJKkr-Light">
                    JWT를 통해 서버 기반의 인증 시스템과 달리 상태를 유지하지 않는 Stateless한 구조를 가지기 때문에
                    기존에 존재하던 확장성, CORS의 문제를 해결 할 수 있었습니다. <br />
                    또, 사용자의 데이터가 필요하여 서버와 통신을 할 때에는 token을 사용하여 보안성을 높였습니다.
                </Text>
                <Text top="80px" size="16px" color="dark_gray">
                    백엔드와 REST하게 통신합니다
                </Text>
                <Row top="30px" align_items="center" justify_content="space-between">
                    <Row>
                        <CodeImg width="350px" height="270px" src={pickle_axios} />
                        <CodeImg left="8px" width="360px" height="330px" src={pickle_communication} />
                    </Row>
                    <Text
                        left="30px"
                        size="14px"
                        height="24px"
                        color="dark_gray"
                        text_align="center"
                        font_family="NotoSansCJKkr-Light"
                    >
                        피클플러스는 서버와 데이터를 주고 받아야하는 페이지가 많았기 때문에 <br /> 클라이언트와 서버 간
                        통신에 대해 학습하고 기반이 되는 코드를 탄탄하게 구현하였습니다.
                        <br />
                        <br />
                        rest api를 기반으로 axios를 사용하여 HttpRequest를 만들었으며, <br />
                        모든 통신에는 try-catch문으로 어떠한 예외적인 상황에도 대응할 수 있도록 하였습니다.
                    </Text>
                </Row>
                <Text top="80px" size="16px" color="dark_gray" align_self="flex-end">
                    실시간으로 데이터를 주고 받습니다
                </Text>
                <Row top="30px" align_items="center" justify_content="space-between">
                    <Text
                        size="14px"
                        height="24px"
                        color="dark_gray"
                        text_align="center"
                        font_family="NotoSansCJKkr-Light"
                    >
                        web socket으로 백 엔드에서 실시간으로 데이터를 받아와 <br />
                        모달을 띄워주며 사용자에게 카카오톡 메시지를 전송해줍니다. <br />
                        <br />
                        피클플러스에서 핵심 기능인 실시간 자동 매칭에서 사용되며,
                        <br /> 페이지에서 이탈하더라도 뒷 단에서 기능을 동작시키기 위하여 구현시켰습니다.
                    </Text>
                    <Column left="30px" align_items="center">
                        <CodeImg width="500px" height="180px" src={pickle_authconnect} />
                        <Row top="8px">
                            <CodeImg width="460px" height="370px" src={pickle_opensocket} />
                            <Img
                                left="8px"
                                width="270px"
                                height="260px"
                                border_radius="13px"
                                box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                                src={pickle_kakaoalarm}
                            />
                        </Row>
                    </Column>
                </Row>
                <Column align_items="center" top="120px" height="1050px">
                    <Text
                        size="18px"
                        color="dark_gray"
                        text_align="center"
                        height="33px"
                        font_family="NotoSansCJKkr-Medium"
                    >
                        피클플러스에서 웹 개발을 진행하면서 익혔던 <br />
                        layout, 모달, Router, Svg 등 개인 기록을 남기고 있어요✍🏼
                    </Text>
                    <Column width="100%" height="530px" position="relative">
                        <CodeImg
                            position="absolute"
                            width="350px"
                            height="500px"
                            transform="translate(-50%, -50%)"
                            hover_shadow="0 0 17px 20px #1a1a1a"
                            z_index="3"
                            style={{ top: "110%", left: "35%" }}
                            src={notion_js}
                        />
                        <CodeImg
                            position="absolute"
                            width="460px"
                            height="500px"
                            transform="translate(-50%, -50%)"
                            hover_shadow="0 0 17px 20px #1a1a1a"
                            z_index="2"
                            style={{ top: "60%", left: "30%" }}
                            src={notion_lifecycle}
                        />
                        <CodeImg
                            position="absolute"
                            width="400px"
                            height="500px"
                            transform="translate(-50%, -50%)"
                            hover_shadow="0 0 17px 20px #1a1a1a"
                            z_index="2"
                            style={{ top: "70%", left: "70%" }}
                            src={notion_router}
                        />
                        <CodeImg
                            position="absolute"
                            width="450px"
                            height="500px"
                            transform="translate(-50%, -50%)"
                            hover_shadow="0 0 17px 20px #1a1a1a"
                            z_index="4"
                            style={{ top: "85%", left: "50%" }}
                            src={notion_dom}
                        />
                        <WorkButton
                            b
                            position="absolute"
                            border="solid 1px #000"
                            font_color="#000"
                            color="#000"
                            style={{ transform: "translate(-50%, -50%)", top: "175%", left: "50%" }}
                            onClick={() => window.open("https://www.notion.so/25e108e015444345b07c7e0f809a7e02")}
                        >
                            기록 보기
                        </WorkButton>
                    </Column>
                </Column>
            </Column>
        );
    }
}
