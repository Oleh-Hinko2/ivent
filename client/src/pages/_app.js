import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { appWithTranslation } from "next-i18next";
import wrapper from "src/modules/core/store";
import { Provider } from "react-redux";
import "./styles.css";
import { BasicLayout } from "src/modules/shared";
import { ReactElement } from "react";

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(<Component {...props.pageProps} />)}
    </Provider>
  );
};

export default appWithTranslation(App);
