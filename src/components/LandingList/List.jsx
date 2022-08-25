import React from "react";

import BlogCard from "../BlogCard/";
import PopularItemsCard from "../PopularItemsCard/";
import CategoryCard from "../CategoryCard/";

const items = [
    {
        id: 13,
        title: "Fantastic Frozen Computer",
        location: "Adana",
        price: 787,
        description:
            "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        category: "Furniture",

        images: [
            "https://api.lorem.space/image/furniture?w=640&h=480&r=9644",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=9186",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=6667",
        ],
    },
];
function List(props) {
    const blogs = props.blogs;
    // const items = props.items; delete above items array and uncomment this line to pass items as props in other pages
    const categories = props.categories;

    const list = blogs ? blogs : items ? items : categories;

    return (
        <>
            <h2 className='pt-20 pb-14 text-center font-head text-4xl font-bold tracking-wider text-fontColor'>
                {blogs ? "Blogs" : items ? "Popular Items" : null}
            </h2>
            {/* <div className=' container  mx-auto mt-10 mb-10 flex  grid-cols-2 flex-col gap-5 bg-[#FAFAFA]  text-center sm:grid md:text-left   lg:grid-cols-3  xl:grid-cols-3'> */}

            <div className='mx-20 flex flex-wrap justify-center gap-10'>
                {list
                    .slice(0, 5)
                    .map((item) =>
                        list === blogs ? (
                            <BlogCard key={item.id} item={item} />
                        ) : categories ? (
                            <CategoryCard key={item.id} item={item} />
                        ) : (
                            <PopularItemsCard key={item.id} item={item} />
                        )
                    )}
            </div>
        </>
    );
}

export default List;
