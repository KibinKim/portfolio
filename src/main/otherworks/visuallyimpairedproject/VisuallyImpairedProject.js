import React, { Component } from "react";
import { Container, Row, Img, Modal, ScrollColumn, CloseButton } from "common/styleUtil";
import visually from "assets/img/visually.png";
import java from "assets/img/java.png";
import androidstudio from "assets/img/androidstudio.png";
import { media } from "../../../common/styleUtil";

export default class VisuallyImpairedProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: null,
        };
    }
    openVisuallyModal = () => {
        this.handleMouseout();
        this.setState({
            modal: (
                <Modal
                    open={true}
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
                                onClick={() => this.setState({ modal: null })}
                            />
                            <ScrollColumn>VisuallyImpairedProject</ScrollColumn>
                        </Container>
                    }
                    close={() => {
                        this.setState({ modal: null });
                    }}
                    width="calc(100vw - 40px)"
                    mobile_width="calc(100vw - 50px)"
                    max_width="1620px"
                    border_radius="6px"
                />
            ),
        });
    };
    handleMouseover = () => {
        const java = document.getElementById("java_2");
        const androidstudio = document.getElementById("androidstudio_2");
        java.style.width = "120px";
        java.style.height = "120px";
        androidstudio.style.width = "200px";
        androidstudio.style.height = "120px";
    };
    handleMouseout = () => {
        const java = document.getElementById("java_2");
        const androidstudio = document.getElementById("androidstudio_2");
        java.style.width = "0px";
        java.style.height = "0px";
        androidstudio.style.width = "0px";
        androidstudio.style.height = "0px";
    };
    render() {
        const { modal } = this.state;
        const { openVisuallyModal, handleMouseover, handleMouseout } = this;
        return (
            <>
                {modal}
                <Row onClick={openVisuallyModal}>
                    <Img
                        width="430px"
                        mobile_width="155px"
                        height="330px"
                        mobile_height="100px"
                        border="solid 1px #1c1c1c"
                        filter="opacity(0.5)"
                        hover_filter="opacity(0.1)"
                        cursor="pointer"
                        src={visually}
                        onMouseOver={handleMouseover}
                        onMouseOut={handleMouseout}
                    />
                    <Img
                        desktop
                        id="java_2"
                        width="0px"
                        mobile_width="0px"
                        height="0px"
                        mobile_height="0px"
                        position="absolute"
                        transform="translate(50px, 100px)"
                        pointer_events="none"
                        src={java}
                    />
                    <Img
                        desktop
                        id="androidstudio_2"
                        width="0px"
                        height="0px"
                        position="absolute"
                        transform="translate(200px, 100px)"
                        pointer_events="none"
                        src={androidstudio}
                    />
                </Row>
            </>
        );
    }
}
