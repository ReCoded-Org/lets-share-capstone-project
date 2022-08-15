"use strict";

import renderer from "react-test-renderer";

import Card from "../card.jsx";
const item = {
    id: 1,
    title: "My-Blog",
    image: "/Photo.png",
    imageAlt: "Sunset in the mountains",
};

it("renders correctly", () => {
    const tree = renderer.create(<Card item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
});
