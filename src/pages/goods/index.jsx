import * as React from "react";
// import Link from "next/link";
import Image from "next/image";
// import { useTranslation } from "next-i18next";
import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/CategoryCard";
import Button from "@/components/button/Button";
import PopularItemsCard from "@/components/PopularItemsCard";
import { useState } from "react";

// This is an array for test purposes ***WILL BE DELETED LATER***
const categories = ["All", "Furniture", "Clothes", "Electronics", "Others"];
/*
This function is important to bring the data from the server ***FOR FUTURE USE***
*/
export const getStaticProps = async () => {
    const fetchGoods = await fetch(`http://localhost:3004/items`);
    const goods = await fetchGoods.json();
    return {
        props: { goods },
    };
};

// This one can be put in a separate folder since it will be used in two different places
const cities = [
    "All",
    "Adana",
    "Adiyaman",
    "Afyon",
    "Agri",
    "Aksaray",
    "Amasya",
    "Ankara",
    "Antalya",
    "Ardahan",
    "Artvin",
    "Aydin",
    "Balikesir",
    "Bartin",
    "Batman",
    "Bayburt",
    "Bilecik",
    "Bingol",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Canakkale",
    "Cankiri",
    "Corum",
    "Denizli",
    "Diyarbakir",
    "Duzce",
    "Edirne",
    "Elazig",
    "Erzincan",
    "Erzurum",
    "Eskisehir",
    "Gaziantep",
    "Giresun",
    "Gumushane",
    "Hakkari",
    "Hatay",
    "Igdir",
    "Isparta",
    "Istanbul",
    "Izmir",
    "Kahramanmaras",
    "Karabuk",
    "Karaman",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kilis",
    "Kirikkale",
    "Kirklareli",
    "Kirsehir",
    "Kocaeli",
    "Konya",
    "Kutahya",
    "Malatya",
    "Manisa",
    "Mardin",
    "Mersin",
    "Mugla",
    "Mus",
    "Nevsehir",
    "Nigde",
    "Ordu",
    "Osmaniye",
    "Rize",
    "Sakarya",
    "Samsun",
    "Sanliurfa",
    "Siirt",
    "Sinop",
    "Sirnak",
    "Sivas",
    "Tekirdag",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Usak",
    "Van",
    "Yalova",
    "Yozgat",
    "Zonguldak",
];
const GoodsPage = ({ goods }) => {
    const [q, setQ] = useState("");
    const [searchParam] = useState([
        "category",
        "title",
        "description",
        "location",
    ]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [listCity, setListCity] = useState(false);
    const [sortRecent, setSortRecent] = useState(false);

    function search(goods) {
        return goods.filter((item) => {
            if (item.location == filterParam || item.category == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    return (
        <Layout>
            <div className='container m-auto my-5 flex w-[70%] flex-col justify-center'>
                <div className='order-2 flex flex-wrap justify-center md:order-1 lg:justify-between'>
                    {categories.map((item, i) => {
                        return (
                            <CategoryCard
                                key={i}
                                cat={item}
                                setFilterParam={setFilterParam}
                            />
                        );
                    })}
                </div>
                <div className='filterBar order-1 m-3 flex flex-col justify-center md:flex-row md:justify-between'>
                    <span className=' flex items-center justify-center rounded-full border-2  border-primary shadow-md md:w-[30%] md:flex-initial  '>
                        <input
                            placeholder='Search'
                            onChange={(e) => setQ(e.target.value)}
                            className=' w-[80%] bg-[transparent] focus:outline-0  '
                        />{" "}
                        <Image
                            className=''
                            width={15}
                            height={15}
                            alt='search icon'
                            src='/images/searchIcon.svg'
                        />{" "}
                    </span>
                    <span className=' my-2 flex justify-center gap-5  md:my-0 md:w-[40%] md:flex-initial md:justify-end '>
                        <button
                            onBlur={() => setListCity(false)}
                            onClick={() => setListCity(!listCity)}
                            className='relative flex w-[120px] items-center justify-between rounded-full bg-primary px-3  text-sm font-semibold text-[white] shadow-md'
                        >
                            Location
                            <Image
                                width={10}
                                height={10}
                                alt='arrow icon'
                                src='/images/locationMenu.svg'
                            />
                            <div
                                className={`absolute inset-x-0.5 top-7 ${
                                    !listCity ? "invisible" : "block"
                                }  z-20 h-[200px] w-[100%] overflow-scroll rounded-md bg-[white] text-left text-[black]`}
                            >
                                {" "}
                                {cities.map((city, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={city}
                                            onClick={(e) =>
                                                setFilterParam(e.target.value)
                                            }
                                        >
                                            {city}
                                        </option>
                                    );
                                })}
                            </div>
                        </button>
                        <button
                            onClick={() => {
                                setSortRecent(!sortRecent);
                            }}
                            className={`flex items-center justify-between rounded-full ${
                                !sortRecent ? "bg-primary" : "bg-[#fa8f87]"
                            } px-3 py-1 text-sm font-semibold text-[white] shadow-md md:w-[120px]`}
                        >
                            Recent
                            <Image
                                width={15}
                                height={15}
                                alt='arrow icon'
                                src='/images/recentIcon.svg'
                            />
                        </button>
                    </span>
                </div>

                <span className='addItem  order-3 my-5 mr-3 flex justify-center md:justify-end'>
                    <Button outLinedSecondary='Add Item' />
                </span>
                <div className='goodsSection order-last my-5 flex w-full flex-row flex-wrap justify-center gap-2  md:gap-5 lg:justify-between'>
                    {search(goods).map((item, i) => {
                        return <PopularItemsCard key={i} item={item} />;
                    })}
                </div>
            </div>
        </Layout>
    );
};
export default GoodsPage;
