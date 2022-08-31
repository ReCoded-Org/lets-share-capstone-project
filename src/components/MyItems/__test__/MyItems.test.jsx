"use strict";

import renderer from "react-test-renderer";
import MyItems from "../MyItems";

it("renders correctly", () => {
    const tree = renderer.create(<MyItems test={true} />).toJSON();
    expect(tree).toMatchSnapshot();
});
