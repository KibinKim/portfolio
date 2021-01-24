import React, { Component } from "react";
import { Container, Text } from "common/styleUtil";
import { LoadingBox, ReadyText } from "loading/styleUtil";

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready_text: "웹 사이트 준비 중...",
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ ready_text: "시작할게요!" });
        }, 1500);
    }
    render() {
        return (
            <Container height="100vh" align_items="center" justify_content="center">
                <LoadingBox>
                    <Text size="80px" mobile_size="40px" font_family="NotoSansCJKkr-Bold">
                        DevBean
                    </Text>
                </LoadingBox>
                <ReadyText>{this.state.ready_text}</ReadyText>
            </Container>
        );
    }
}
