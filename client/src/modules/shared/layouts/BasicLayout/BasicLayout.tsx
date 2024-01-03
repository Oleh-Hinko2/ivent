import { Wrapper, Main } from "./BasicLayout.module";
import { ReactNode } from "react";
import { Footer, Header } from "../../../core/components";
import { BASE_REQUEST_HEADERS } from "../../../core/axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface BasicLayoutProps {
  children?: ReactNode;
  footerVisible?: boolean;
}

interface ServerSideProps {
  locale: string;
}

// export const getServerSideProps = async ({ locale }: ServerSideProps) => {
//   const userDataRes = await fetch(`http:/127.0.0.1:3001/user`, {
//     method: "GET",
//     headers: BASE_REQUEST_HEADERS,
//   });

//   const userData = await userDataRes.json();

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"], null, [
//         "en-US",
//         "no",
//       ])),
//       user: userData,
//       locale,
//     },
//   };
// };

const BasicLayout = ({ children, footerVisible = true }: BasicLayoutProps) => {
  return (
    <Wrapper display="flex" flexDirection="column">
      <Header />
      <Main>{children}</Main>
      {footerVisible && <Footer />}
    </Wrapper>
  );
};

export default BasicLayout;
