import React, { Component } from "react";
import { Column, Row, Text, MobileBr } from "common/styleUtil";
import { CodeImg } from "main/pickle/styleUtil";
import pickle_propsredux from "assets/img/pickle_propsredux.png";
import pickle_reduxoperation from "assets/img/pickle_reduxoperation.png";
import pickle_reduxaction from "assets/img/pickle_code_reduxaction.png";
import pickle_connect from "assets/img/pickle_code_connect.png";
import pickle_dispatch from "assets/img/pickle_code_dispatch.png";

export default class ReduxPage extends Component {
    render() {
        return (
            <Column
                padding_top="110px"
                mobile_padding_top="30px"
                padding_bottom="110px"
                mobile_padding_bottom="30px"
                padding_left="110px"
                mobile_padding_left="15px"
                padding_right="110px"
                mobile_padding_right="15px"
                color="#fbf8ef"
            >
                <Text size="20px" mobile_size="18px" mobile_height="1.65" font_family="NotoSansCJKkr-Bold">
                    데이터에 편하게 접근하기
                </Text>
                <Row
                    top="60px"
                    mobile_top="40px"
                    mobile_direction="column"
                    align_items="center"
                    justify_content="space-between"
                >
                    <Row mobile_direction="column" mobile_align_items="center">
                        <CodeImg
                            width="360px"
                            mobile_width="260px"
                            height="240px"
                            mobile_height="170px"
                            src={pickle_propsredux}
                        />
                        <CodeImg
                            width="460px"
                            mobile_width="280px"
                            height="300px"
                            mobile_height="210px"
                            left="8px"
                            mobile_left="0px"
                            mobile_top="8px"
                            src={pickle_reduxoperation}
                        />
                    </Row>
                    <Text
                        left="30px"
                        mobile_left="0px"
                        mobile_top="30px"
                        size="14px"
                        mobile_size="12px"
                        height="24px"
                        mobile_height="22px"
                        color="dark_gray"
                        text_align="center"
                        mobile_text_align="left"
                        font_family="NotoSansCJKkr-Light"
                    >
                        상태 변경시 변경된 데이터를 props를 통해 컴포넌트로 넘겨주는데, 이 때 너무 많거나 깊은 곳에
                        넘겨주는 경우가 생기면 가독성이 떨어지고 관리가 힘들어집니다. <br />
                        <br />
                        이러한 문제를 해결하기 위해 Redux를 도입했으며, 데이터 저장소인 Store에서 상태를 관리해서
                        데이터에 쉽게 접근했습니다.
                    </Text>
                </Row>
                <Text top="80px" mobile_top="40px" size="16px" mobile_size="14px" color="dark_gray">
                    action을 통해 상태를 갱신시킵니다
                </Text>
                <Row
                    top="20px"
                    mobile_top="15px"
                    mobile_direction="column"
                    align_items="center"
                    justify_content="space-between"
                >
                    <Row mobile_direction="column" mobile_align_items="center">
                        <CodeImg desktop width="570px" height="640px" src={pickle_reduxaction} />
                        <Column left="8px" mobile_left="0px" justify_content="flex-end">
                            <Row justify_self="center">
                                <Text
                                    left="30px"
                                    mobile_left="0px"
                                    bottom="130px"
                                    mobile_bottom="0px"
                                    size="14px"
                                    mobile_size="12px"
                                    height="24px"
                                    mobile_height="22px"
                                    color="dark_gray"
                                    text_align="center"
                                    mobile_text_align="left"
                                    font_family="NotoSansCJKkr-Light"
                                >
                                    Store의 데이터에 접근시 Action을 발행시키도록 구현했고, Reducer를 통해 이전 상태와
                                    Action을 합쳐 새로운 상태를 만듭니다. 비동기 실행이 필요한 작업을 위해 Middleware인
                                    redux-pender를 사용했습니다. <br />
                                    <br />
                                    connect를 해주어 Store에 업데이트된 상태 데이터에 접근하였고, dispatch를 통해
                                    구현되어있는 action을 사용했습니다.
                                </Text>
                            </Row>
                            <CodeImg desktop width="360px" height="90px" src={pickle_dispatch} />
                            <CodeImg desktop width="450px" height="200px" top="8px" src={pickle_connect} />
                        </Column>
                    </Row>
                </Row>
            </Column>
        );
    }
}
