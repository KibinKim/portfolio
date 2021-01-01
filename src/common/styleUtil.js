import React from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import Lottie from "react-lottie";
import { HeartAnim, FadeIn, SlideInTop, ModalOpen } from "anim/styleUtil";

//media query를 통한 자동 리사이징
export const sizes = {
    wide: "1170px",
    desktop: "992px",
    tablet: "755px",
    phone: "663px",
    mini: "340px",
};
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label]}) {
            ${css(...args)}
        }
    `;
    return acc;
}, {});

// 글로벌 스타일 Root에서 선언
export const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    background-color: #281b7d;
    color: #fff;
  }
  @font-face {
    font-family: "NotoSansCJKkr";
    src: local("NotoSansCJKkr"),
      url(${require("assets/fonts/NotoSansKR-Regular.otf")});
  }
  @font-face {
    font-family: "NotoSansCJKkr-Regular";
    src: local("NotoSansCJKkr-Regular"),
      url(${require("assets/fonts/NotoSansKR-Regular.otf")});
  }
  @font-face {
    font-family: "NotoSansCJKkr-Light";
    src: local("NotoSansCJKkr-Light"),
      url(${require("assets/fonts/NotoSansKR-Light.otf")});
  }
  @font-face {
    font-family: "NotoSansCJKkr-Thin";
    src: local("NotoSansKR-Thin"),
      url(${require("assets/fonts/NotoSansKR-Thin.otf")});
  }
  @font-face {
    font-family: "NotoSansCJKkr-Medium";
    src: local("NotoSansKR-Medium"),
      url(${require("assets/fonts/NotoSansKR-Medium.otf")});
  }
  @font-face {
    font-family: "NotoSansCJKkr-Bold";
    src: local("NotoSansKR-Bold"),
      url(${require("assets/fonts/NotoSansKR-Bold.otf")});
  }
  @font-face {
    font-family: "NotoSansCJKkr-Black";
    src: local("NotoSansKR-Black"),
      url(${require("assets/fonts/NotoSansKR-Black.otf")});
  }

  @font-face {
    font-family: "Roboto-Thin";
    src: local("Roboto-Thin"),
      url(${require("assets/fonts/Roboto-Thin.ttf")});
  }
  @font-face {
    font-family: "Roboto-ThinItalic";
    src: local("Roboto-ThinItalic"),
      url(${require("assets/fonts/Roboto-ThinItalic.ttf")});
  }
  @font-face {
    font-family: "Roboto-Light";
    src: local("Roboto-Light"),
      url(${require("assets/fonts/Roboto-Light.ttf")});
  }
  @font-face {
    font-family: "Roboto-LightItalic";
    src: local("Roboto-LightItalic"),
      url(${require("assets/fonts/Roboto-LightItalic.ttf")});
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),
      url(${require("assets/fonts/Roboto-Regular.ttf")});
  }
  @font-face {
    font-family: "Roboto-Italic";
    src: local("Roboto-Italic"),
      url(${require("assets/fonts/Roboto-Italic.ttf")});
  }
  @font-face {
    font-family: "Roboto-Bold";
    src: local("Roboto-Bold"),
      url(${require("assets/fonts/Roboto-Bold.ttf")});
  }
  @font-face {
    font-family: "Roboto-BoldItalic";
    src: local("Roboto-BoldItalic"),
      url(${require("assets/fonts/Roboto-BoldItalic.ttf")});
  }
  @font-face {
    font-family: "Roboto-Black";
    src: local("Roboto-Black"),
      url(${require("assets/fonts/Roboto-Black.ttf")});
  }
  @font-face {
    font-family: "Roboto-BlackItalic";
    src: local("Roboto-BlackItalic"),
      url(${require("assets/fonts/Roboto-BlackItalic.ttf")});
  }
  @font-face {
    font-family: "Roboto-Medium";
    src: local("Roboto-Medium"),
      url(${require("assets/fonts/Roboto-Medium.ttf")});
  }
  @font-face {
    font-family: "Roboto-MediumItalic";
    src: local("Roboto-MediumItalic"),
      url(${require("assets/fonts/Roboto-MediumItalic.ttf")});
  }
`;

