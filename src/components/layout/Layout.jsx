import * as React from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
