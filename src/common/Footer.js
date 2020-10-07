import React, { Component } from "react";
import { FooterContainer, Row, Text } from "common/styleUtil";
import { HeartText } from "main/styleUtil";

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer color="#000">
                <Row>
                    <Text size="15px" color="v_light_gray" hover_color="#616161" cursor="pointer">
                        Github
                    </Text>
                    <Text size="15px" color="v_light_gray" hover_color="#616161" cursor="pointer" left="25px">
                        Notion
                    </Text>
                </Row>
                <Text size="15px" color="mi_gray">
                    © 2020 Kimkibin
                </Text>
                <Row align_items="center">
                    <Text size="15px" color="v_light_gray">
                        Made by Kimkibin
                    </Text>
                    <HeartText size="20px" left="10px">
                        👦🏻
                    </HeartText>
                </Row>
            </FooterContainer>
        );
    }
}
