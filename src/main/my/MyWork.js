import React, { Component } from "react";
import { Container, Column, Row, Text, Img } from "common/styleUtil";
import { TextArea, ShakeText } from "main/my/styleUtil";
import check from "assets/img/check.png";

export default class MyWork extends Component {
    render() {
        return (
            <Container
                padding_top="160px"
                padding_bottom="160px"
                padding_left="200px"
                padding_right="200px"
                color="#fafafa"
            >
                <Row justify_content="center">
                    <TextArea>
                        <Text height="1.7" size="40px">
                            제가 제일
                        </Text>
                        <Text height="1.7" size="40px">
                            잘하는 일을
                        </Text>
                        <Row>
                            <Text height="1.7" size="40px">
                                소개합니다{" "}
                            </Text>
                            <ShakeText left="7px" height="1.7" size="40px" font_family="NotoSansCJKkr-Bold">
                                👋🏼
                            </ShakeText>
                        </Row>
                    </TextArea>
                    <Column left="100px" top="30px">
                        <Row align_items="flex-start">
                            <Img width="24px" height="27px" src={check} />
                            <Text left="13px" size="20px" font_family="NotoSansCJKkr-Medium">
                                Web Development
                                <Text top="17px" size="18px" height="30px" font_family="NotoSansCJKkr-Light">
                                    React를 사용한 웹 개발을 이해하며 잘 다룹니다. 데이터를 받아와 어떻게 효율적으로
                                    뿌려줄지
                                    <br /> 관심이 많으며 유지보수를 고려한 코드 작성, 데이터 관리 등 탄탄한 업무
                                    프로세스를 지향합니다.
                                </Text>
                            </Text>
                        </Row>
                        <Row top="60px" align_items="flex-start">
                            <Img width="24px" height="27px" src={check} />
                            <Text left="13px" size="20px" font_family="NotoSansCJKkr-Medium">
                                Layout ＆ Responsive
                                <Text top="17px" size="18px" height="30px" font_family="NotoSansCJKkr-Light">
                                    컴포넌트 간 관계를 잘 이해하여 어떻게 그려지며 동작하는지 계속해서 테스트하며
                                    디자이너의 의도를 <br />
                                    파악하여 코드로 예쁘게 그려내기 위하여 공부하고 있습니다. <br />
                                    브라우저의 특성을 이해하며 어떠한 크기나 환경에서도 반응하여 사용자에게 보기 편한
                                    UI/UX를 제공합니다.
                                </Text>
                            </Text>
                        </Row>
                        <Row top="60px" align_items="flex-start">
                            <Img width="24px" height="27px" src={check} />
                            <Text left="13px" size="20px" font_family="NotoSansCJKkr-Medium">
                                Co-work
                                <Text top="17px" size="18px" height="30px" font_family="NotoSansCJKkr-Light">
                                    빠르고 정확한 업무를 위해 팀원들과 끝 없이 소통합니다. 백엔드 개발자, 디자이너와
                                    가깝게 일하며 <br /> Github, Figma등 협업 툴을 적극적으로 사용하여 원활한 협업을
                                    이끌어냅니다.
                                </Text>
                            </Text>
                        </Row>
                    </Column>
                </Row>
            </Container>
        );
    }
}
