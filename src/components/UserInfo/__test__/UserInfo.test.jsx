"use strict";

import renderer from "react-test-renderer";
import * as nextRouter from "next/router";
import UserInfo from "../UserInfo";

it("renders correctly", () => {
    const tree = renderer.create(<UserInfo />).toJSON();
    expect(tree).toMatchSnapshot();
});
function tryRoute(packacge) {
    packacge.useRouter = jest.fn();
    packacge.useRouter.mockImplementation(() => ({ route: "/" }));
}
tryRoute(nextRouter);
