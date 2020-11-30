import React, { Component } from "react";
import { Container } from "common/styleUtil";

export default class Pickle extends Component {
    render() {
        return (
            <Container
                padding_left="130px"
                mobile_padding_left="30px"
                padding_right="130px"
                mobile_padding_right="30px"
                padding_top="150px"
                mobile_padding_top="50px"
                padding_bottom="150px"
                mobile_padding_bottom="50px"
                color="#11c78f"
            ></Container>
        );
    }
}
