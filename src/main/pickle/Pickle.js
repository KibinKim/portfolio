import React, { Component } from "react";
import {
    Container,
    Column,
    Text,
    Img,
    SideText,
    Modal,
    ScrollColumn,
    CloseButton,
    LottieResponsive,
} from "common/styleUtil";
import { Logo } from "main/pickle/styleUtil";
import MobilePage from "main/pickle/mobile/MobilePage";
import IntroPage from "main/pickle/intro/IntroPage";
import MainSkillPage from "main/pickle/mainskill/MainSkillPage";
import ReduxPage from "main/pickle/redux/ReduxPage";
import StyledPage from "main/pickle/styledcomponents/StyledPage";
import EtcPage from "main/pickle/etc/EtcPage";
import CoworkPage from "main/pickle/cowork/CoworkPage";
import { WorkButton } from "main/styleUtil";
import { connect } from "react-redux";
import pickle from "assets/motion/pickle";
import pickle_landing from "assets/img/pickle_landing.png";
import pickle_logo from "assets/img/pickle_logo.png";

class Pickle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_open: false,
            modal_scroll: 0,
        };
    }
    handleScroll = () => {
        const contents = document.querySelector("#contents");
        const modal_scroll = contents.scrollTop;
        this.setState({ modal_scroll });
    };
    render() {
        const { modal_open, modal_scroll } = this.state;
        const { scroll } = this.props;
        return (
            <>
                <Modal
                    open={modal_open}
                    children={
                        <Container
                            padding_top="30px"
                            mobile_padding_top="10px"
                            padding_bottom="30px"
                            mobile_padding_bottom="10px"
                            padding_left="30px"
                            mobile_padding_left="10px"
                            padding_right="30px"
                            mobile_padding_right="10px"
                            align_items="center"
                        >
                            <CloseButton
                                align_self="flex-end"
                                style={{ right: "6px" }}
                                onClick={() => this.setState({ modal_open: false, modal_scroll: 0 })}
                            />
                            <ScrollColumn id="contents" onScroll={this.handleScroll}>
                                <Img src={pickle_landing} width="100%" height="auto" />
                                <Column
                                    padding_bottom="70px"
                                    mobile_padding_bottom="50px"
                                    padding_left="110px"
                                    mobile_padding_left="0px"
                                    padding_right="110px"
                                    mobile_padding_right="0px"
                                >
                                    <Img
                                        src={pickle_logo}
                                        width="350px"
                                        mobile_width="160px"
                                        mobile_top="30px"
                                        height="auto"
                                    />
                                    {/* <Logo /> */}
                                    <Text
                                        top="40px"
                                        mobile_top="30px"
                                        size="16px"
                                        mobile_size="14px"
                                        font_family="NotoSansCJKkr-Medium"
                                    >
                                        Web Development 100%
                                    </Text>
                                    <Text
                                        top="10px"
                                        size="12px"
                                        mobile_size="8px"
                                        color="light_gray"
                                        font_family="NotoSansCJKkr-Light"
                                    >
                                        #구독 요금 &nbsp; #정산 &nbsp; #자동 결제 &nbsp; #실시간 매칭 <br />
                                        #리액트 환경 &nbsp; #반응형 &nbsp; #역동적인 &nbsp; #유지보수
                                    </Text>
                                </Column>
                                <IntroPage />
                                <MainSkillPage />
                                <ReduxPage />
                                <StyledPage scroll={modal_scroll} />
                                <MobilePage />
                                <EtcPage />
                                <CoworkPage />
                                <Column
                                    align_items="center"
                                    padding_top="13px"
                                    mobile_padding_top="8px"
                                    padding_bottom="13px"
                                    mobile_padding_bottom="8px"
                                    color="#000"
                                >
                                    <Text size="15px" mobile_size="12px" color="#4fdad5">
                                        kibin<span style={{ color: "#fff" }}>.</span>
                                        <span style={{ color: "#f2ee72" }}>say</span>
                                        <span style={{ color: "#fff" }}>(</span>
                                        <span style={{ color: "#e6ac0c" }}>"thank you!"</span>
                                        <span style={{ color: "#fff" }}>);</span>
                                    </Text>
                                </Column>
                            </ScrollColumn>
                        </Container>
                    }
                    close={() => {
                        this.setState({ modal_open: false });
                    }}
                    width="calc(100vw - 40px)"
                    max_width="1620px"
                    border_radius="6px"
                />
                <Container
                    align_items="flex-end"
                    mobile_align_items="center"
                    padding_left="130px"
                    mobile_padding_left="30px"
                    padding_right="130px"
                    mobile_padding_right="30px"
                    padding_top="150px"
                    mobile_padding_top="80px"
                    padding_bottom="150px"
                    mobile_padding_bottom="80px"
                    color="#11c78f"
                    position="relative"
                >
                    <SideText
                        ab_left="100px"
                        mobile_ab_left="unset"
                        color="v_light_gray"
                        scroll={scroll}
                        active={3720}
                        mobile_active={2700}
                        mobile_transform="translateY(-40px)"
                    >
                        {" "}
                        이 쯤에서{" "}
                    </SideText>
                    <SideText
                        top="30px"
                        ab_left="70px"
                        mobile_ab_left="unset"
                        color="v_light_gray"
                        scroll={scroll}
                        active={3720}
                        mobile_active={2700}
                        mobile_transform="translateY(-40px)"
                    >
                        {" "}
                        작업물을 살펴볼게요 -{" "}
                    </SideText>
                    <Column align_items="center" mobile_top="30px">
                        <LottieResponsive
                            isClickToPauseDisabled={true}
                            options={{
                                animationData: pickle,
                                loop: true,
                                autoplay: true,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid meet",
                                },
                            }}
                            height="360px"
                            mobile_height="240px"
                        ></LottieResponsive>
                        <Text
                            color="#fff"
                            mobile_top="20px"
                            size="72px"
                            mobile_size="40px"
                            font_family="NotoSansCJKkr-Bold"
                        >
                            Pickle +
                        </Text>
                    </Column>
                    <WorkButton
                        a
                        top="225px"
                        mobile_top="165px"
                        right="70px"
                        mobile_right="0px"
                        color="#fff"
                        child="작업물 보기"
                        onClick={() => this.setState({ modal_open: true })}
                    />
                </Container>
            </>
        );
    }
}

export default connect(
    (state) => ({
        scroll: state.layout.get("scroll"),
    }),
    (dispatch) => ({}),
)(Pickle);
