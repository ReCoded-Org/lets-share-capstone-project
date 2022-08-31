"use strict";

import renderer from "react-test-renderer";

import List from "../List.jsx";
const test = [1, 2, 3, 4, 5, 6];

it("renders correctly", () => {
    const tree = renderer.create(<List test={test} />).toJSON();
    expect(tree).toMatchSnapshot();
});
