import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/*TOP NAV*/}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/*Search Bar */}
        <div
          className="hidden sm:flex items-center h-10 rounded-md flex-grow
         cursor-pointer bg-yellow-400 hover:bg-yellow-500"
        >
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink
             rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/*Right container */}
        <div
          className="text-white flex items-center text-xs
         space-x-6 mx-6 whitespace-nowrap"
        >
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign in"}</p>
            <p className="font-extrabold md:text-sm">Conta & Listas</p>
          </div>
          <div onClick={() => router.push("/orders")} className="link">
            <p>Retornos</p>
            <p className="font-extrabold md:text-sm">& Pedidos</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span
              className="absolute top-0 right-0 md:right-10 h-4 w-4
             bg-yellow-400 text-center rounded-full text-black font-bold"
            >
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Carrinho
            </p>
          </div>
        </div>
      </div>
      {/*BOTTOM NAV*/}
      <div
        className="flex items-center bg-amazon_blue-light text-white
       text-sm space-x-3 p-2 pl-6"
      >
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Person</p>
      </div>
    </header>
  );
}

export default Header;
