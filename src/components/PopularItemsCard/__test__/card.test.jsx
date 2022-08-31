"use strict";

import renderer from "react-test-renderer";

import Card from "../card.jsx";

const item = {
    id: 13,
    title: "Fantastic Frozen Computer",
    location: "Istanbul",
    price: 787,
    description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    category: "Furniture",
    itemImage: ["/Photo.png", "/Photo.png", "/Photo.png"],
    images: [
        "https://api.lorem.space/image/furniture?w=640&h=480&r=9644",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=9186",
        "https://api.lorem.space/image/furniture?w=640&h=480&r=6667",
    ],
};

it("renders correctly", () => {
    const tree = renderer.create(<Card item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
});
