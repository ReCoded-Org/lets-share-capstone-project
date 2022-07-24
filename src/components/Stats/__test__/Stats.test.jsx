"use strict";

import renderer from "react-test-renderer";

import Stats from "../Stats";

it("renders correctly", () => {
    const tree = renderer.create(<Stats />).toJSON();
    expect(tree).toMatchSnapshot();
});
