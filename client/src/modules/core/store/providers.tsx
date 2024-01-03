"use client";

import { store } from "./index.js";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
