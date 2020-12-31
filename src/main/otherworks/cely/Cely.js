import React, { Component } from "react";
import { Container, Row, Img, Modal, ScrollColumn, CloseButton } from "common/styleUtil";
import cely from "assets/img/cely.png";
import java from "assets/img/java.png";
import androidstudio from "assets/img/androidstudio.png";
import firebase from "assets/img/firebase.png";

export default class Cely extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: null,
        };
    }
    openCelyModal = () => {
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
                            <ScrollColumn>Cely</ScrollColumn>
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
        const java = document.getElementById("java_1");
        const androidstudio = document.getElementById("androidstudio_1");
        const firebase = document.getElementById("firebase_1");
        java.style.width = "120px";
        java.style.height = "120px";
        androidstudio.style.width = "200px";
        androidstudio.style.height = "120px";
        firebase.style.width = "240px";
        firebase.style.height = "120px";
    };
    handleMouseout = () => {
        const java = document.getElementById("java_1");
        const androidstudio = document.getElementById("androidstudio_1");
        const firebase = document.getElementById("firebase_1");
        java.style.width = "0px";
        java.style.height = "0px";
        androidstudio.style.width = "0px";
        androidstudio.style.height = "0px";
        firebase.style.width = "0px";
        firebase.style.height = "0px";
    };
    render() {
        const { modal } = this.state;
        const { openCelyModal, handleMouseover, handleMouseout } = this;
        return (
            <>
                {modal}
                <Row onClick={openCelyModal}>
                    <Img
                        width="430px"
                        mobile_width="155px"
                        height="330px"
                        mobile_height="100px"
                        border="solid 1px #1c1c1c"
                        filter="opacity(0.5)"
                        hover_filter="opacity(0.2)"
                        cursor="pointer"
                        src={cely}
                        onMouseOver={handleMouseover}
                        onMouseOut={handleMouseout}
                    />
                    <Img
                        id="java_1"
                        width="0px"
                        height="0px"
                        position="absolute"
                        transform="translate(50px, 60px)"
                        pointer_events="none"
                        src={java}
                    />
                    <Img
                        desktop
                        id="androidstudio_1"
                        width="0px"
                        height="0px"
                        position="absolute"
                        transform="translate(200px, 60px)"
                        pointer_events="none"
                        src={androidstudio}
                    />
                    <Img
                        desktop
                        id="firebase_1"
                        width="0px"
                        height="0px"
                        position="absolute"
                        transform="translate(90px, 170px)"
                        pointer_events="none"
                        src={firebase}
                    />
                </Row>
            </>
        );
    }
}
