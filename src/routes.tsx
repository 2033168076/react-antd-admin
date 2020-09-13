import loadable from "@loadable/component"
import { RouteConfig } from "react-router-config"

import options from "config/@loadable__component"

const routes: Array<RouteConfig> = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import("pages/home"), options),
  },
  {
    path: "/charts/keyboard",
    component: loadable(() => import("pages/charts/keyboard"), options),
  },
  {
    path: "/charts/line",
    component: loadable(() => import("pages/charts/line"), options),
  },
  {
    path: "/charts/mix-chart",
    component: loadable(() => import("pages/charts/mix-chart"), options),
  },
  {
    path: "/icons",
    component: loadable(() => import("pages/icons"), options),
  },
  {
    path: "/pdf",
    component: loadable(() => import("pages/pdf"), options),
  },
  {
    path: "/clipboard",
    component: loadable(() => import("pages/clipboard"), options),
  },
  {
    path: "/hello-world",
    component: loadable(() => import("pages/hello-world"), options),
  },
  {
    path: "/version/:version",
    component: loadable(() => import("pages/version"), options),
  },
  {
    path: "/tab",
    component: loadable(() => import("pages/tab"), options),
  },
]

export default routes
