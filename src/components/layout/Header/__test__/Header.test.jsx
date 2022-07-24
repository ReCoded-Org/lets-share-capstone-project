"use strict";

import renderer from "react-test-renderer";
import Header from "../Header";
import * as nextRouter from "next/router";

it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));
