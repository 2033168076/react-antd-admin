import {
  BarChartOutlined,
  InfoCircleOutlined,
  LikeOutlined,
  PaperClipOutlined,
  InfoOutlined,
  FilePdfOutlined,
  FolderOutlined
} from "@ant-design/icons"
import React from "react"

export interface Route {
  children?: Route[]
  icon?: React.ReactNode
  key: string
  url?: string
  name: string
}

const basicRoutes: Array<Route> = [
  {
    icon: <BarChartOutlined />,
    key: "charts",
    name: "图表",
    children: [
      {
        key: "keyboard",
        name: "键盘图",
      },
      {
        key: "line",
        name: "折线图",
      },
      {
        key: "mix-chart",
        name: "混合图",
      },
    ],
  },
  {
    icon: <InfoOutlined />,
    key: "icons",
    name: "图标",
  },
  {
    icon: <FilePdfOutlined />,
    key: "pdf",
    name: "PDF",
  },
  {
    icon: <PaperClipOutlined />,
    key: "clipboard",
    name: "剪贴板",
  },
  {
    icon: <LikeOutlined />,
    key: "hello-world",
    name: "HelloWorld",
  },
  {
    icon: <InfoCircleOutlined />,
    key: "version",
    name: "版本",
    children: [
      {
        key: "16.8.x",
        name: "v16.8.x",
      },
      {
        key: "16.13",
        name: "v16.13",
      },
    ],
  },
  {
    icon: <FolderOutlined />,
    key: "tab",
    name: "tab",
  },
]

function getRoutes(routes: Array<Route>, parentPath = "") {
  return routes.map((route) => {
    let result: Route = {
      ...route,
      url: `${parentPath}/${route.key}`,
    }
    if (route.children) {
      result.children = getRoutes(route.children, result.url)
      return result
    }
    return result
  })
}

export default getRoutes(basicRoutes)
