import React, { Component } from "react";
import { HeaderContainer, Text } from "common/styleUtil";

export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <Text color="#fff" size="15px">
                    Kibin's Web Portfolio
                </Text>
                <Text color="#fff" size="15px">
                    kibin3846@gmail.com
                </Text>
            </HeaderContainer>
        );
    }
}