export const Theme = {
    v_light_gray: "#e6e6e6",
    light_gray: "#a4a4a4",
    mi_gray: "#616161",
    dark_gray: "#1a1a1a",
    warm_gray: "#9d9d9d",
    mi_blue: "#4460aa",
    dark_blue: "#281b7d",
};

export const Container = styled.div`
    display: ${(props) => (props.mobile ? "none" : "flex")};
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    justify-content: ${(props) => props.justify_content || ""};
    justify-self: ${(props) => props.justify_self || ""};
    line-height: ${(props) => props.line_height || ""};
    text-align: ${(props) => props.text_align || ""};
    flex-direction: ${(props) => props.flex_direction || "column"};
    align-items: ${(props) => props.align_items || ""};
    align-self: ${(props) => props.align_self};
    flex-basis: ${(props) => props.basis || ""};
    flex-shrink: ${(props) => props.shrink || ""};
    margin-top: ${(props) => props.top || "0px"};
    margin-bottom: ${(props) => props.bottom || "0px"};
    margin-right: ${(props) => props.right || "0px"};
    margin-left: ${(props) => props.left || "0px"};
    padding-top: ${(props) => props.padding_top || "0px"};
    padding-bottom: ${(props) => props.padding_bottom || "0px"};
    padding-right: ${(props) => props.padding_right || "0px"};
    padding-left: ${(props) => props.padding_left || "0px"};
    max-width: ${(props) => props.max_width};
    background-color: ${(props) => props.theme[props.color] || props.color || ""};
    flex-wrap: ${(props) => props.flex_wrap};
    overflow-x: ${(props) => props.overflow_x};
    box-shadow: ${(props) => props.box_shadow || ""};
    border-radius: ${(props) => props.border_radius};
    transition: ${(props) => props.transition};
    position: ${(props) => props.position || ""};
    ${media.phone`
        display: ${(props) => (props.desktop ? "none" : "flex")};
        margin-top: ${(props) => props.mobile_top};
        margin-bottom: ${(props) => props.mobile_bottom};
        margin-right: ${(props) => props.mobile_right};
        margin-left: ${(props) => props.mobile_left};
        padding-top: ${(props) => props.mobile_padding_top};
        padding-bottom: ${(props) => props.mobile_padding_bottom};
        padding-right: ${(props) => props.mobile_padding_right};
        padding-left: ${(props) => props.mobile_padding_left};
        max-width: ${(props) => props.mobile_max_width};
        width: ${(props) => props.mobile_width};
        height: ${(props) => props.mobile_height};
        justify-content: ${(props) => props.mobile_justify_content};
        justify-self: ${(props) => props.mobile_justify_self || ""};
        align-items: ${(props) => props.mobile_align_items};
        align-self: ${(props) => props.mobile_align_self};
        flex-direction: ${(props) => props.mobile_direction};
        box-shadow: ${(props) => props.mobile_box_shadow || ""};
        flex-basis: ${(props) => props.mobile_basis || ""};
        flex-shrink: ${(props) => props.mobile_shrink || ""};
        flex-wrap: ${(props) => props.mobile_flex_wrap};
        overflow-x: ${(props) => props.mobile_overflow_x};
        box-shadow: ${(props) => props.mobile_box_shadow || ""};
        border-radius: ${(props) => props.mobile_border_radius};
        transition: ${(props) => props.mobile_transition};
        position: ${(props) => props.mobile_position || ""};
        top: ${(props) => props.mobile_ab_top};
        bottom: ${(props) => props.mobile_ab_bottom};
        left: ${(props) => props.mobile_ab_left};
        right: ${(props) => props.mobile_ab_right};
`};
`;

