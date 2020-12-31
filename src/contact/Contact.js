import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Container, Column, Row, InputBox, Input, Text, Button } from "common/styleUtil";
import { Message, ContentsBox, ContentsInput } from "contact/styleUtil";
import { emailjs_data } from "common/emailjs";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            user_email: "",
            contents: "",
        };
    }
    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(emailjs_data.service_id, emailjs_data.template_id, e.target, emailjs_data.user_id).then(
            (response) => {
                console.log("메일 전송 성공! ", response);
                alert("메일 전송에 성공했어요:) 첫 페이지로 이동할게요!");
                window.location.replace("/");
            },
            (error) => {
                console.log("메일 전송 실패! ", error);
                alert("알 수 없는 오류가 발생했어요:( 번거로우시겠지만 따로 보내주시길 바랄게요!");
                window.location.href = "/contact";
            },
        );
    }
    handleInput = (e) => {
        const { name, value, id } = e.target;
        if (id === "user_name" || id === "user_email" || id === "contents") this.setState({ [name]: value });
    };
    render() {
        const { sendEmail, handleInput } = this;
        const { user_name, user_email, contents } = this.state;
        return (
            <Container height="100vh">
                <Column grow="1" width="100%" color="#f2f2f2" />
                <Column grow="2" width="100%" color="#4460aa" />
                <Message>
                    <Text size="40px" mobile_size="23px" font_family="NotoSansCJKkr-Bold">
                        새 메일 🏷
                    </Text>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <Row top="50px" mobile_top="20px" align_items="center">
                            <Text size="20px" mobile_size="14px" font_family="NotoSansCJKkr-Medium">
                                이름:{" "}
                            </Text>
                            <InputBox width="100%" left="15px" activate={user_name.length > 1}>
                                <Input
                                    id="user_name"
                                    type="text"
                                    name="user_name"
                                    max_length="10"
                                    value={user_name}
                                    onChange={handleInput}
                                />
                            </InputBox>
                        </Row>
                        <Row top="20px" mobile_top="10px" align_items="center">
                            <Text size="20px" mobile_size="14px" font_family="NotoSansCJKkr-Medium">
                                이메일:{" "}
                            </Text>
                            <InputBox width="100%" left="15px" mobile_left="10px" activate={user_email.length > 1}>
                                <Input
                                    id="user_email"
                                    type="email"
                                    name="user_email"
                                    max_length="40"
                                    value={user_email}
                                    onChange={handleInput}
                                />
                            </InputBox>
                        </Row>
                        <Text
                            top="25px"
                            mobile_top="15px"
                            size="20px"
                            mobile_size="14px"
                            font_family="NotoSansCJKkr-Medium"
                        >
                            내용
                        </Text>
                        <ContentsBox width="100%" activate={contents.length > 0}>
                            <ContentsInput
                                id="contents"
                                type="text"
                                name="contents"
                                placeholder="어떠한 주제도 괜찮아요 :)"
                                value={contents}
                                onChange={handleInput}
                            />
                        </ContentsBox>
                        <Button
                            width="100%"
                            mobile_height="36px"
                            top="40px"
                            mobile_top="30px"
                            disabled={!(user_name.length > 1 && user_email.length > 1 && contents.length > 0)}
                        >
                            <Text size="20px" mobile_size="14px" color="#f2f2f2">
                                보내기
                            </Text>
                        </Button>
                    </form>
                </Message>
            </Container>
        );
    }
}
