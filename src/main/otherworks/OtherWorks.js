import React, { Component } from "react";
import { Container, Row, Text } from "common/styleUtil";
import Cely from "main/otherworks/cely/Cely";
import VisuallyImpairedProject from "main/otherworks/visuallyimpairedproject/VisuallyImpairedProject";

export default class OtherWorks extends Component {
    render() {
        return (
            <Container
                padding_left="200px"
                mobile_padding_left="25px"
                padding_right="200px"
                mobile_padding_right="25px"
                padding_top="150px"
                mobile_padding_top="50px"
                padding_bottom="150px"
                mobile_padding_bottom="50px"
                color="#4460aa"
            >
                <Row align_items="flex-end" mobile_align_items="flex-start" mobile_direction="column">
                    <Text
                        size="50px"
                        mobile_size="30px"
                        color="#000"
                        letter_spacing="-3px"
                        mobile_letter_spacing="-2px"
                        font_family="NotoSansCJKkr-Bold"
                    >
                        Other Works
                    </Text>
                    <Text
                        mobile_top="3px"
                        left="20px"
                        mobile_left="0px"
                        bottom="7px"
                        mobile_bottom="0px"
                        size="12px"
                        mobile_size="8px"
                        color="#000"
                        letter_spacing="-0.5px"
                    >
                        Click to open the details.
                    </Text>
                </Row>
                <Row
                    justify_content="space-between"
                    padding_left="60px"
                    mobile_padding_left="0px"
                    padding_right="60px"
                    mobile_padding_right="0px"
                    top="80px"
                    mobile_top="30px"
                    bottom="80px"
                    mobile_bottom="40px"
                >
                    <Cely />
                    <VisuallyImpairedProject />
                </Row>
            </Container>
        );
    }
}
