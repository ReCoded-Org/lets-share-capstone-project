import * as React from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
    return (
        <div className='bg-[#f3f3f3]'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
