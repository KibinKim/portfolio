import React, { Component } from "react";
import { Container, Row, MobileBr, DesktopBr } from "common/styleUtil";
import {
    TextArea,
    ShakeText,
    WorkContainer,
    Heading,
    WorkMenuFrame,
    WorkMenuImg,
    WorkMenu,
    WorkText,
} from "main/my/styleUtil";
import check from "assets/img/check.png";

export default class MyWork extends Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return (
            <Container
                padding_top="150px"
                mobile_padding_top="50px"
                padding_bottom="150px"
                mobile_padding_bottom="50px"
                padding_left="130px"
                mobile_padding_left="30px"
                padding_right="130px"
                mobile_padding_right="30px"
                color="#fafafa"
            >
                <WorkContainer>
                    <TextArea>
                        <Heading>제가 제일</Heading>
                        <Heading>잘하는 일을</Heading>
                        <Row align_items="center">
                            <Heading>소개합니다 </Heading>
                            <ShakeText left="7px" height="1.7" size="40px" mobile_size="26px">
                                👋🏼
                            </ShakeText>
                        </Row>
                    </TextArea>
                    <WorkMenuFrame>
                        <Row align_items="flex-start">
                            <WorkMenuImg src={check} />
                            <WorkMenu>
                                Web Development
                                <WorkText>
                                    React를 사용한 웹 개발을 이해하며 깨끗한 코드를 작성하기 위해 공부합니다. <br />
                                    데이터를 받아와 어떻게 효율적으로 뿌려줄지 관심이 많으며 유지/보수를 고려한 코드
                                    작성, <DesktopBr />
                                    데이터 <MobileBr /> 관리 등 탄탄한 업무 프로세스를 지향합니다.
                                </WorkText>
                            </WorkMenu>
                        </Row>
                        <Row top="60px" mobile_top="50px" align_items="flex-start">
                            <WorkMenuImg src={check} />
                            <WorkMenu>
                                Layout ＆ Responsive
                                <WorkText>
                                    컴포넌트 간 관계를 잘 이해하여 어떻게 그려지며 동작하는지 계속해서 테스트하며
                                    디자이너의 의도를 <br />
                                    파악하여 코드로 예쁘게 그려내기 위하여 공부하고 있습니다. <DesktopBr />
                                    브라우저의 특성을 이해하며 어떠한 크기나 환경에서도 반응하여 사용자에게 보기 편한
                                    UI/UX를 제공합니다.
                                </WorkText>
                            </WorkMenu>
                        </Row>
                        <Row top="60px" mobile_top="50px" align_items="flex-start">
                            <WorkMenuImg src={check} />
                            <WorkMenu>
                                Co-work
                                <WorkText>
                                    빠르고 정확한 업무를 위해 팀원들과 끝없이 소통합니다. 백엔드 개발자, 디자이너와
                                    가깝게 일하며 <DesktopBr /> Github, Figma등 협업 툴을 적극적으로 사용하여 원활한
                                    협업을 이끌어냅니다.
                                </WorkText>
                            </WorkMenu>
                        </Row>
                    </WorkMenuFrame>
                </WorkContainer>
            </Container>
        );
    }
}