export const Row = styled.div`
    display: ${(props) => (props.mobile ? "none" : "flex")};
    flex-direction: row;
    flex-wrap: ${(props) => props.flex_wrap || ""};
    margin-top: ${(props) => props.top || "0px"};
    margin-bottom: ${(props) => props.bottom || "0px"};
    margin-right: ${(props) => props.right || "0px"};
    margin-left: ${(props) => props.left || "0px"};
    padding-top: ${(props) => props.padding_top || "0px"};
    padding-bottom: ${(props) => props.padding_bottom || "0px"};
    padding-right: ${(props) => props.padding_right || "0px"};
    padding-left: ${(props) => props.padding_left || "0px"};
    max-width: ${(props) => props.max_width};
    min-width: ${(props) => props.min_width};
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    justify-content: ${(props) => props.justify_content || ""};
    align-items: ${(props) => props.align_items || ""};
    align-self: ${(props) => props.align_self || ""};
    justify-self: ${(props) => props.justify_self || ""};
    flex-grow: ${(props) => props.grow || "0"};
    flex-basis: ${(props) => props.basis || ""};
    flex-shrink: ${(props) => props.shrink || ""};
    background-color: ${(props) => props.theme[props.color] || props.color || ""};
    box-shadow: ${(props) => props.box_shadow || ""};
    order: ${(props) => props.order || ""};
    transition: ${(props) => props.transition || ""};
    white-space: ${(props) => props.white_space || ""};
    border: ${(props) => props.border || ""};
    border-radius: ${(props) => props.border_radius || ""};
    filter: ${(props) => props.filter || ""};
    z-index: ${(props) => props.z_index || ""};
    position: ${(props) => props.position || ""};
    transform: ${(props) => props.transform || ""};
    &:hover {
        cursor: ${(props) => props.cursor || ""};
        background-color: ${(props) => props.hover_color || ""};
    }
    ${media.phone`
        display: ${(props) => (props.desktop ? "none" : "flex")};
        margin-top: ${(props) => props.mobile_top};
        margin-bottom: ${(props) => props.mobile_bottom};
        margin-right: ${(props) => props.mobile_right};
        margin-left: ${(props) => props.mobile_left};
        padding-top: ${(props) => props.mobile_padding_top};
        padding-bottom: ${(props) => props.mobile_padding_bottom};
        padding-right: ${(props) => props.mobile_padding_right};
        padding-left: ${(props) => props.mobile_padding_left};
        max-width: ${(props) => props.mobile_max_width};
        min-width: ${(props) => props.mobile_min_width};
        flex-grow: ${(props) => props.mobile_grow};
        flex-basis: ${(props) => props.mobile_basis};
        width: ${(props) => props.mobile_width};
        height: ${(props) => props.mobile_height};
        justify-content: ${(props) => props.mobile_justify_content};
        justify-self: ${(props) => props.mobile_justify_self || ""};
        align-items: ${(props) => props.mobile_align_items};
        align-self: ${(props) => props.mobile_align_self};
        flex-direction: ${(props) => props.mobile_direction};
        box-shadow: ${(props) => props.mobile_box_shadow || ""};
        order: ${(props) => props.mobile_order || ""};
        border: ${(props) => props.mobile_border || ""};
        border-radius: ${(props) => props.mobile_border_radius || ""};
        transform: ${(props) => props.mobile_transform || ""};
        position: ${(props) => props.mobile_position || ""};
    `}
`;

