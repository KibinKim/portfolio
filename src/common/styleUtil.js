import React, { Component } from "react";
import styled, { css } from "styled-components";

//media query를 통한 자동 리사이징
export const sizes = {
    wide: "1400px",
    desktop: "992px",
    tablet: "768px",
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

export const Theme = {
    mint: "#53e3ac",
    light_gold: "#ffd55d",
    red: "#fe614f",
    v_light_gray: "#e6e6e6",
    mi_gray: "#616161",
    dark_gray: "#1a1a1a",
    aqua_green: "#11c78f",
    warm_gray: "#9d9d9d",
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
    border: ${(props) => props.border || ""};
    border-radius: ${(props) => props.border_radius || ""};
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
        border-radius: ${(props) => props.mobile_border_radius || ""};
    `}
`;

export const Text = styled.div`
    display: ${(props) => (props.mobile ? "none" : "block")};
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
    font-size: ${(props) => props.size || "28px"};
    color: ${(props) => props.theme[props.color] || props.color || props.theme.dark_gray};
    line-height: ${(props) => props.height || "1.25"};
    letter-spacing: ${(props) => props.letter_spacing || ""};
    text-decoration: ${(props) => (props.underline ? "underline" : "")};
    order: ${(props) => (props.order ? props.order : "")};
    transition: color 0.15s ease-out;
    &:hover {
        cursor: ${(props) => props.cursor || ""};
        color: ${(props) => props.hover_color || ""};
    }
    ${media.phone`
        display: ${(props) => (props.desktop ? "none" : "block")};
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
    `}
`;
