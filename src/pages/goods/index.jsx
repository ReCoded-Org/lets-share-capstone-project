import * as React from "react";
// import Link from "next/link";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/layout/Layout";
import CategoryCard from "@/components/CategoryCard";
import Button from "@/components/button/Button";
import PopularItemsCard from "@/components/PopularItemsCard";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "firebaseConfig";
import { collection, query } from "firebase/firestore";

// This is an array for test purposes ***WILL BE DELETED LATER***

const categories = ["All", "Furniture", "Clothes", "Electronics", "Others"];
/*
This function is important to bring the data from the server ***FOR FUTURE USE***
*/
export const getStaticProps = async ({ locale }) => {
    // const fetchGoods = await fetch(`http://localhost:3000/items`);
    // const goods = await fetchGoods.json();
    return {
        props: { ...(await serverSideTranslations(locale, ["common"])) },
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

/*
THIS STATE FOR THE REAL DATA ***FOR FUTURE USE***
The data here should be processd by a FILTER FUNCTION  before it gets assigned to the state
    const [data, setData] = useState([]);
*/

// This for the location Menu
const GoodsPage = () => {
    const { t } = useTranslation("common");
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

    const [items] = useCollection(query(collection(db, "items")));

    function search(items) {
        return items?.docs?.filter((itemm) => {
            let item = itemm.data();
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
            <div className=' container m-auto my-5 flex w-[70%] flex-col justify-center font-primary'>
                <div className='order-2 mb-10 flex flex-wrap justify-center gap-4 md:order-1 lg:justify-between'>
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
                <div className='filterBar order-1 m-3 mb-5 flex flex-col justify-center gap-5 md:flex-row md:justify-between'>
                    <span className=' flex items-center justify-center rounded-full border-2  border-primary shadow-md md:w-[30%] md:flex-initial  '>
                        <input
                            placeholder={t("goods.search")}
                            onChange={(e) => setQ(e.target.value)}
                            className=' w-[80%] bg-[transparent] focus:outline-0  '
                        />
                        <ImSearch color='#33956D' size={22} />
                    </span>
                    <span className=' my-2 flex justify-between gap-5  md:my-0 md:w-[40%] md:flex-initial md:justify-end '>
                        <button
                            onBlur={() => setListCity(false)}
                            onClick={() => setListCity(!listCity)}
                            className='text-md relative flex h-9 w-[120px] items-center justify-between rounded-full bg-primary px-3 text-[white] shadow-md'
                        >
                            {t("common.location")}
                            <div className=' active:translate-y-1 '>
                                <IoIosArrowDown />
                            </div>
                            <div
                                className={`absolute inset-x-0.5 top-9 ${
                                    !listCity ? "invisible" : "block"
                                } z-20 mt-1 flex h-[200px] w-[100%] flex-col gap-2 overflow-scroll rounded-md bg-[white] text-left text-sm text-fontColor`}
                            >
                                {cities.map((city, i) => {
                                    return (
                                        <option
                                            className='pl-3 hover:opacity-80'
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
                            } text-md h-9 w-[120px] px-3 py-1 text-[white] shadow-md md:w-[120px]`}
                        >
                            {t("goods.recent")}
                            <Image
                                width={15}
                                height={15}
                                alt='arrow icon'
                                src='/images/recentIcon.svg'
                            />
                        </button>
                    </span>
                </div>

                <span className=' order-3 mr-3 flex justify-center md:my-5 md:justify-end '>
                    <Link href='/add-item'>
                        <a>
                            <Button outLinedSecondary={t("addItem.addItem")} />
                        </a>
                    </Link>
                </span>

                <div className='goodsSection order-last my-5 flex w-full flex-row flex-wrap justify-center gap-5  md:gap-5 md:gap-y-8 lg:justify-center'>
                    {search(items)
                        ? search(items).map((item, i) => {
                              return (
                                  <PopularItemsCard
                                      key={i}
                                      id={item.id}
                                      item={item.data()}
                                  />
                              );
                          })
                        : items?.docs.map((item, i) => {
                              return (
                                  <PopularItemsCard
                                      key={i}
                                      id={item.id}
                                      item={item.data()}
                                  />
                              );
                          })}
                </div>
            </div>
        </Layout>
    );
};
export default GoodsPage;
