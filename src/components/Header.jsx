import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import CodepenLogo from "../assets/codepen-logo.png";

const Container = styled(AppBar)`
  background: black;
  height: 9vh;
  position: static;
`;

const Image = styled("img")({
  width: 40,
});

const Header = () => {
  return (
    <Container>
      <Toolbar>
        <Image src={CodepenLogo} alt="logo" />
      </Toolbar>
    </Container>
  );
};

export default Header;
