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
const arr = [1, 2, 3, 4, 5];


// This function is important to bring the data from the server ***FOR FUTURE USE***
export const getStaticProps = async () => {

    const fetchGoods = await fetch('http://localhost:3000/items');
    const items = await fetchGoods.json();
 return {
     props: {items}
 }
 }
 

// This one can be put in a separate folder since it will be used in two different places
const cities = [
    "None",
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
const GoodsPage = ( { items }) => {
    /*
THIS STATE FOR THE REAL DATA ***FOR FUTURE USE***
The data here should be processd by a FILTER FUNCTION  before it gets assigned to the state
    const [data, setData] = useState([]);
*/

    // This for the location Menu
    const [listCity, setListCity] = useState(false);

    /* Important States to filter the data
    //This state to handle filter by City
    const [byCity, setByCity] = useState("None");
    
    // This state should handle the search bar
    const [byName, setByName] = useState("");
    onChange={(e) => {setByName(e.target.value); }} // to be put inside the search input

    // This state should handle filter by Category
    const [byCategory, setByCategory] = useState("None");
*/

    const [sortRecent, setSortRecent] = useState(false);

    const handleSelectCity = () => {
        setListCity(!listCity);
        // setByCity(e.target.innerHTML); once we uncomment this, we have to add e to the function
    };

    return (
        <Layout>
            <div className='container m-auto my-5 flex w-[70%] flex-col justify-center'>
                <div className='order-2 flex flex-wrap justify-center md:order-1 lg:justify-between'>
                    {arr.map((item) => {
                        return <CategoryCard key={item} />;
                    })}
                </div>
                <div className='filterBar order-1 m-3 flex flex-col justify-center md:flex-row md:justify-between'>
                    <span className=' flex items-center justify-center rounded-full border-2  border-primary shadow-md md:w-[30%] md:flex-initial  '>
                        <input
                            placeholder='Search'
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
                            onBlur={() => {
                                setListCity(false);
                            }}
                            onClick={() => {
                                setListCity(!listCity);
                            }}
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
                                {cities.map((city) => {
                                    return (
                                        <li
                                            className='list-none hover:bg-btnBgHover'
                                            onClick={handleSelectCity}
                                            key={city}
                                        >
                                            {city}
                                        </li>
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
                <div className='goodsSection order-last my-5  flex flex-wrap justify-center gap-2  md:gap-5 lg:justify-between'>
                    {items.map((item) => {
                        return (
                            <div key={item} className='w-[30%]'>
                                {" "}
                                <PopularItemsCard  item = {item}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};
export default GoodsPage;
