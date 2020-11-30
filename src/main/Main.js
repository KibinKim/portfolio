import React, { Component } from "react";
import My from "main/my/My";
import Pickle from "main/pickle/Pickle";
import { Container, Column, Text } from "common/styleUtil";
import { Page_1, Page_2, SlideInText, SlowSlideInText, BounceText } from "./styleUtil";

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Page_1>
                    <SlideInText second="3s" font_family="NotoSansCJKkr-Bold">
                        Make the Question.
                        <br />
                        <br />
                    </SlideInText>
                    <SlowSlideInText second="3s" font_family="NotoSansCJKkr-Light">
                        안녕하세요?
                        <br />
                        저는 프론트엔드 개발자
                        <br />
                        <span style={{ fontFamily: "NotoSansCJKkr" }}>김기빈</span> 입니다.
                    </SlowSlideInText>
                </Page_1>
                <My />
                <Pickle />
                <Page_2>
                    <Text size="24px" mobile_size="14px" color="#fff" font_family="NotoSansCJKkr-Light">
                        📮&nbsp;&nbsp; 함께 나누고 싶은 얘기가 있으시다면
                    </Text>
                    <Column align_items="center">
                        <Text
                            id="email"
                            top="70px"
                            mobile_top="35px"
                            size="82px"
                            mobile_size="32px"
                            color="#fff"
                            hover_size="77px"
                            mobile_hover_size="25px"
                            hover_color="#4970bd"
                            cursor="pointer"
                            transition="all 0.3s"
                        >
                            kibin3846@gmail.com
                        </Text>
                        <BounceText
                            top="70px"
                            mobile_top="40px"
                            size="18px"
                            mobile_size="10px"
                            color="warm_gray"
                            font_family="NotoSansCJKkr-Light"
                        >
                            어떤 내용이여도 좋습니다! 메일을 보내주시면 평일 기준 3일 내로 답장을 드릴게요.
                        </BounceText>
                    </Column>
                </Page_2>
            </Container>
        );
    }
}
