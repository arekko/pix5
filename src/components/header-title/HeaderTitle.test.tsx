import React from "react";
import { render } from "react-native-testing-library";
import HeaderTitle from ".";

describe("testing header title component", () => {
  it("should render title and subtile ", () => {
    const { debug, getByText, getByTestId } = render(
      <HeaderTitle title="Hello" subtitle="World" />
    );
    expect(getByTestId("title")).not.toBeNull();
    expect(getByTestId("title").props.children).toEqual("Hello");

    expect(getByTestId("subtitle")).not.toBeNull();
    expect(getByTestId("subtitle").props.children).toEqual("World");

    // debug();
  });
});