export const Column = styled.div`
    display: ${(props) => (props.mobile ? "none" : "flex")};
    flex-direction: column;
    flex-wrap: ${(props) => props.flex_wrap || ""};
    margin-top: ${(props) => props.top || "0px"};
    margin-bottom: ${(props) => props.bottom || "0px"};
    margin-right: ${(props) => props.right || "0px"};
    margin-left: ${(props) => props.left || "0px"};
    padding-top: ${(props) => props.padding_top || "0px"};
    padding-bottom: ${(props) => props.padding_bottom || "0px"};
    padding-right: ${(props) => props.padding_right || "0px"};
    padding-left: ${(props) => props.padding_left || "0px"};
    max-width: ${(props) => props.max_width};
    min-width: ${(props) => props.min_width};
    min-height: ${(props) => props.min_height};
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    justify-content: ${(props) => props.justify_content || ""};
    justify-self: ${(props) => props.justify_self || ""};
    align-items: ${(props) => props.align_items || ""};
    align-self: ${(props) => props.align_self || ""};
    flex-grow: ${(props) => props.grow || "0"};
    flex-basis: ${(props) => props.basis || ""};
    flex-shrink: ${(props) => props.shrink || ""};
    background-color: ${(props) => props.theme[props.color] || props.color || ""};
    box-shadow: ${(props) => props.box_shadow || ""};
    order: ${(props) => props.order || ""};
    transition: ${(props) => props.transition || ""};
    border-radius: ${(props) => props.border_radius || ""};
    filter: ${(props) => props.filter};
    z-index: ${(props) => props.z_index || ""};
    position: ${(props) => props.position || ""};
    transform: ${(props) => props.transform || ""};
    &:hover {
        cursor: ${(props) => props.cursor || ""};
        background-color: ${(props) => props.hover_color || ""};
    }
    ${media.phone`
        display: ${(props) => (props.desktop ? "none" : "flex")};
        margin-top: ${(props) => props.mobile_top};
        margin-bottom: ${(props) => props.mobile_bottom};
        margin-right: ${(props) => props.mobile_right};
        margin-left: ${(props) => props.mobile_left};
        padding-top: ${(props) => props.mobile_padding_top};
        padding-bottom: ${(props) => props.mobile_padding_bottom};
        padding-right: ${(props) => props.mobile_padding_right};
        padding-left: ${(props) => props.mobile_padding_left};
        max-width: ${(props) => props.mobile_max_width};
        min-width: ${(props) => props.mobile_min_width};
        min-height: ${(props) => props.mobile_min_height};
        flex-grow: ${(props) => props.mobile_grow};
        flex-basis: ${(props) => props.mobile_basis};
        width: ${(props) => props.mobile_width};
        height: ${(props) => props.mobile_height};
        justify-content: ${(props) => props.mobile_justify_content};
        justify-self: ${(props) => props.mobile_justify_self || ""};
        align-items: ${(props) => props.mobile_align_items};
        align-self: ${(props) => props.mobile_align_self};
        flex-direction: ${(props) => props.mobile_direction};
        box-shadow: ${(props) => props.mobile_box_shadow || ""};
        order: ${(props) => props.mobile_order || ""};
        border-radius: ${(props) => props.mobile_border_radius || ""};
        position: ${(props) => props.mobile_position || ""};
        transform: ${(props) => props.mobile_transform || ""};
    `}
`;

export const Button = styled.button`
    display: ${(props) => (props.mobile ? "none" : "block")};
    max-width: ${(props) => props.max_width || ""};
    width: ${(props) => props.width || "260px"};
    height: ${(props) => props.height || "56px"};
    margin-top: ${(props) => props.top || "0px"};
    margin-bottom: ${(props) => props.bottom || "0px"};
    margin-right: ${(props) => props.right || "0px"};
    margin-left: ${(props) => props.left || "0px"};
    padding-top: ${(props) => props.padding_top || "0px"};
    padding-bottom: ${(props) => props.padding_bottom || "0px"};
    padding-right: ${(props) => props.padding_right || "0px"};
    padding-left: ${(props) => props.padding_left || "0px"};
    border-radius: ${(props) => props.radius || "18px"};
    background-color: ${(props) =>
        props.theme[props.background_color] || props.background_color || props.theme.mi_blue};
    border: ${(props) => props.border || "0px"};
    border-left: ${(props) => props.border_left || ""};
    border-right: ${(props) => props.border_right || ""};
    border-top: ${(props) => props.border_top || ""};
    border-bottom: ${(props) => props.border_bottom || ""};
    box-shadow: ${(props) => props.box_shadow || ""};
    font-family: ${(props) => props.font_family || "NotoSansCJKkr"};
    font-size: ${(props) => props.size || "24px"};
    line-height: ${(props) => props.line_height || "1.5"};
    letter-spacing: ${(props) => props.letter_spacing || "-0.96px"};
    text-align: center;
    align-self: ${(props) => props.align_self};
    color: ${(props) => props.color || "#ffffff"};
    overflow: hidden;
    position: relative;
    outline: none;
    &:hover {
        cursor: pointer;
    }
    ${(props) =>
        !props.disabled &&
        css`
            transition: 0.3s all ease-in;
            &:hover {
                filter: grayscale(0) opacity(0.8);
            }
        `};
    ${(props) =>
        props.disabled &&
        css`
            color: #ffffff;
            background-color: ${(props) => props.theme.v_light_gray};
            border: ${(props) => props.theme.v_light_gray};
            &:hover {
                cursor: default;
            }
            transition: 0.3s all ease-in;
        `};
    ${media.phone`
        display: ${(props) => (props.desktop ? "none" : "block")};
        margin-top: ${(props) => props.mobile_top};
        margin-bottom: ${(props) => props.mobile_bottom};
        margin-right: ${(props) => props.mobile_right};
        margin-left: ${(props) => props.mobile_left};
        padding-top: ${(props) => props.mobile_padding_top};
        padding-bottom: ${(props) => props.mobile_padding_bottom};
        padding-right: ${(props) => props.mobile_padding_right};
        padding-left: ${(props) => props.mobile_padding_left};
        width: ${(props) => props.mobile_width};
        height: ${(props) => props.mobile_height};
        justify-content: ${(props) => props.mobile_justify_content};
        align-items: ${(props) => props.mobile_align_items};
        align-self: ${(props) => props.mobile_align_self};
        font-size: ${(props) => props.mobile_size};
        line-height: ${(props) => props.mobile_line_height || "1.5"};
        letter-spacing: ${(props) => props.mobile_letter_spacing || "-0.96px"};
        border-radius: ${(props) => props.mobile_radius};
    `}
`;

