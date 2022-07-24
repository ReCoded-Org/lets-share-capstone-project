"use strict";

import renderer from "react-test-renderer";

import List from "../List.jsx";

it("renders correctly", () => {
    const tree = renderer.create(<List />).toJSON();
    expect(tree).toMatchSnapshot();
});
