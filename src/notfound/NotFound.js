import React, { Component } from "react";
import { Container, Text } from "common/styleUtil";
import { LoadingBox } from "loading/styleUtil";

export default class NotFound extends Component {
    render() {
        const { history } = this.props;
        return (
            <Container height="100vh" align_items="center" justify_content="center">
                <LoadingBox onClick={() => history.replace("/")}>
                    <Text
                        size="80px"
                        mobile_size="40px"
                        font_family="NotoSansCJKkr-Bold"
                        cursor="pointer"
                        hover_shadow="2px 2px 4px gray"
                        transition="all 0.2s ease-out"
                    >
                        DevBean
                    </Text>
                </LoadingBox>
                <Text top="40px" mobile_top="20px" size="30px" mobile_size="20px" font_family="NotoSansCJKkr-Medium">
                    길을 잃으셨나요?
                </Text>
                <Text
                    top="15px"
                    mobile_top="10px"
                    size="20px"
                    height="30px"
                    mobile_height="20px"
                    mobile_size="15px"
                    text_align="center"
                    color="mi_gray"
                >
                    찾을 수 없는 페이지입니다.
                    <br />위 버튼을 눌러 홈으로 이동해주세요!
                </Text>
            </Container>
        );
    }
}
