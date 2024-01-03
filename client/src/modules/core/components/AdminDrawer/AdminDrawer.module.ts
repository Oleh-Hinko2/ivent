import styled from "@emotion/styled";
import MuiDrawer from "@mui/material/Drawer";
import MuiList from "@mui/material/List";
import MuiListItem from "@mui/material/ListItem";
import NextLink from "next/link";

type ListItemState = "active" | "inactive";

interface ListItemProps {
  state?: ListItemState;
}

export const Drawer = styled(MuiDrawer)`
  .MuiPaper-root {
    width: 250px;
    top: 70px;
    background-color: black;
    border-top: 1px solid white;
  }
`;

export const List = styled(MuiList)`
  width: 100%;
  height: 100%;
  padding: 15px 20px;
`;

export const ListItem = styled(MuiListItem)<ListItemProps>`
  display: flex;
  margin-bottom: 10px;
  border-bottom: ${(props) =>
    props.state === "active" ? "1px solid white" : "none"};
`;

export const Link = styled(NextLink)`
  text-decoration: none;
  text-transform: capitalize;
  color: white;
  display: flex;
  align-items: center;
`;
