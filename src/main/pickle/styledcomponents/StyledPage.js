import React, { Component } from "react";
import { Column, Row, Text } from "common/styleUtil";
import {
    BorderText,
    CodeImg,
    BounceCodeImg,
    HeartCodeImg,
    TypingText,
    TypingText2,
    ShadowText,
} from "main/pickle/styleUtil";
import pickle_globalstyle from "assets/img/pickle_code_globalstyle.png";
import pickle_provider from "assets/img/pickle_code_provider.png";
import pickle_column from "assets/img/pickle_code_column.png";
import pickle_reuse from "assets/img/pickle_code_reuse.png";
import pickle_keyframes from "assets/img/pickle_code_keyframes.png";
import pickle_transform from "assets/img/pickle_code_transform.png";

export default class StyledPage extends Component {
    componentWillReceiveProps() {
        const { scroll } = this.props;
        console.log(scroll);
        const move_screen = document.getElementById("move_screen");
        move_screen.style.transform = `translateX(-${scroll - 4900}px)`;
    }
    render() {
        return (
            <Column
                padding_top="110px"
                padding_bottom="110px"
                padding_left="110px"
                padding_right="110px"
                color="#fbeff2"
                position="relative"
            >
                <Text size="20px" font_family="NotoSansCJKkr-Bold">
                    UI 편하게 관리하고 쉽게 쓰기
                </Text>
                <Text top="60px" size="16px" color="dark_gray">
                    모든 페이지에 적용되는 GlobalStyle을 선언합니다
                </Text>
                <Row top="30px" align_items="center" justify_content="space-between">
                    <Row>
                        <CodeImg width="290px" height="190px" src={pickle_provider} />
                        <CodeImg width="400px" height="255px" left="8px" src={pickle_globalstyle} />
                    </Row>
                    <Text
                        left="30px"
                        size="14px"
                        height="24px"
                        color="dark_gray"
                        text_align="center"
                        font_family="NotoSansCJKkr-Light"
                    >
                        팀원과의 협업 과정에서 스타일의 일관성이 떨어지는 것을 방지하고 규격을 정함으로써 스타일 작업에
                        대한 시간을 단축시키기 위해 Theme Style을 구축하였습니다. ThemeProvider와 GlobalStyle을 사용하여{" "}
                        <br /> 피클플러스 모든 페이지에 공통으로 사용되는 스타일을 적용하였습니다.
                    </Text>
                </Row>
                <Text top="80px" size="16px" color="dark_gray" align_self="flex-end">
                    style의 재사용성을 높힙니다
                </Text>
                <Row top="30px" align_items="center" justify_content="space-between">
                    <Text
                        size="14px"
                        height="24px"
                        color="dark_gray"
                        text_align="center"
                        font_family="NotoSansCJKkr-Light"
                    >
                        공통적으로 사용하는 스타일 컴포넌트를 선언 후 특정 페이지에서 활용해야 할 때 확장시켜 사용하면
                        중복되는 스타일을 줄일 수 있습니다. 또, props를 사용하여 특정 스타일 변경이 쉽게 가능합니다.
                    </Text>
                    <Row left="30px">
                        <CodeImg width="450px" height="255px" src={pickle_column} />
                        <CodeImg width="280px" height="190px" left="8px" src={pickle_reuse} />
                    </Row>
                </Row>
                <Column
                    color="#fbeff2"
                    position="relative"
                    width="200%"
                    max_width="1600px"
                    min_height="180px"
                    top="80px"
                    padding_left="-110px"
                    padding_right="-110px"
                >
                    <BorderText id="move_screen">역동적인 화면을 만들어냅니다</BorderText>
                </Column>
                <Row top="30px" align_items="center" justify_content="space-between">
                    <Row align_items="flex-end">
                        <BounceCodeImg width="230px" height="350px" src={pickle_keyframes} />
                        <Column left="8px" align_items="center">
                            <ShadowText> 코드 위에 커서를 올려보세요👏🏼</ShadowText>
                            <HeartCodeImg width="395px" height="240px" src={pickle_transform} />
                        </Column>
                    </Row>
                    <Column width="40%" align_items="center">
                        <TypingText>keyframes, animation, transition등과 같은 애니메이션 관련 프로퍼티를</TypingText>
                        <TypingText>적극 활용하여 사용자 경험을 높이려했으며 즐거운 시각적 효과를 제공하여</TypingText>
                        <TypingText2>이목을 집중시키려했습니다. </TypingText2>
                    </Column>
                </Row>
            </Column>
        );
    }
}
