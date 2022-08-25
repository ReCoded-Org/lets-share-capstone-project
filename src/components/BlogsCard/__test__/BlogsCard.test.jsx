import renderer from "react-test-renderer";
import BlogsCard from "../BlogsCard";
import * as nextRouter from "next/router";
const item = {
    id: 2,
    title: "My Blog",
    description:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum necessitatibus numquam qui ea debitis natus amet ab nobis dignissimos consequatur possimus obcaecati corporis doloremque velit, temporibus praesentium unde sed? Quae?",
    image: "/Photo.png",
    date: "01/01/2015",
};
it("renders correctly", () => {
    const tree = renderer.create(<BlogsCard item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
});
function tryRoute(packacge) {
    packacge.useRouter = jest.fn();
    packacge.useRouter.mockImplementation(() => ({ route: "/" }));
}
tryRoute(nextRouter);
