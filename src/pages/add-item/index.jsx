import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout/Layout";
import Option from "@/components/option";
import { collection, addDoc, doc, setDoc, updateDoc } from "firebase/firestore"; 
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { db, storage } from "firebaseConfig";
import { auth } from "firebaseConfig";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AiOutlineCloudUpload } from "react-icons/ai";

import React, { useState } from "react";
import { useAuth } from "context/AuthContext";


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            // Will be passed to the page component as props
        },
    };
}

function Index() {


    const [formData, setFormData] = useState({});

    const [ imageToPost, setImageToPost ] = useState(null)

    const { user } = useAuth()

    const storageRef = ref(storage , `items/${Date.now()}`)


    const { title, description, category, location } = formData

    console.log(category);
    
    console.log(auth.currentUser);
  


   async function handleSubmit(e) {
        e.preventDefault();
        try {
            const  itemsRef = collection(db, "items" )
            const docRef = await addDoc( itemsRef , {
              title,
              description,
              category,
              location,
              user : user.uid
            });

            if (imageToPost) {
                uploadString(storageRef, imageToPost, 'data_url').then((snapshot) => {
                  getDownloadURL(snapshot.ref).then((url) => {
                    console.log(url);
                    updateDoc(doc(itemsRef,  docRef.id), {
                      itemImage: url
                    }, { merge: true })
                  })
                })
              }


              console.log();

            console.log("Document written with ID: ", docRef);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

            
    }




    const { t } = useTranslation("common");

    const addImage = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0]);
        }
    
        reader.onload = (readerEvent) => {
          setImageToPost(readerEvent.target.result);
        };
      };

    return (
        <>
            <Layout>
                <h1 className='mt-8 text-center font-head text-4xl font-bold tracking-wider text-fontColor'>
                    {t("addItem.addItem")}
                </h1>
                <div className='mb-12 grid '>
                    <Input
                        value={formData.title}
                        setFormData={setFormData}
                        formData={formData}
                        name='title'
                        type='text'
                        title={t("addItem.title")}
                        placeholder='Enter Title'
                    />
                    <Option location='Location'
                    
                    setFormData={setFormData}
                    formData={formData}
                    
                    name='location'

                    />
                    <Option category='Category'
                    value={formData.category}
                    setFormData={setFormData}
                    formData={formData}
                    
                    name='category'
                    
                    />

                    <div className='my-7 flex justify-center font-primary tracking-wider'>
                        <div className='flex w-[80%] flex-col items-start justify-center md:w-[60%] xl:w-[40%]'>
                            <label className='mb-3 pl-3 text-lg font-semibold text-fontColor'>
                                {t("addItem.description")}
                            </label>
                            <textarea
                            value={formData.description}
                            name="description"
                                onChange={(e)=> setFormData({...formData, [e.target.name] : e.target.value})}
                                placeholder='Enter Description'

                                className='h-40 w-full rounded-lg border-0 shadow-lg'                            />
                        </div>
                    </div>
                    {/* <div className="">
                    <Input
                    
                    setFormData={setFormData}
                    formData={formData}
                    onChange={addImageToPost}
                    name='images'
                        type='file'
                        title={t("addItem.uploadPhotos")}
                        placeholder='Upload Image'
                    />

                    </div> */}

                    <div className=' my-7 flex w-[80%] flex-col items-start justify-self-center md:w-[60%] xl:w-[40%]'>
                        <h2 className='mb-3 pl-3 font-primary text-lg font-semibold text-fontColor'>
                            {t("addItem.uploadPhotos")}
                        </h2>
                        <label className='flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-0 bg-[white] shadow-lg '>
                            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                                <AiOutlineCloudUpload
                                    color='gray'
                                    size={50}
                                    className='mb-3'
                                />
                                <p className='mb-2 text-sm text-fontColor'>
                                    <span className='font-semibold'>
                                        Click to upload
                                    </span>{" "}
                                    or{" "}
                                    <span className='font-semibold'>
                                        drag and drop
                                    </span>
                                </p>
                                <p className='text-xs text-fontColor'>
                                    SVG, PNG, JPG or GIF (MAX. 800x600px)
                                </p>
                            </div>
                            <input
                            onChange={addImage}
                                type='file'
                                multiple='multiple'
                                className=' w-40 font-primary text-sm text-[#8d8d8d] file:hidden focus:outline-none focus:ring-0 '
                            />
                        </label>

                    </div>

                    <div className=' flex w-[70%] flex-row justify-between justify-self-center md:w-[50%] xl:w-[35%]'>
                        <Button
                        onClick={handleSubmit}
                        fullfilled={t("common.confirm")} />
                        <Button outLinedPrimary={t("common.cancel")} />
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Index;
