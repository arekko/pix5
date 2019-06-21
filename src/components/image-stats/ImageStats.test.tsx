import React from "react";
import { render } from "react-native-testing-library";
import { ImageStats } from "./ImageStats";

describe("testing ImageStates component", () => {
  it("should display image stats", () => {
    const { getByTestId } = render(
      <ImageStats
        likes={20}
        downloads={3202}
        date="2016-05-03T11:00:28-04:00"
      />
    );

    expect(getByTestId("likes")).not.toBeNull();
    expect(getByTestId("likes").props.children).toEqual(20);

    expect(getByTestId("date")).not.toBeNull();
    expect(getByTestId("date").props.children).toEqual("2016-05-03");

    expect(getByTestId("downloads")).not.toBeNull();
    expect(getByTestId("downloads").props.children).toEqual(3202);
  });
});
