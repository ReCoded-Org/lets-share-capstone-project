import * as React from "react";
import Header from "@/components/layout/Header/Header";
export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
