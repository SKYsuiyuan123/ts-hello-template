/*
 * @Author: sunpeiyuan
 * @Date: 2020-04-18 00:03:30
 * @LastEditors: sunpeiyuan
 * @LastEditTime: 2020-04-18 01:24:17
 * @FilePath: \ts-hello-template\src\index.tsx
 * @Description: 项目入口文件
 */
import React from "react";
import ReactDom from "react-dom";

import { Hello } from "./components/Hello";

ReactDom.render(
  <Hello hellostr="Hello Ts-template-React22" />,
  document.getElementById("root")
);
