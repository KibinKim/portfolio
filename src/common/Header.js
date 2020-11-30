import React, { Component } from "react";
import { HeaderContainer } from "common/styleUtil";
import { HeaderText, ChangedHeaderBox, HeaderMail } from "common/styleUtil";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll_top: 0,
        };
    }

    handleScroll = (e) => {
        const scroll_top = ("scroll", e.target.scrollingElement.scrollTop);
        this.setState({ scroll_top });
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnMount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    };

    render() {
        const { scroll_top } = this.state;
        return (
            <HeaderContainer onScroll={this.handleScroll}>
                {scroll_top > 100 ? (
                    <ChangedHeaderBox
                        color={scroll_top > 1054 ? "#000" : "v_light_gray"}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        scroll_top={scroll_top}
                    >
                        KWP
                    </ChangedHeaderBox>
                ) : (
                    <HeaderText
                        color="v_light_gray"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        scroll_top={scroll_top}
                    >
                        Kibin's Web Portfolio
                    </HeaderText>
                )}
                <HeaderMail color={scroll_top > 1054 ? "#000" : "v_light_gray"} scroll_top={scroll_top}>
                    kibin3846@gmail.com
                </HeaderMail>
            </HeaderContainer>
        );
    }
}
