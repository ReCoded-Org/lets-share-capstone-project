import React from "react";

import BlogCard from "../BlogCard/";
import PopularItemsCard from "../PopularItemsCard/";
import CategoryCard from "../CategoryCard/";

function List(props) {
    const blogs = props.blogs;
    const items = props.items;
    const categories = props.categories;

    const list = blogs ? blogs : items ? items : categories;

    return (
        <>
            <h2 className='my-10 text-center text-2xl font-bold text-primary'>
                {blogs ? "Blogs" : items ? "Items" : null}
            </h2>
            <div className=' container mx-auto mt-10  flex grid-cols-2 flex-col gap-5 px-4 text-center sm:grid md:grid-cols-4   md:text-left  xl:grid-cols-4'>
                {"" &&
                    list.map((item) =>
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
