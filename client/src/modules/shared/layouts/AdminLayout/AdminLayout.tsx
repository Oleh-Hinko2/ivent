import { AdminDrawer, Header } from "../../../core/components";
import { Wrapper, Main } from "./AdminLayout.module";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children?: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <Wrapper display="flex" flexDirection="column">
      <Header />
      <AdminDrawer />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default AdminLayout;
