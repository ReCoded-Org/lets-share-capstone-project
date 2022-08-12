import React, { useState } from "react";

const cities = [
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

const categories = ["first", "second", "third"];

export default function Option(props) {
    const location = props.location;
    const category = props.category;

    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
        props.setFormData({ ...props.formData, [e.target.name]: e.target.value });
    }

    return (
        <form className='my-7 flex justify-center'>
            <label className='flex w-[80%] flex-col items-start justify-center md:w-[60%] xl:w-[40%]'>
                <span className='mb-3 pl-3 text-xl font-semibold text-fontColor'>
                    {location ? "Location" : category ? "Category" : null}
                </span>
                <select
                    className='w-full rounded-lg border-2 border-primary shadow-md'
                    value={value}
                    onChange={handleChange}
                    name={props.name}
                >
                    {location
                        ? cities.map((city, i) => (
                              <option key={i} value={city}>
                                  {city}
                              </option>
                          ))
                        : category
                        ? categories.map((city, i) => (
                              <option key={i} value={city}>
                                  {city}
                              </option>
                          ))
                        : null}
                </select>
            </label>
        </form>
    );
}
