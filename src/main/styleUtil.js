import React, { Component } from "react";
import styled, { css } from "styled-components";
import backimg from "assets/img/react_background_img.png";

export const Page_1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;
    justify-content: center;
    position: relative;
    background-image: url(${backimg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position-y: top;
`;
