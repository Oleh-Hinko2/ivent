import Link from "next/link";

import { Menu, MenuItem } from "@mui/material";
import styled from "styled-components";

export const MenuWrapper = styled(Menu)`
  & .MuiMenu-paper {
    margin-top: 10px;
    border-radius: 15px;
  }
`;

export const MenuItemWrapper = styled(MenuItem)`
  && {
    font-size: 14px;
  }
`;

export const LinkWrapper = styled(Link)`
  && {
    text-decoration: none;
    color: black;
  }
`;
