import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Overview } from "./pages/Overview";
import { PrimaryColorsPage } from "./pages/PrimaryColorsPage";
import { SecondaryColorsPage } from "./pages/SecondaryColorsPage";
import { ComponentsPage } from "./pages/ComponentsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Overview },
      { path: "colors/primary", Component: PrimaryColorsPage },
      { path: "colors/secondary", Component: SecondaryColorsPage },
      { path: "components", Component: ComponentsPage },
    ],
  },
]);
