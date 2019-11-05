import React from "react";
import { storiesOf } from "@storybook/react";
import { Home } from "../src/Home/index";
import '@storybook/addon-viewport/register';
import data from './data';


storiesOf("Home", module).add("default", () => (<Home data={data} />));

