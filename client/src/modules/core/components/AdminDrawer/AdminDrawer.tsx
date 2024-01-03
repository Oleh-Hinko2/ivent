import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import GroupIcon from "@mui/icons-material/Group";
import * as uuid from "uuid";

import * as S from "./AdminDrawer.module";
import { useRouter } from "next/router";

const AdminDrawer = () => {
  const { locale, pathname } = useRouter();

  const drawerData = [
    {
      id: uuid.v4(),
      title: "Оголошення",
      icon: <AnnouncementIcon fontSize="small" sx={{ color: "white" }} />,
      path: "/admin/announcements",
    },
    {
      id: uuid.v4(),
      title: "Користувачі",
      icon: <GroupIcon fontSize="small" sx={{ color: "white" }} />,
      path: "/admin/users",
    },
    {
      id: uuid.v4(),
      title: "Фільтри",
      icon: <GroupIcon fontSize="small" sx={{ color: "white" }} />,
      path: "/admin/filters",
    },
  ];

  return (
    <S.Drawer variant="permanent" anchor="left">
      <Divider />
      <S.List>
        {drawerData.map(({ id, title, icon, path }) => (
          <S.ListItem
            key={id}
            disablePadding
            state={pathname === path ? "active" : "inactive"}
          >
            <S.Link href={path} locale={locale}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </S.Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Drawer>
  );
};

export default AdminDrawer;
