import React, { Component } from "react";
import { Column, Row, Text, Img, MobileBr, DesktopBr } from "common/styleUtil";
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
            <Column
                padding_top="110px"
                mobile_padding_top="30px"
                padding_bottom="110px"
                mobile_padding_bottom="30px"
                mobile_padding_left="15px"
                padding_left="110px"
                mobile_padding_right="15px"
                color="#f5f6f6"
            >
                <Text size="20px" mobile_size="18px" font_family="NotoSansCJKkr-Bold">
                    모바일 사용자를 생각합니다
                </Text>
                <Text top="60px" mobile_top="40px" size="16px" mobile_size="14px" color="dark_gray">
                    media query를 사용하여 <MobileBr /> 어떠한 크기에도 반응하는 UI를 지닙니다
                </Text>
                <Row mobile_direction="column" mobile_top="20px" justify_content="space-between">
                    <Column align_items="center" justify_content="center">
                        <Row align_items="flex-end" left="10px" mobile_left="0px">
                            <Img
                                src={pickle_myparty}
                                width="350px"
                                mobile_width="280px"
                                height="200px"
                                mobile_height="150px"
                                border_radius="6px"
                                box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                            />
                            <Img
                                desktop
                                src={pickle_mediaquery}
                                width="370px"
                                height="226px"
                                border_radius="6px"
                                box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                            />
                        </Row>
                        <Row align_items="flex-start" mobile_top="8px" right="10px" mobile_right="0px">
                            <Img
                                desktop
                                src={pickle_mediaphone}
                                width="370px"
                                height="210px"
                                border_radius="6px"
                                box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                            />
                            <Img
                                src={pickle_matchpage}
                                width="350px"
                                mobile_width="280px"
                                height="200px"
                                mobile_height="150px"
                                border_radius="6px"
                                box_shadow="0 5px 32px 0 rgba(15, 15, 15, 0.15)"
                            />
                        </Row>
                        <Text
                            top="30px"
                            size="14px"
                            mobile_size="12px"
                            height="24px"
                            mobile_height="22px"
                            color="dark_gray"
                            text_align="center"
                            mobile_text_align="right"
                            font_family="NotoSansCJKkr-Light"
                        >
                            media query를 사용하여 어떠한 크기의 환경에서도 반응할 수 있도록 UI를 제작하였고{" "}
                            <DesktopBr />
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
