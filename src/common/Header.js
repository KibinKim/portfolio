import React, { Component } from "react";
import { URL_FRONT } from "common/config";
import { HeaderContainer, HeaderText, ChangedHeaderBox, HeaderMail } from "common/styleUtil";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as layoutActions from "redux/modules/layout";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll_top: 0,
        };
    }

    handleScroll = (e) => {
        const { LayoutActions } = this.props;
        const scroll_top = ("scroll", e.target.scrollingElement.scrollTop);
        console.log(scroll_top);
        this.setState({ scroll_top });
        LayoutActions.setScrollValue(scroll_top);
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
                {scroll_top > 2250 ? (
                    <ChangedHeaderBox
                        color={scroll_top > 2250 ? "#000" : "v_light_gray"}
                        font_family="NotoSansCJKkr-Light"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        scroll_top={scroll_top}
                    >
                        KWP
                    </ChangedHeaderBox>
                ) : (
                    <HeaderText
                        color="v_light_gray"
                        font_family="NotoSansCJKkr-Light"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        scroll_top={scroll_top}
                    >
                        Kibin's Web Portfolio
                    </HeaderText>
                )}
                <HeaderMail
                    color={scroll_top > 2250 ? "#000" : "v_light_gray"}
                    scroll_top={scroll_top}
                    onClick={() => window.open(`${URL_FRONT}/contact`)}
                >
                    kibin3846@gmail.com
                </HeaderMail>
            </HeaderContainer>
        );
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => ({
        LayoutActions: bindActionCreators(layoutActions, dispatch),
    }),
)(withRouter(Header));
