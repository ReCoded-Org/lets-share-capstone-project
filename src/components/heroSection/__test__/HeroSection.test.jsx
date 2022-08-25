import renderer from "react-test-renderer";
import HeroSection from "../HeroSection";
import * as nextRouter from "next/router";
it("renders correctly", () => {
    const tree = renderer.create(<HeroSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
function tryRoute(packacge) {
    packacge.useRouter = jest.fn();
    packacge.useRouter.mockImplementation(() => ({ route: "/" }));
}
tryRoute(nextRouter);
