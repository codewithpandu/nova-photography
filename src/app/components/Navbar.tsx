"use client";
import Link from "next/link";
import { Pivot as Hamburger } from "hamburger-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const navlinks = [
  {
    name: "Work",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Navlink({ name, href }: { name: string; href: string }) {
  return <Link href={href}>{name}</Link>;
}

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="w-full max-w-7xl mx-auto bg-white ">
      <div className="flex justify-between items-center p-4">
        <Link href="/">
          <h2 className="text-3xl">Nova Studio</h2>
        </Link>

        <ul
          className={cn(
            "absolute top-0 left-0 h-full z-99 bg-black text-white w-2/3 transition-all duration-300 ease-in-out md:static md:bg-transparent md:text-black md:w-auto md:flex md:items-center",
            isOpen ? "translate-x-0" : "translate-x-[-120%] md:translate-x-0",
          )}
        >
          <li
            className={cn(
              "flex flex-col justify-center items-center h-full gap-8 text-xl md:flex-row md:gap-4",
            )}
          >
            {navlinks.map((link) => (
              <Navlink key={link.href} name={link.name} href={link.href} />
            ))}
          </li>
        </ul>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </nav>
  );
}
