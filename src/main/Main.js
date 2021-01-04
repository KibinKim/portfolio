import React, { Component } from "react";
import { URL_FRONT } from "common/config";
import My from "main/my/My";
import MyWork from "main/my/MyWork";
import Pickle from "main/pickle/Pickle";
import Others from "main/others/Others";
import OtherWorks from "main/otherworks/OtherWorks";
import Appeal from "main/appeal/Appeal";
import { Container, Column, Text } from "common/styleUtil";
import { Page_1, Page_2, SlideInText, BounceText, Email } from "./styleUtil";
import { connect } from "react-redux";
import { device_check } from "common/config";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            env: "",
        };
    }
    handleScroll = (e) => {
        const { scroll } = this.props;
        const { env } = this.state;
        const page_1 = document.getElementById("page_1");
        const first_title = document.getElementById("first_title");
        const second_title = document.getElementById("second_title");

        if (first_title && second_title && page_1) {
            first_title.style.transform = `scale(${1 - scroll * 0.001})`;
            if (env == "PC") {
                if (scroll > 600 && scroll < 1000) {
                    second_title.style.transform = `scale(${scroll * 0.001})`;
                    page_1.style.filter = ` blur(0px)`;
                } else if (scroll > 1100) {
                    page_1.style.filter = ` blur(${scroll * 0.0009}px)`;
                }
            } else if (env == "MOBILE") {
                if (scroll > 220 && scroll < 550) second_title.style.transform = `scale(${scroll * 0.001})`;
            }
        }
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
        const env = device_check();
        this.setState({ env });
    };

    render() {
        return (
            <Container overflow_x="hidden" onScroll={this.handleScroll}>
                <Page_1 id="page_1">
                    <SlideInText
                        id="first_title"
                        size="90px"
                        second="3s"
                        text_align="center"
                        font_family="NotoSansCJKkr-Bold"
                    >
                        Make the Question.
                        <Text top="50px" size="18px" mobile_size="16px" color="#fff">
                            Web Developer
                        </Text>
                    </SlideInText>
                    <SlideInText
                        id="second_title"
                        top="700px"
                        mobile_top="400px"
                        size="70px"
                        mobile_size="25px"
                        tablet_size="35px"
                        color="#fff"
                        text_align="center"
                        height="150px"
                        mobile_height="70px"
                        font_family="NotoSansCJKkr-Medium"
                        style={{ transform: "scale(0)" }}
                    >
                        안녕하세요! <br /> 저는 김기빈입니다 :)
                    </SlideInText>
                </Page_1>
                <My />
                <MyWork />
                <Pickle />
                <Others />
                {/* <OtherWorks /> */}
                <Appeal />
                <Page_2>
                    <Text size="24px" mobile_size="14px" color="#000" font_family="NotoSansCJKkr-Light">
                        📮&nbsp;&nbsp; 함께 나누고 싶은 얘기가 있으시다면
                    </Text>
                    <Column align_items="center">
                        <Email id="email" onClick={() => window.open(`${URL_FRONT}/contact`)}>
                            kibin3846@gmail.com
                        </Email>
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

export default connect(
    (state) => ({
        scroll: state.layout.get("scroll"),
    }),
    (dispatch) => ({}),
)(Main);
