import React, { Component } from "react";
import { Container, Column, Row, Text, SideText, MobileBr } from "common/styleUtil";
import { AppealContainer, TypingText, ItemText } from "main/appeal/styleUtil";
import { WorkButton } from "main/styleUtil";
import { connect } from "react-redux";

class Appeal extends Component {
    typingStart() {
        let typing_bool = false;
        let typing_idx = 0;
        let copy_text = document.getElementById("text").innerText;
        let typing_text = document.getElementById("typing");
        let ty_int;
        copy_text = copy_text.split("");
        if (!typing_bool) {
            typing_bool = true;
            ty_int = setInterval(typing, 250);
        }
        function typing() {
            if (typing_idx < copy_text.length) {
                typing_text.append(copy_text[typing_idx]);
                typing_idx++;
            } else {
                clearInterval(ty_int);
            }
        }
    }
    render() {
        const { scroll } = this.props;
        const { typingStart } = this;
        return (
            <Container
                padding_top="160px"
                mobile_padding_top="50px"
                padding_bottom="130px"
                mobile_padding_bottom="50px"
                mobile_padding_left="30px"
                mobile_padding_right="30px"
                color="#fafafa"
            >
                <SideText
                    ab_right
                    ab_left="150px"
                    top="-30px"
                    color="light_gray"
                    scroll={scroll}
                    active={5800}
                    mobile_active={4900}
                    onAnimationStart={() => (document.getElementById("typing").innerText = "")}
                    onAnimationEnd={typingStart}
                    mobile_transform="translate(-100px, 20px)"
                >
                    그래서 말이죠 -
                </SideText>
                <Text display="none" mobile_display="none" id="text">
                    함께 일할 멋진 웹 개발자를 찾고 계신가요?
                </Text>
                <Row
                    top="80px"
                    mobile_top="20px"
                    height="125px"
                    mobile_height="30px"
                    white_space="nowrap"
                    justify_content="center"
                >
                    <TypingText display="block" id="typing"></TypingText>
                </Row>
                <AppealContainer>
                    <Row
                        mobile_width="100%"
                        top="70px"
                        mobile_top="0px"
                        right="80px"
                        mobile_right="0px"
                        align_items="flex-start"
                        justify_content="flex-end"
                        mobile_justify_content="flex-start"
                    >
                        <Text
                            color="dark_gray"
                            size="32px"
                            mobile_size="25px"
                            height="1.76"
                            letter_spacing="2px"
                            font_family="NotoSansCJKkr-Bold"
                        >
                            이럴 때 제가 딱 <br />
                            어울릴 것 같아요
                        </Text>
                    </Row>
                    <Row desktop width="1px" height="410px" color="#8b8b8b" />
                    <Column mobile_width="100%" top="70px" mobile_top="30px" left="80px" mobile_left="0px">
                        <ItemText>경험을 갖춘 웹 개발자가 필요할 때</ItemText>
                        <ItemText>
                            책임감 있고 함께 일할 때 시너지를 주는 팀원이 <MobileBr />
                            필요할 때
                        </ItemText>
                        <ItemText>열정이 있으며 성장하는 사람이 필요할 때</ItemText>
                        <ItemText font_family="NotoSansCJKkr-Bold">좋아하는 일을 열심히 하는 사람이 필요할 때</ItemText>
                        <WorkButton
                            c
                            top="50px"
                            color="dark_gray"
                            font_color="dark_gray"
                            border="solid 1px #1a1a1a"
                            onClick={() => window.open("https://www.notion.so/6d9ec2f67956418a81ea97a13198ff56")}
                        />
                    </Column>
                </AppealContainer>
            </Container>
        );
    }
}

export default connect(
    (state) => ({
        scroll: state.layout.get("scroll"),
    }),
    (dispatch) => ({}),
)(Appeal);
