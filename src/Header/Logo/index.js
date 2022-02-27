import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

const Img = styled("img")({
  maxHeight: "3rem;",
});

export default function Logo() {
  return (
    <Link to="/">
      <Img src={logo} alt="logo pokemon id" />
    </Link>
  );
}
