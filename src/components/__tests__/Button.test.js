import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { Button } from "../Button";

test("can press the button", () => {
  const onPressMock = jest.fn();

  const { getByText } = render(<Button text="Testing" onPress={onPressMock} />);

  fireEvent.press(getByText("Testing"));
  expect(onPressMock).toHaveBeenCalled();
  expect(onPressMock.mock.calls.length).toBe(1);
});

test("onPress is not called when button is disabled", () => {
  const onPressMock = jest.fn();
  const { getByText } = render(
    <Button text="Testing" onPress={onPressMock} disabled />
  );

  fireEvent.press(getByText("Testing"));
  expect(onPressMock).not.toHaveBeenCalled();
});
