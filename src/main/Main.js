import React, { Component } from "react";
import { Container, Text } from "common/styleUtil";
import { Page_1, Page_Text, Page_Text_Slow, Page_2 } from "./styleUtil";

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Page_1>
                    <Page_Text second="3s" font_family="NotoSansCJKkr-Bold">
                        Make the Question.
                        <br />
                        <br />
                    </Page_Text>
                    <Page_Text_Slow second="3s" font_family="NotoSansCJKkr-Light">
                        안녕하세요?
                        <br />
                        저는 프론트엔드 개발자
                        <br />
                        <span style={{ fontFamily: "NotoSansCJKkr" }}>김기빈</span> 입니다.
                    </Page_Text_Slow>
                </Page_1>
                <Page_2>
                    <Page_Text>저는요,</Page_Text>
                </Page_2>
            </Container>
        );
    }
}
