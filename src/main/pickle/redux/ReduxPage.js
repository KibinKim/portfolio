import React, { Component } from "react";
import { Column, Row, Text } from "common/styleUtil";
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
                padding_bottom="110px"
                padding_left="110px"
                padding_right="110px"
                color="#fbf8ef"
            >
                <Text size="20px" font_family="NotoSansCJKkr-Bold">
                    데이터에 편하게 접근하기
                </Text>
                <Row top="60px" align_items="center" justify_content="space-between">
                    <Row>
                        <CodeImg width="360px" height="240px" src={pickle_propsredux} />
                        <CodeImg width="460px" height="300px" left="8px" src={pickle_reduxoperation} />
                    </Row>
                    <Text
                        left="30px"
                        size="14px"
                        height="24px"
                        color="dark_gray"
                        text_align="center"
                        font_family="NotoSansCJKkr-Light"
                    >
                        상태 변경시 변경된 데이터를 props를 통해 컴포넌트로 넘겨주는데, 이 때 너무 많거나 깊은 곳에
                        넘겨주는 경우가 생기면 가독성이 떨어지고 관리가 힘들어집니다. <br />
                        <br />
                        이러한 문제를 해결하기 위해 Redux를 도입했으며, 데이터 저장소인 Store에서 상태를 관리해서
                        데이터에 쉽게 접근했습니다.
                    </Text>
                </Row>
                <Text top="80px" size="16px" color="dark_gray">
                    action을 통해 상태를 갱신시킵니다
                </Text>
                <Row top="30px" align_items="center" justify_content="space-between">
                    <Row>
                        <CodeImg width="570px" height="640px" src={pickle_reduxaction} />
                        <Column left="8px" justify_content="flex-end">
                            <Row justify_self="center">
                                <Text
                                    left="30px"
                                    bottom="130px"
                                    size="14px"
                                    height="24px"
                                    color="dark_gray"
                                    text_align="center"
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
                            <CodeImg width="360px" height="90px" src={pickle_dispatch} />
                            <CodeImg width="450px" height="200px" top="8px" src={pickle_connect} />
                        </Column>
                    </Row>
                </Row>
            </Column>
        );
    }
}
