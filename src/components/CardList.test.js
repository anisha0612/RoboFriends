import React from "react";
import { create } from "react-test-renderer";
import CardList from "./CardList";

it("expect to render Card component using snapshot testing", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
  ];
  const cardList = create(<CardList robots={mockRobots} />);
  expect(cardList.toJSON()).toMatchSnapshot();
});
