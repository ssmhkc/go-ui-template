import React from "react";
import { storiesOf } from "@storybook/react";
import { Home } from "../src/app/Home/index";
import { Several } from "../src/app/Several/index";
import { Multiple } from "../src/app/Multiple/index";



import '@storybook/addon-viewport/register';
import data from './data';


storiesOf("Home", module).add("default", () => (<Home data={data} />));
storiesOf("Components", module).add("several", () => (<Several data={data} />));
storiesOf("Components", module).add("multiple", () => (<Multiple data={data} />));






