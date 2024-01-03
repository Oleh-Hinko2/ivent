import React, { useState } from "react";

import CelebrationIcon from "@mui/icons-material/Celebration";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuIcon from "@mui/icons-material/Menu";

import * as S from "./Header.module";

import { Menu } from "../../../shared";
import Link from "next/link";
import { useRouter } from "next/router";
import * as uuid from "uuid";
import { useAuthFacade } from "../../../auth";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { locale } = useRouter();

  const { user } = useAuthFacade();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userMenuOptions = [
    {
      id: uuid.v4(),
      title: "Зареєструватись",
      path: "/auth/sign-up",
      visible: user ? false : true,
    },
    {
      id: uuid.v4(),
      title: "Увійти",
      path: "/auth/sign-in",
      visible: user ? false : true,
    },
    {
      id: uuid.v4(),
      title: "Вийти",
      path: "/",
      visible: user ? true : false,
    },
    {
      id: uuid.v4(),
      title: "Адмінка",
      path: "/admin/announcements",
      visible: true,
    },
  ];

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Link href="/ua" locale={locale}>
          <CelebrationIcon fontSize="large" sx={{ color: "white" }} />
        </Link>
      </S.LogoWrapper>
      <S.UserWrapper>
        <S.UserButton onClick={handleClick}>
          <MenuIcon fontSize="small" sx={{ color: "white" }} />
          <ManageAccountsIcon sx={{ color: "white" }} />
        </S.UserButton>
        <Menu
          open={open}
          onClose={handleClose}
          anchorEl={anchorEl}
          options={userMenuOptions}
        />
      </S.UserWrapper>
    </S.Wrapper>
  );
};

export default Header;
