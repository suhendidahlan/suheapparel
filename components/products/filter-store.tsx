"use client";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiXSquare } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const FilterStore = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="px-2 py-6 flex justify-end items-center bg-white text-xs md:justify-around w-full md:m-6">
        <div className="mx-4 md:hidden" onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <Link href="#">
              <FiX size={25} />
            </Link>
          ) : (
            <Link href="#">
              <CiFilter size={25} />
            </Link>
          )}
        </div>
        <p className="pr-4" onClick={() => setNavbar(!navbar)}>
          Filter Products
        </p>
        <div className="hidden md:flex md:justify-around md:text-lg md:m-4">
          <Link href={`/shop/jersey`} className="mx-4 hover:text-slate-400">
            JERSEY
          </Link>
          <Link href={`/shop/pants`} className="mx-4 hover:text-slate-400">
            PANTS
          </Link>
          <Link href={`/shop/tshirt`} className="mx-4 hover:text-slate-400">
            T-SHIRT
          </Link>
          <Link href={`/shop/jacket`} className="mx-4 hover:text-slate-400">
            JACKET
          </Link>
          <Link href={`/shop/equipments`} className="mx-4 hover:text-slate-400">
            EQUIPMENTS
          </Link>
          <Link
            href={`/shop/accessories`}
            className="mx-4 hover:text-slate-400"
          >
            ACCESSORIES
          </Link>
        </div>
      </nav>
      {navbar ? (
        <div className="px-8 py-4 bg-white h-screen w-screen duration-200 ease-out fixed z-30">
          <ul className="my-4 flex justify-between">
            <Link
              href={`/shop/jersey`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              JERSEY
            </Link>
            <Link
              href={`/shop/jersey`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/shop/pants`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              PANTS
            </Link>
            <Link
              href={`/shop/pants`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/shop/tshirt`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              T-SHIRT
            </Link>
            <Link
              href={`/shop/tshirt`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/shop/jacket`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              JACKET
            </Link>
            <Link
              href={`/shop/jacket`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              <FiArrowRight className="opacity-50" />
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/shop/equipments`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              EQUIPMENTS
            </Link>
          </ul>
          <ul className="my-4 flex justify-between">
            <Link
              href={`/shop/accessories`}
              className=""
              onClick={() => setNavbar(!navbar)}
            >
              ACCESSORIES
            </Link>
          </ul>
        </div>
      ) : (
        <div className="px-8 py-4 -translate-x-full duration-200 ease-in bg-white h-screen fixed z-30">
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              JERSEY
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              PANTS
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              T-SHIRT
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              JACKET
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              EQUIPMENTS
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
          <ul className="my-4 flex justify-between">
            <Link href="" className="">
              ACCESSORIES
            </Link>
            <FiArrowRight className="opacity-50" />
          </ul>
        </div>
      )}
    </>
  );
};

export default FilterStore;