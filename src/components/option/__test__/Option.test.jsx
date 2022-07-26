import renderer from "react-test-renderer";
import Option from "../Option";

it("renders correctly", () => {
    const tree = renderer.create(<Option />).toJSON();
    expect(tree).toMatchSnapshot();
});