export const Text = styled.div`
    display: ${(props) => props.display || "block"};
    width: ${(props) => (props.width ? props.width : "")};
    font-family: ${(props) => props.font_family || "NotoSansCJKkr"};
    font-weight: ${(props) => props.weight || ""};
    text-align: ${(props) => props.text_align || ""};
    align-items: ${(props) => props.align_items || ""};
    justify-content: ${(props) => props.justify_content || ""};
    align-self: ${(props) => props.align_self || ""};
    margin-top: ${(props) => props.top || "0px"};
    margin-bottom: ${(props) => props.bottom || "0px"};
    margin-right: ${(props) => props.right || "0px"};
    margin-left: ${(props) => props.left || "0px"};
    padding-top: ${(props) => props.padding_top || "0px"};
    padding-bottom: ${(props) => props.padding_bottom || "0px"};
    padding-right: ${(props) => props.padding_right || "0px"};
    padding-left: ${(props) => props.padding_left || "0px"};
    font-size: ${(props) => props.size || "50px"};
    color: ${(props) => props.theme[props.color] || props.color || props.theme.dark_gray};
    line-height: ${(props) => props.height || "1.25"};
    letter-spacing: ${(props) => props.letter_spacing || ""};
    text-decoration: ${(props) => (props.underline ? "underline" : "")};
    order: ${(props) => (props.order ? props.order : "")};
    transition: ${(props) => (props.transition ? props.transition : "color 0.15s ease-out")};
    position: ${(props) => props.position || ""};
    &:hover {
        cursor: ${(props) => props.cursor || ""};
        color: ${(props) => props.hover_color || ""};
        font-size: ${(props) => props.hover_size};
    }
    ${media.phone`
        display: ${(props) => props.mobile_display || "block"};
        width: ${(props) => props.mobile_width};
        font-family: ${(props) => props.mobile_font_family};
        text-align: ${(props) => props.mobile_text_align};
        margin-top: ${(props) => props.mobile_top};
        margin-bottom: ${(props) => props.mobile_bottom};
        margin-right: ${(props) => props.mobile_right};
        margin-left: ${(props) => props.mobile_left};
        padding-top: ${(props) => props.mobile_padding_top};
        padding-bottom: ${(props) => props.mobile_padding_bottom};
        padding-right: ${(props) => props.mobile_padding_right};
        padding-left: ${(props) => props.mobile_padding_left};
        font-size: ${(props) => props.mobile_size};
        align-self: ${(props) => props.mobile_align_self};
        color: ${(props) => props.mobile_color};
        line-height: ${(props) => props.mobile_height};
        letter-spacing: ${(props) => props.mobile_letter_spacing};
        order: ${(props) => (props.order ? props.mobile_order : "")};
        &:hover {
          font-size: ${(props) => props.mobile_hover_size};
      }
    `}
`;

export const Circle = styled(Row)`
    align-items: center;
    justify-content: center;
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    border-radius: ${(props) => props.border_radius};
    background-color: ${(props) => props.color || ""};
`;

