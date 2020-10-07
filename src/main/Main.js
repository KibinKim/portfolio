import React, { Component } from "react";
import { Container, Column, Row, Text } from "common/styleUtil";
import { PageContainer, Page_1, Page_2, SlideInText, SlowSlideInText, BounceText, HeartText } from "./styleUtil";

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
                <Page_2>
                    <Text size="24px" color="#fff" font_family="NotoSansCJKkr-Light">
                        📮&nbsp;&nbsp; 함께 나누고 싶은 얘기가 있으시다면
                    </Text>
                    <Column align_items="center" height="259px">
                        <Text
                            id="email"
                            top="70px"
                            size="82px"
                            color="#fff"
                            hover_size="77px"
                            hover_color="#3DC88C"
                            cursor="pointer"
                            transition="all 0.3s"
                        >
                            kibin3846@gmail.com
                        </Text>
                        <BounceText top="70px" size="18px" color="warm_gray" font_family="NotoSansCJKkr-Light">
                            어떤 내용이여도 좋습니다! 메일을 보내주시면 평일 기준 3일 내로 답장을 드릴게요.
                        </BounceText>
                    </Column>
                </Page_2>
            </Container>
        );
    }
}
