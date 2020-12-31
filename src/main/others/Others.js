import React, { Component } from "react";
import { Container, Column, Row, Text } from "common/styleUtil";
import { CodeImg } from "main/pickle/styleUtil";
import { WorkButton } from "main/styleUtil";
import notion_dom from "assets/img/notion_dom.png";
import notion_js from "assets/img/notion_js.png";
import notion_lifecycle from "assets/img/notion_lifecycle.png";
import notion_router from "assets/img/notion_router.png";
import project_main from "assets/img/project_main.png";
import project_eyes from "assets/img/project_eyes.png";
import project_cely from "assets/img/project_cely.png";

export default class Others extends Component {
    render() {
        return (
            <Container
                padding_left="70px"
                mobile_padding_left="25px"
                padding_right="70px"
                mobile_padding_right="25px"
                padding_top="150px"
                mobile_padding_top="50px"
                padding_bottom="150px"
                mobile_padding_bottom="50px"
            >
                <Text
                    size="28px"
                    color="dark_gray"
                    text_align="center"
                    height="1.75"
                    font_family="NotoSansCJKkr-Medium"
                >
                    전 요즘, <br />
                    이런저런 기록을 남기고있어요 ✍🏼
                </Text>
                <Row width="100%" top="70px">
                    <Column width="50%" align_items="center">
                        <Column height="730px" align_items="center" justify_content="center">
                            <CodeImg
                                position="absolute"
                                width="370px"
                                height="400px"
                                hover_shadow="0 0 17px 20px #f0f0f0"
                                z_index="2"
                                transform="translate(140px, 130px)"
                                src={project_cely}
                            />
                            <CodeImg
                                position="absolute"
                                width="380px"
                                height="200px"
                                hover_shadow="0 0 17px 20px #f0f0f0"
                                z_index="1"
                                transform="translate(-160px, -190px)"
                                src={project_eyes}
                            />
                            <CodeImg
                                position="absolute"
                                width="440px"
                                height="400px"
                                hover_shadow="0 0 17px 20px #f0f0f0"
                                z_index="3"
                                src={project_main}
                            />
                        </Column>
                        <WorkButton
                            d
                            top="50px"
                            border="solid 1px #000"
                            font_color="#000"
                            color="#000"
                            onClick={() =>
                                window.open("https://www.notion.so/Project-21c6d7bc6e35420e8eea733146b993fb")
                            }
                        />
                    </Column>

                    <Column width="50%" align_items="center">
                        <Column height="730px" align_items="center" justify_content="center">
                            <CodeImg
                                position="absolute"
                                width="270px"
                                height="400px"
                                hover_shadow="0 0 17px 20px #1a1a1a"
                                z_index="3"
                                transform="translate(-170px, 130px)"
                                src={notion_js}
                            />
                            <CodeImg
                                position="absolute"
                                width="380px"
                                height="400px"
                                hover_shadow="0 0 17px 20px #1a1a1a"
                                z_index="2"
                                transform="translate(-190px, -110px)"
                                src={notion_lifecycle}
                            />
                            <CodeImg
                                position="absolute"
                                width="300px"
                                height="400px"
                                hover_shadow="0 0 17px 20px #1a1a1a"
                                z_index="2"
                                transform="translate(200px, -80px)"
                                src={notion_router}
                            />
                            <CodeImg
                                position="absolute"
                                width="350px"
                                height="400px"
                                hover_shadow="0 0 17px 20px #1a1a1a"
                                z_index="4"
                                src={notion_dom}
                            />
                        </Column>
                        <WorkButton
                            top="50px"
                            border="solid 1px #000"
                            font_color="#000"
                            color="#000"
                            onClick={() => window.open("https://www.notion.so/25e108e015444345b07c7e0f809a7e02")}
                        />
                    </Column>
                </Row>
            </Container>
        );
    }
}