export const Img = styled.img`
    display: ${(props) => (props.mobile ? "none" : "block")};
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    margin-top: ${(props) => props.top || ""};
    margin-left: ${(props) => props.left || ""};
    margin-right: ${(props) => props.right || ""};
    border-radius: ${(props) => props.border_radius || ""};
    border: ${(props) => props.border || ""};
    filter: ${(props) => props.filter || ""};
    transition: ${(props) => props.transition || "all 0.2s ease-out"};
    position: ${(props) => props.position || ""};
    transform: ${(props) => props.transform || ""};
    visibility: ${(props) => props.visibility || ""};
    box-shadow: ${(props) => props.box_shadow || ""};
    &:hover {
        cursor: ${(props) => props.cursor || ""};
        background-color: ${(props) => props.hover_color || ""};
        filter: ${(props) => props.hover_filter || ""};
    }
    pointer-events: ${(props) => props.pointer_events || ""};
    ${media.phone`
        display: ${(props) => (props.desktop ? "none" : "block")};
        width: ${(props) => props.mobile_width || ""};
        height: ${(props) => props.mobile_height || ""};
        margin-top: ${(props) => props.mobile_top || ""};
        margin-left:${(props) => props.mobile_left};
        margin-right: ${(props) => props.mobile_right || ""};
        transform: ${(props) => props.mobile_transform || ""};

    `}
`;

export const InputBox = styled(Row)`
    width: 50%;
    margin-top: ${(props) => props.top};
    margin-left: ${(props) => props.left};
    padding-bottom: 2px;
    background-color: #e1e1e1;
    transition: 0.5s all ease-in-out;
    ${(props) =>
        props.activate &&
        css`
            background-color: #4460aa;
        `};
    ${media.phone`
        padding-bottom: 2px;
        margin-top: ${(props) => props.mobile_top};
        margin-left: ${(props) => props.mobile_left};
    `}
`;

export const Input = styled.input`
    ::placeholder {
        color: ${(props) => props.theme.warm_gray};
        font-family: "NotoSansCJKkr-Light";
        letter-spacing: -0.96px;
        font-size: 24px;
        padding: 5px;
    }
    height: 40px;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 0px;
    caret-color: ${(props) => props.theme.mi_blue};
    width: 100%;
    transition: 1s all ease-out;
    ${media.phone`
        ::placeholder {
            font-size: 12px;
            font-family: "NotoSansCJKkr-Light";
        }
        font-size: 12px;
        height: 20px;
    `};
`;

//desktop에서만
export const DesktopBr = styled.br`
    display: block;
    ${media.phone`
        display: none;
    `}
`;
//mobile에서만
export const MobileBr = styled.br`
    display: none;
    ${media.phone`
        display: block;
    `}
`;

export const LottieResponsive = (props) => {
    let {
        flex_direction,
        width,
        height,
        mobile_width,
        mobile_height,
        mobile_ab_top,
        mobile_ab_left,
        style,
        ...tmp_props
    } = props;
    return (
        <Container
            flex_direction={props.flex_direction}
            width={props.width}
            height={props.height}
            mobile_width={props.mobile_width}
            mobile_height={props.mobile_height}
            mobile_position={props.mobile_position}
            mobile_ab_top={props.mobile_ab_top}
            mobile_ab_left={props.mobile_ab_left}
            style={props.style}
        >
            <Lottie width="100%" height="100%" {...tmp_props} />
        </Container>
    );
};

export const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    top: 5%;
    z-index: 3;
    ${media.phone`
      width: 375px;
      top: 2%;
    `}
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 2%;
`;

export const HeaderText = styled(Text)`
    display: ${(props) => (props.desktop ? "block" : "none")};
    font-size: 15px;
    animation: ${(props) => props.anim || FadeIn} 0.8s ease-in;
    margin-left: 3%;
    font-family: NotoSansCJKkr-Light;
    &:hover {
        cursor: pointer;
        color: #4460aa;
    }
    ${media.phone`
    display: ${(props) => (props.desktop ? "none" : "block")};
    font-family: NotoSansCJKkr;
      font-size: 10px;
    `}
