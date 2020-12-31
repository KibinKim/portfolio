import React, { Component } from "react";
import { Column, Row, Text } from "common/styleUtil";
import { SkillCircle, CheckImg } from "main/pickle/styleUtil";
import pickle_check from "assets/img/pickle_check.png";

export default class MainSkill extends Component {
    render() {
        return (
            <Column padding_top="110px" padding_bottom="110px" padding_left="110px" padding_right="110px" color="#fff">
                <Text size="20px" font_family="NotoSansCJKkr-Bold">
                    피클플러스는 이렇게 제작되었습니다!
                </Text>
                <Row width="100%" top="100px" justify_content="space-between">
                    <Row width="50%" align_items="center" justify_content="center">
                        <Column
                            align_items="center"
                            justify_content="center"
                            width="450px"
                            height="450px"
                            color="#53e3ac"
                            border_radius="225px"
                            filter="opacity(0.9)"
                            box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                        >
                            <Text size="50px" font_family="NotoSansCJKkr-Bold">
                                React
                            </Text>
                            <Row top="60px">
                                <SkillCircle right="5px">
                                    <Text size="15px" font_family="NotoSansCJKkr-Medium">
                                        Redux
                                    </Text>
                                </SkillCircle>
                                <SkillCircle>
                                    <Text size="15px" text_align="center" font_family="NotoSansCJKkr-Medium">
                                        styled-components
                                    </Text>
                                </SkillCircle>
                                <SkillCircle left="5px">
                                    <Text size="15px" font_family="NotoSansCJKkr-Medium">
                                        media query
                                    </Text>
                                </SkillCircle>
                            </Row>
                        </Column>
                    </Row>
                    <Column width="50%" align_items="flex-start" justify_content="center" padding_left="70px">
                        <Text size="18px" font_family="NotoSansCJKkr-Medium">
                            Why?
                        </Text>
                        <Text top="50px" size="14px" height="24px" font_family="NotoSansCJKkr-Light">
                            컴포넌트 기반으로 가독성 및 재사용성이 높으며 Virtual DOM의 이용으로 최소한의 DOM처리를
                            합니다. 어플리케이션과 함께 제작 예정에 있었기에 React Native의 러닝 커브가 낮을 것이라
                            판단되어 React를 선택하게 되었습니다. <br />
                            <br />
                            상태 관리의 어려움을 해결하기 위해 Redux를 사용하였으며, 반응형 레이아웃을 만들기 위해
                            적극적으로 media query를 사용하였고 media query를 활용한 css 사용이 필요하였는데 props
                            사용은 이를 편리하도록 도와주며 높은 재사용성으로 관리의 이점을 가져오는 styled-components를
                            사용하게 되었습니다. <br />
                            <br />
                            자, 그럼 코드와 함께 조금 더 자세하게 소개해드릴게요 :)
                        </Text>
                    </Column>
                </Row>
            </Column>
        );
    }
}
