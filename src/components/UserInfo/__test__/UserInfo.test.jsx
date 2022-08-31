"use strict";

import renderer from "react-test-renderer";
import * as nextRouter from "next/router";
import UserInfo from "../UserInfo";
import * as AuthContext from "context/AuthContext";

function tryAuth(packacge) {
    packacge.useAuth = jest.fn();
    packacge.useAuth.mockImplementation(() => ({
        user: { uid: "15ibf3cDTyNo2JE2NBPN7iL0Giu1" },
    }));
}
tryAuth(AuthContext);

it("renders correctly", () => {
    const tree = renderer.create(<UserInfo test={true} />).toJSON();
    expect(tree).toMatchSnapshot();
});
function tryRoute(packacge) {
    packacge.useRouter = jest.fn();
    packacge.useRouter.mockImplementation(() => ({ route: "/" }));
}
tryRoute(nextRouter);
