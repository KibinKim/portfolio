import React, { Component } from "react";
import { URL_FRONT, URL } from "common/config";
import Loading from "loading/Loading";
import My from "main/my/My";
import MyWork from "main/my/MyWork";
import Pickle from "main/pickle/Pickle";
import Others from "main/others/Others";
import OtherWorks from "main/otherworks/OtherWorks";
import Appeal from "main/appeal/Appeal";
import { Column, Text, MobileBr } from "common/styleUtil";
import { MainContainer, Page_1, Page_2, SlideInText, BounceText, Email } from "./styleUtil";
import { connect } from "react-redux";
import { device_check } from "common/config";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            env: null,
            loading: <Loading />,
        };
    }

    componentWillMount = () => {
        this.setState({ env: "" });
    };

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
                    second_title.style.transform = `scale(${scroll * 0.0008})`;
                    page_1.style.opacity = `1`;
                } else if (scroll > 1100) {
                    page_1.style.opacity = `${1 - scroll * 0.0001}`;
                }
            } else if (env == "MOBILE") {
                if (scroll > 220 && scroll < 550) second_title.style.transform = `scale(${scroll * 0.0008})`;
            }
        }
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
        const env = device_check();
        this.setState({ env });
        const header = document.getElementById("header");
        const footer = document.getElementById("footer");
        if (header && footer) {
            header.style.display = "none";
            footer.style.display = "none";
        }
        setTimeout(() => {
            this.setState({ loading: false });
            header.style.display = "flex";
            footer.style.display = "flex";
        }, 1600);
    };

    render() {
        const { loading } = this.state;
        const { history } = this.props;
        return loading ? (
            loading
        ) : (
            <MainContainer onScroll={this.handleScroll}>
                <Page_1 id="page_1">
                    <SlideInText
                        id="first_title"
                        position="relative"
                        size="90px"
                        second="3s"
                        text_align="center"
                        font_family="NotoSansCJKkr-Bold"
                    >
                        Make the <MobileBr />
                        Question.
                        <Text top="50px" size="18px" mobile_size="16px" color="#fff">
                            Web Developer
                        </Text>
                    </SlideInText>
                    <SlideInText
                        id="second_title"
                        position="relative"
                        top="700px"
                        mobile_top="400px"
                        size="70px"
                        mobile_size="55px"
                        tablet_size="55px"
                        color="#fff"
                        text_align="center"
                        height="150px"
                        mobile_height="100px"
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
                        <Email id="email" onClick={() => history.push("/contact")}>
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
            </MainContainer>
        );
    }
}

export default connect(
    (state) => ({
        scroll: state.layout.get("scroll"),
    }),
    (dispatch) => ({}),
)(Main);
