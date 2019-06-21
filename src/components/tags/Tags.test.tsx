import React from "react";
import { render } from "react-native-testing-library";
import Tags from ".";

describe("testing ImageStates component", () => {
  it("should display image stats", () => {
    const tags = [{ title: "tag1" }, { title: "tag2" }];

    const { getByTestId } = render(<Tags tags={tags} />);

    expect(getByTestId("tags-container").props.children.length).toEqual(2);
  });
});
