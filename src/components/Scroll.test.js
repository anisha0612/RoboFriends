import React from "react";
import { create } from "react-test-renderer";
import Scroll from "./Scroll";

it("Check if the Scroll component is rendered", () => {
  expect(create(<Scroll />).toJSON()).toMatchSnapshot();
});
