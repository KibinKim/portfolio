import React, { Component } from "react";
import { Column, Row, Text, MobileBr, DesktopBr } from "common/styleUtil";
import {
    BorderText,
    CodeImg,
    BounceCodeImg,
    HeartCodeImg,
    TypingText,
    TypingText2,
    ShadowText,
} from "main/pickle/styleUtil";
import { device_check } from "common/config";
import pickle_globalstyle from "assets/img/pickle_code_globalstyle.png";
import pickle_provider from "assets/img/pickle_code_provider.png";
import pickle_column from "assets/img/pickle_code_column.png";
import pickle_reuse from "assets/img/pickle_code_reuse.png";
import pickle_keyframes from "assets/img/pickle_code_keyframes.png";
import pickle_transform from "assets/img/pickle_code_transform.png";

export default class StyledPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            env: "",
        };
    }
    componentDidMount = () => {
        const env = device_check();
        this.setState({ env });
    };
    componentWillReceiveProps() {
        const { scroll } = this.props;
        const { env } = this.state;
        console.log(scroll, window.innerWidth);
        const move_screen = document.getElementById("move_screen");
        if (env == "PC") {
            window.innerWidth > 1220
                ? (move_screen.style.transform = `translateX(-${scroll - 4520}px)`)
                : (move_screen.style.transform = `translateX(-${scroll - 6300}px)`);
        } else if (env == "MOBILE") move_screen.style.transform = `translateX(-${scroll - 3450}px)`;
    }
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
                color="#fbeff2"
                position="relative"
            >
                <Text size="20px" mobile_size="18px" font_family="NotoSansCJKkr-Bold">
                    UI 편하게 관리하고 쉽게 쓰기
                </Text>
                <Text
                    top="60px"
                    mobile_top="40px"
                    size="16px"
                    mobile_size="14px"
                    mobile_height="1.65"
                    color="dark_gray"
                >
                    모든 페이지에 적용되는 <MobileBr />
                    GlobalStyle을 선언합니다
                </Text>
                <Row
                    laptop_direction="column"
                    top="30px"
                    mobile_top="15px"
                    align_items="center"
                    justify_content="space-between"
                >
                    <Row desktop width="100%">
                        <Row max_width="fit-content" width="100%" height="fit-content">
                            <CodeImg max_width="290px" width="100%" height="auto" src={pickle_provider} />
                        </Row>
                        <Row max_width="fit-content" width="100%" height="fit-content" left="8px">
                            <CodeImg max_width="400px" width="100%" height="auto" src={pickle_globalstyle} />
                        </Row>
                    </Row>
                    <Text
                        width="100%"
                        left="30px"
                        laptop_left="0px"
                        laptop_top="30px"
                        size="14px"
                        mobile_size="12px"
                        height="24px"
                        mobile_height="22px"
                        color="dark_gray"
                        text_align="center"
                        laptop_text_align="left"
                        font_family="NotoSansCJKkr-Light"
                    >
                        팀원과의 협업 과정에서 스타일의 일관성이 떨어지는 것을 방지하고 규격을 정함으로써 스타일 작업에
                        대한 시간을 단축시키기 위해 Theme Style을 구축하였습니다. ThemeProvider와 GlobalStyle을 사용하여{" "}
                        피클플러스 모든 페이지에 공통으로 사용되는 스타일을 적용하였습니다.
                    </Text>
                </Row>
                <Text
                    top="80px"
                    mobile_top="40px"
                    size="16px"
                    mobile_size="14px"
                    color="dark_gray"
                    align_self="flex-end"
                >
                    style의 재사용성을 높힙니다
                </Text>
                <Row
                    laptop_direction="column"
                    top="30px"
                    mobile_top="15px"
                    align_items="center"
                    justify_content="space-between"
                >
                    <Text
                        laptop_order="2"
                        laptop_top="30px"
                        size="14px"
                        mobile_size="12px"
                        height="24px"
                        mobile_height="22px"
                        color="dark_gray"
                        text_align="center"
                        laptop_text_align="right"
                        font_family="NotoSansCJKkr-Light"
                    >
                        공통적으로 사용하는 스타일 컴포넌트를 선언 후 특정 페이지에서 활용해야 할 때 확장시켜 사용하면
                        중복되는 스타일을 줄일 수 있습니다. 또, props를 사용하여 특정 스타일 변경이 쉽게 가능합니다.
                    </Text>
                    <Row
                        desktop
                        width="100%"
                        left="30px"
                        laptop_justify_content="flex-end"
                        laptop_left="0px"
                        laptop_order="1"
                    >
                        <Row max_width="fit-content" width="100%" height="fit-content">
                            <CodeImg max_width="450px" width="100%" height="auto" src={pickle_column} />
                        </Row>
                        <Row max_width="fit-content" width="100%" height="fit-content">
                            <CodeImg max_width="280px" width="100%" height="auto" left="8px" src={pickle_reuse} />
                        </Row>
                    </Row>
                </Row>
                <Column
                    color="#fbeff2"
                    position="relative"
                    width="200%"
                    max_width="1600px"
                    min_height="180px"
                    mobile_min_height="50px"
                    top="80px"
                    mobile_top="40px"
                    padding_left="-110px"
                    padding_right="-110px"
                >
                    <BorderText id="move_screen">역동적인 화면을 만들어냅니다</BorderText>
                </Column>
                <Row
                    laptop_direction="column"
                    top="30px"
                    mobile_top="20px"
                    align_items="center"
                    justify_content="space-between"
                >
                    <Row desktop width="100%" align_items="flex-end" laptop_justify_content="center">
                        <Row max_width="fit-content" width="100%" height="fit-content">
                            <BounceCodeImg
                                max_width="230px"
                                min_width="165px"
                                width="100%"
                                height="auto"
                                src={pickle_keyframes}
                            />
                        </Row>
                        <Column
                            left="8px"
                            width="100%"
                            max_width="fit-content"
                            height="fit-content"
                            align_items="center"
                        >
                            <ShadowText> 코드 위에 커서를 올려보세요👏🏼</ShadowText>
                            <HeartCodeImg
                                max_width="395px"
                                min_width="300px"
                                width="100%"
                                height="auto"
                                src={pickle_transform}
                            />
                        </Column>
                    </Row>
                    <Column desktop width="100%" laptop_width="unset" align_items="flex-start" laptop_top="30px">
                        <TypingText>keyframes, animation, transition등과 같은 애니메이션 관련 프로퍼티를</TypingText>
                        <TypingText>적극 활용하여 사용자 경험을 높이려했으며 즐거운 시각적 효과를 제공하여</TypingText>
                        <TypingText2>이목을 집중시키려했습니다. </TypingText2>
                    </Column>
                    <Column mobile width="100%" align_items="center">
                        <Text size="12px" height="22px" color="dark_gray" font_family="NotoSansCJKkr-Light">
                            keyframes, animation, transition등과 같은 애니메이션 관련 프로퍼티를 적극 활용하여 사용자
                            경험을 높이려했으며 즐거운 시각적 효과를 제공하여 이목을 집중시키려했습니다.
                        </Text>
                    </Column>
                </Row>
            </Column>
        );
    }
}