`;

export const ChangedHeaderBox = styled(Text)`
    display: ${(props) => (props.desktop ? "flex" : "none")};
    width: 40px;
    height: 40px;
    font-size: 15px;
    margin-left: 3%;
    border-radius: 3px;
    border: solid 1px ${(props) => (props.color === "#000" ? "#000" : "#e6e6e6")};
    align-items: center;
    justify-content: center;
    font-family: NotoSansCJKkr-Light;
    animation: ${(props) => props.anim || FadeIn} 0.8s ease-in;
    &:hover {
        border: solid 1px #4460aa;
        cursor: pointer;
        color: #4460aa;
    }
    ${media.phone`
    display: ${(props) => (props.desktop ? "none" : "flex")};
        font-family: NotoSansCJKkr;
        width: 30px;
        height: 30px;
        font-size: 10px;
      `}
`;

export const HeaderMail = styled(Text)`
    font-size: 15px;
    margin-right: 3%;
    animation: ${(props) => props.anim || FadeIn} 0.8s ease-in;
    transition: transform 0.8s, color 0.15s ease-out;
    font-family: NotoSansCJKkr-Light;
    &:hover {
        cursor: pointer;
        color: #4460aa;
    }
    ${(props) =>
        props.scroll_top > 2250 &&
        css`
            transform: matrix(0, 0.9, -0.9, 0, 0, 102) translateX(-63px);
            transition: transform 0.8s, color 0.15s ease-out;
        `}
    ${media.phone`
        font-size: 10px;
        font-family: NotoSansCJKkr;
        ${(props) =>
            props.scroll_top > 130 &&
            css`
                transform: matrix(0, 0.9, -0.9, 0, 30, 102) translateX(-75px);
                transition: transform 0.8s, color 0.15s ease-out;
            `}
      `}
`;

export const HeartText = styled(Text)`
    animation: ${HeartAnim} 2s infinite;
`;

export const SideText = styled(Text)`
    position: absolute;
    right: ${(props) => props.ab_right};
    left: ${(props) => props.ab_left};
    font-size: 30px;
    transform: ${(props) => (props.ab_right ? "matrix(0, 0.9, -0.9, 0, 0, 0)" : "matrix(0, -0.9, 0.9, 0, 0, 0)")};
    font-family: NotoSansCJKkr-Light;
    transition: all 0.8s;
    opacity: 0;
    ${(props) =>
        props.scroll > props.active &&
        css`
            animation: ${SlideInTop} 1.5s ease-in;
            opacity: 1;
        `}
    ${media.phone`
    font-size: 15px;
    transform: ${(props) => props.mobile_transform || "none"};
    right: ${(props) => props.mobile_ab_right};
    left: ${(props) => props.mobile_ab_left};
    ${(props) =>
        props.scroll > props.mobile_active &&
        css`
            animation: ${SlideInTop} 1s ease-in;
            opacity: 1;
        `}
      `}
`;

export const setButtonAnimation = () => {
    document.querySelectorAll("button").forEach((button) => {
        button.removeEventListener("click");
    });
    document.querySelectorAll("button").forEach((button) => {
        if (document.getElementById("btn_login") !== button && document.getElementById("mb_btn_login") !== button) {
            button.addEventListener("click", (e) => {
                const ripple = document.createElement("span");
                ripple.style.position = "absolute";
                ripple.style.left = `${e.x - button.getBoundingClientRect().left}px`;
                ripple.style.top = `${e.y - button.getBoundingClientRect().top}px`;
                ripple.className = "button_anim";
                e.target.appendChild(ripple);
                setTimeout(() => {
                    ripple.remove();
                }, 800);
            });
        }
    });
};

const ModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    max-width: ${(props) => props.max_width || ""};
    min-height: ${(props) => props.min_height || ""};
    border-radius: ${(props) => props.radius || "6px"};
    border: 1px solid #c7c7c7;
    box-shadow: 0 5px 32px 0 rgba(15, 15, 15, 0.15);
    background-color: white;
    transform: translate(-50%, -50%);
    transition: "opacity 0.2s ease";
    z-index: 98;
    animation: ${ModalOpen} 0.2s linear;
    ${media.phone`
        width: ${(props) => props.mobile_width || "335px"};
        height: ${(props) => props.mobile_height || ""};
    `}
    ${media.mini`
        width: 90%;
    `};
`;

