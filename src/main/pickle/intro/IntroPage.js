import React, { Component } from "react";
import { Column, Row, Text, Img } from "common/styleUtil";
import pickle_match from "assets/img/pickle_match.png";
import pickle_myparty from "assets/img/pickle_myparty.png";
import pickle_award from "assets/img/pickle_award.png";

export default class IntroPage extends Component {
    render() {
        return (
            <Column
                padding_top="110px"
                padding_bottom="110px"
                padding_left="110px"
                padding_right="110px"
                color="#f4fbf7"
            >
                <Text size="20px" font_family="NotoSansCJKkr-Bold">
                    작업물을 보시기 전에 피클플러스에 대하여 간단히 소개해드릴게요~ :)
                </Text>
                <Row width="100%" top="100px">
                    <Column width="60%" left="20px">
                        <Text size="18px" font_family="NotoSansCJKkr-Medium">
                            <span style={{ fontSize: "20px" }}>‧</span> 소개🥒
                        </Text>
                        <br />
                        <Text width="100%" size="18px" height="30px">
                            피클은{" "}
                            <span
                                style={{
                                    fontFamily: "NotoSansCJKkr-Bold",
                                    textDecoration: "#11c78f wavy underline",
                                }}
                            >
                                구독 요금 납부
                            </span>
                            를 더욱 편리하게 도와주는 서비스예요. <br /> OTT 4사(넷플릭스, 웨이브, 왓챠, 닌텐도
                            스위치)의 계정을 공유했을 때 매달 귀찮게 송금하지 않아도 피클플러스에 등록된 카드를 통해
                            요금이 매달{" "}
                            <span
                                style={{
                                    fontFamily: "NotoSansCJKkr-Bold",
                                    textDecoration: "#11c78f wavy underline",
                                }}
                            >
                                자동 결제
                            </span>
                            돼요. <br />
                            주변에 계정을 공유 할 사람이 없어도 피클플러스에서{" "}
                            <span
                                style={{
                                    fontFamily: "NotoSansCJKkr-Bold",
                                    textDecoration: "#11c78f wavy underline",
                                }}
                            >
                                자동 매칭
                            </span>
                            을 통해 계정을 공유할 수 있는 파티를 만들어준답니다!
                        </Text>
                        <Text
                            align_self="center"
                            top="20px"
                            size="18px"
                            font_family="NotoSansCJKkr-Medium"
                            color="#11c78f"
                        >
                            피클플러스는 2020년 5월 이후로 현재까지 계속 운영중인 서비스예요 :)
                        </Text>
                        <Text top="50px" size="18px" font_family="NotoSansCJKkr-Medium">
                            <span style={{ fontSize: "20px" }}>‧</span> 수상 경력/정부지원사업/투자 유치 🏆
                        </Text>
                        <br />
                        <Column>
                            <Text
                                size="18px"
                                font_family="NotoSansCJKkr-Bold"
                                style={{ textDecoration: "#9d9d9d wavy underline" }}
                            >
                                2019년
                            </Text>
                            <Text size="16px" top="10px" height="30px">
                                {" "}
                                - 한국핀테크지원센터 제 2회 아이디어 공모전, 예비창업 부분 최고상격수상
                                <br />
                                <span style={{ marginTop: "3px" }}>
                                    - 서강대학교 스타트업 오디션 대학생·대학원생·졸업생 통합 대상
                                </span>
                                <br />
                                <span style={{ marginTop: "3px" }}>
                                    - 숭실대학교 캠퍼스CEO 육성사업 창업경진대회 최우수상
                                </span>
                            </Text>
                        </Column>
                        <br />
                        <Column>
                            <Text
                                size="18px"
                                font_family="NotoSansCJKkr-Bold"
                                style={{ textDecoration: "#9d9d9d wavy underline" }}
                            >
                                2020년
                            </Text>
                            <Text size="16px" top="10px" height="30px">
                                - 성균관대학교 하반기 창업경진대회 수상
                                <br />
                                - 창업진흥원 예비창업패키지 일반분야 선정
                                <br />- 프라이머(국내 최고 초기투자사) SEED 투자유치
                            </Text>
                        </Column>
                    </Column>
                    <Column width="40%" align_items="center" justify_content="center">
                        <Img
                            src={pickle_myparty}
                            width="350px"
                            height="auto"
                            transform="rotate(10deg)"
                            box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                        />
                        <Img
                            src={pickle_match}
                            width="350px"
                            height="auto"
                            transform="rotate(-10deg)"
                            box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                        />
                        <Img
                            src={pickle_award}
                            width="280px"
                            height="auto"
                            transform="rotate(10deg)"
                            box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                        />
                    </Column>
                </Row>
                <Text
                    underline
                    top="100px"
                    size="16px"
                    align_self="center"
                    font_family="NotoSansCJKkr-Medium"
                    cursor="pointer"
                    hover_color="#11c78f"
                    onClick={() => window.open("https://www.pickle.plus/")}
                >
                    피클플러스로 연결시켜드릴게요🙌🏼
                </Text>
            </Column>
        );
    }
}
