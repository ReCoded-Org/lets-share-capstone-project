import React, { useState } from "react";
import { collection, getDocs, deleteDoc, doc, query } from "firebase/firestore";
import { auth, db } from "firebaseConfig";
import { useEffect } from "react";
import { useAuth } from "context/AuthContext";
import { useCollection } from "react-firebase-hooks/firestore";

function Hhh() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            let itemss = [];
            const querySnapshot = await getDocs(collection(db, "items"));
            querySnapshot.forEach((doc) => {
                itemss.push(doc.data().user);
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });

            let items = Object.keys(itemss);
            console.log(itemss);

            const paths = items.map((item) => {
                return {
                    params: { id: item.toString() },
                };
            });
            return {
                paths: paths,
                fallback: false,
            };
        };
        getItems();
    }, []);

    return <div>hhh</div>;
}

export default Hhh;
