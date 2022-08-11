import * as React from "react";

import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function NotFoundPage() {
    return <Layout>
        <div
  className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
   
  "
>
  <div className="px-40 py-16 bg-white rounded-md bg-[#dddddda2] shadow-2xl">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[#33956D] text-9xl">404</h1>

      <h6 className="mb-2 text-2xl font-bold text-center text-primary md:text-3xl">
        <span className="text-[#ff0000b3]">Oops!</span> Page not found
      </h6>

      <p className="mb-8 text-center text-gray-500 md:text-lg">
        The page you&apos;re looking for isn&apos;t exist.
      </p>

      <Link href="/">
      <a className="px-6 py-2 text-sm font-semibold rounded-md text-[#1a1a58d5] bg-[#0000ff55]" >Go home</a>  
    </Link>
    </div>
  </div>
</div>
    </Layout>;
}
