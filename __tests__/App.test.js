import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import App from "../App";

test("it renders all inputs as expected", () => {
  const { toJSON } = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});
