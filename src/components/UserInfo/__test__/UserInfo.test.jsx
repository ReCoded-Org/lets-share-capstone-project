"use strict";

import renderer from "react-test-renderer";

import UserInfo from "../UserInfo";

it("renders correctly", () => {
    const tree = renderer.create(<UserInfo />).toJSON();
    expect(tree).toMatchSnapshot();
});
