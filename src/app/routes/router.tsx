import { createBrowserRouter } from "react-router";
import { routeMap } from "./utils";
import { App } from "../ui/App";
import { AeroaktProduct, DostavProduct, DviprazProduct, Landing, RdpDashboardProduct, RdpLandingProduct, TsdProduct, UipProduct } from "@pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Landing
      },
      {
        path: routeMap.aeroakt,
        Component: AeroaktProduct
      },
      {
        path: routeMap.dostav,
        Component: DostavProduct
      },
      {
        path: routeMap.dvipraz,
        Component: DviprazProduct
      },
      {
        path: routeMap.rdpDashboard,
        Component: RdpDashboardProduct
      },
      {
        path: routeMap.rdpLanding,
        Component: RdpLandingProduct
      },
      {
        path: routeMap.tsd,
        Component: TsdProduct
      },
      {
        path: routeMap.uip,
        Component: UipProduct
      },
    ]
  },
]);
