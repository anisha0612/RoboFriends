import React from "react";
import { create } from "react-test-renderer";
import { shallow } from "enzyme";
import Card from "./Card";

it("expect to render Card component using length", () => {
  expect(shallow(<Card />).length).toEqual(1);
});

it("expect to render Card component with the listed classes", () => {
  const wrapper = shallow(<Card />);
  expect(
    wrapper.equals(
      <div className='tc br4 dib bg-light-yellow grow ma3 pa3 shadow-4' />
    )
  );
});

// snapshot testing

it("expect to render Card component using snapshot testing", () => {
  const card = create(<Card />);
  expect(card.toJSON()).toMatchSnapshot();
});