export const Modal = (props) => {
    const {
        width,
        height,
        max_width,
        min_height,
        mobile_width,
        mobile_height,
        radius,
        body,
        buttons,
        open,
        children,
        close,
    } = props;

    if (!open) return false;
    var content = "";
    if (children) {
        content = children;
    } else {
        var button_content = [];
        if (buttons) {
            let button_width = 100 / buttons.length + "%";
            buttons.map((button, index) => {
                if (index !== buttons.length - 1 && buttons.length > 1) {
                    button_content.push(
                        <Button
                            width={button_width}
                            style={{
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                height: `100%`,
                                borderRight: `solid 1px #e6e6e6`,
                            }}
                            radius="0"
                            background_color="#ffffff"
                            onClick={(e) => {
                                setTimeout(() => {
                                    document.getElementById("modal_box").style.opacity = 0;
                                    document.getElementById("dark_mobal_back").style.opacity = 0;
                                }, 200);
                                setTimeout(() => {
                                    button.props.onClick();
                                }, 400);
                            }}
                            key={index}
                        >
                            <Text {...button.props} onClick={null}>
                                {button.props.children}
                            </Text>
                        </Button>,
                    );
                } else {
                    button_content.push(
                        <Button
                            style={{
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                width: `${button_width}`,
                                height: `100%`,
                            }}
                            radius="0"
                            background_color="#ffffff"
                            onClick={(e) => {
                                setTimeout(() => {
                                    button.props.onClick();
                                }, 100);
                            }}
                            key={index}
                        >
                            <Text {...button.props} onClick={null}>
                                {button.props.children}
                            </Text>
                        </Button>,
                    );
                }
            });
        }
        content = (
            <Column
                justify_content="space-between"
                align_items="space-between"
                width={width ? width : ""}
                height={height ? height : ""}
                mobile_width={mobile_width ? mobile_width : ""}
                mobile_height={mobile_height ? mobile_height : ""}
            >
                {body}
                <Row
                    width="100%"
                    height="67px"
                    grow="0"
                    basis="auto"
                    justify_content="center"
                    align_items="center"
                    mobile_height="47px"
                    style={{
                        borderTop: `solid 1px #e6e6e6`,
                        borderBottomRightRadius: radius || "6px",
                        borderBottomLeftRadius: radius || "6px",
                        overflow: "hidden",
                    }}
                >
                    {button_content}
                </Row>
            </Column>
        );
    }
    return (
        <div>
            <div
                id="dark_mobal_back"
                onClick={close}
                style={{
                    position: `fixed`,
                    top: `0`,
                    left: `0`,
                    bottom: `0`,
                    right: `0`,
                    backgroundColor: `rgba(0,0,0,0.4)`,
                    zIndex: 98,
                    transition: "opacity 0.4s ease",
                }}
            />
            <ModalBox
                id="modal_box"
                width={width ? width : ""}
                height={height ? height : ""}
                max_width={max_width ? max_width : ""}
                min_height={min_height ? min_height : ""}
                mobile_width={mobile_width ? mobile_width : ""}
                mobile_height={mobile_height ? mobile_height : ""}
                style={{
                    borderRadius: radius ? radius : "6px",
                }}
            >
                {content}
            </ModalBox>
            {setButtonAnimation()}
        </div>
    );
};

export const ScrollColumn = styled(Column)`
    overflow-y: auto;
    overflow-x: hidden;
    max-width: 1560px;
    width: 100%;
    height: 730px;
    margin-top: 20px;
    ${media.phone`
        height: 600px;
        margin-top: 10px;
    `};
`;

export const CloseButton = styled.div`
    display: ${(props) => (props.mobile ? "none" : "flex")};
    background-color: ${(props) => props.color || "#2e2e2e"};
    align-self: ${(props) => props.align_self || ""};
    height: 20px;
    position: ${(props) => props.position || "relative"};
    width: 2px;
    transform: rotate(-45deg);
    &:after {
        background-color: ${(props) => props.color || "#2e2e2e"};
        content: "";
        height: 2px;
        left: -9.5px;
        position: absolute;
        top: 8.5px;
        width: 20px;
    }
    &:hover {
        cursor: pointer;
    }
    margin-right: ${(props) => props.right};
    ${media.phone`
        display: ${(props) => (props.desktop ? "none" : "flex")};
        height: 16px;
        &:after {
            left: -7.5px;
            top: 6.5px;
            width: 16px;
        }
        margin-right: ${(props) => props.mobile_right};

    `};
`;
