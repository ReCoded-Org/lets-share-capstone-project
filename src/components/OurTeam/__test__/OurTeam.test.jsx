import renderer from "react-test-renderer";
import OurTeam from "@/components/OurTeam/OurTeam";

it("renders correctly", () => {
    const tree = renderer.create(<OurTeam />).toJSON();
    expect(tree).toMatchSnapshot();
});
