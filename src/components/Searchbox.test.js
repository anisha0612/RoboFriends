import React from "react";
import { create } from "react-test-renderer";
import SearchBox from "./Searchbox";

it("Check if the SearchBox component is rendered", () => {
  expect(create(<SearchBox />).toJSON()).toMatchSnapshot();
});
