"use strict";

import renderer from "react-test-renderer";

import Card from "../card.jsx";

it("renders correctly", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
});
