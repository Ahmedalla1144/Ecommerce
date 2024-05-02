import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="bg-white">
      <div className="w-full flex gap-5 justify-between items-center px-5 py-2">
        <div className="text-red-800 text-2xl font-semibold">
          <Link href={`/`}>My company</Link>
        </div>

        <div>
          <i className="fa fa-shopping-basket" aria-hidden></i>
          <span className="text-red-800 text-xl font-semibold ml-2">$320</span>
        </div>
      </div>
    </nav>
  );
}
