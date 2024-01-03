import React from "react";

import * as S from "./Menu.style";

type MenuOptionsType = {
  title: string;
  id: string;
  path: string;
  visible: boolean;
};

type MenuPropsType = {
  onClose: () => void;
  open: boolean;
  anchorEl: null | HTMLElement;
  options: MenuOptionsType[];
};

const Menu = ({ onClose, open, anchorEl, options }: MenuPropsType) => {
  return (
    <S.MenuWrapper
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {options.map((option) => (
        <>
          {option.visible && (
            <S.MenuItemWrapper key={option.id}>
              <S.LinkWrapper href={option.path}>{option.title}</S.LinkWrapper>
            </S.MenuItemWrapper>
          )}
        </>
      ))}
    </S.MenuWrapper>
  );
};

export default Menu;
