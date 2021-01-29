import React, { Component } from "react";
import { FooterContainer, Row, Text, HeartText } from "common/styleUtil";

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer id="footer">
                <Row>
                    <Text
                        size="15px"
                        mobile_size="10px"
                        color="dark_gray"
                        hover_color="#616161"
                        cursor="pointer"
                        onClick={() =>
                            window.open("https://github.com/KibinKim?tab=overview&from=2020-08-01&to=2020-08-31")
                        }
                    >
                        Github
                    </Text>
                    <Text
                        size="15px"
                        mobile_size="10px"
                        color="dark_gray"
                        hover_color="#616161"
                        cursor="pointer"
                        left="25px"
                        mobile_left="10px"
                        onClick={() => window.open("https://www.notion.so/3cc3ebb8f72b481b99e34b41ea0f6e4c")}
                    >
                        Notion
                    </Text>
                </Row>
                <Text size="15px" mobile_size="10px" color="mi_gray">
                    © 2020 Kimkibin
                </Text>
                <Row align_items="center">
                    <Text size="15px" mobile_size="10px" color="mi_gray">
                        Made by devbean
                    </Text>
                    <HeartText size="20px" mobile_size="13px" left="10px" mobile_left="5px">
                        🖤
                    </HeartText>
                </Row>
            </FooterContainer>
        );
    }
}
