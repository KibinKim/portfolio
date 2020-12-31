import React, { Component } from "react";
import { Column, Row, Text, Img } from "common/styleUtil";
import { PhoneBox, PhoneFrame, PhoneDisplayFrame, PhoneDisplay } from "main/pickle/styleUtil";
import pickle_myparty from "assets/img/pickle_myparty.png";
import pickle_mediaquery from "assets/img/pickle_code_mediaquery.png";
import pickle_mediaphone from "assets/img/pickle_code_mediaphone.png";
import pickle_matchpage from "assets/img/pickle_matchpage.png";
import pickle_mobile_1 from "assets/img/pickle_mobile_1.png";
import pickle_mobile_2 from "assets/img/pickle_mobile_2.png";
import pickle_mobile_3 from "assets/img/pickle_mobile_3.png";

export default class MobilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: 0,
            screen_before: -1,
            init_state: true,
        };
    }
    componentDidMount = async () => {
        this.interval = await setInterval(() => {
            this.switchMobileScreen();
        }, 3000);
    };
    switchMobileScreen = async () => {
        const { screen } = this.state;
        let next_screen = screen + 1;
        await this.setState({ screen: next_screen > 2 ? 0 : next_screen, screen_before: screen, init_state: false });
    };
    render() {
        const { screen, screen_before, init_state } = this.state;
        return (
            <Column padding_top="110px" padding_bottom="110px" padding_left="110px" color="#f5f6f6">
                <Text size="20px" font_family="NotoSansCJKkr-Bold">
                    모바일 사용자를 생각합니다
                </Text>
                <Text top="60px" size="16px" color="dark_gray">
                    media query를 사용하여 어떠한 크기에도 반응하는 UI를 지닙니다
                </Text>
                <Row justify_content="space-between">
                    <Column align_items="center" justify_content="center">
                        <Row align_items="flex-end" left="10px">
                            <Img
                                src={pickle_myparty}
                                width="350px"
                                height="200px"
                                border_radius="6px"
                                box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                            />
                            <Img
                                src={pickle_mediaquery}
                                width="370px"
                                height="226px"
                                border_radius="6px"
                                box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                            />
                        </Row>
                        <Row align_items="flex-start" right="10px">
                            <Img
                                src={pickle_mediaphone}
                                width="370px"
                                height="210px"
                                border_radius="6px"
                                box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                            />
                            <Img
                                src={pickle_matchpage}
                                width="350px"
                                height="200px"
                                border_radius="6px"
                                box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                            />
                        </Row>
                        <Text
                            top="30px"
                            size="14px"
                            height="24px"
                            color="dark_gray"
                            text_align="center"
                            font_family="NotoSansCJKkr-Light"
                        >
                            media query를 사용하여 어떠한 크기의 환경에서도 반응할 수 있도록 UI를 제작하였고 <br />
                            제작하는데에 있어 편리함을 위해 다양한 CSS property를 익혔습니다.
                        </Text>
                    </Column>
                    <PhoneBox>
                        <PhoneFrame />
                        <PhoneDisplayFrame>
                            <PhoneDisplay src={pickle_mobile_1} selected={screen === 2} before={screen_before === 2} />
                            <PhoneDisplay src={pickle_mobile_2} selected={screen === 1} before={screen_before === 1} />
                            <PhoneDisplay
                                src={pickle_mobile_3}
                                selected={screen === 0}
                                before={screen_before === 0}
                                init={init_state}
                            />
                        </PhoneDisplayFrame>
                    </PhoneBox>
                </Row>
            </Column>
        );
    }
}
