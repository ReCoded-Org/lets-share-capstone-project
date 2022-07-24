"use strict";

import renderer from "react-test-renderer";

import Index from "../index.js";

it("renders correctly", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
});
