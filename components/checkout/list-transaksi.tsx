"use client";

import type { trsingle } from "@prisma/client";
import { ButtonTransaksi, DeleteButton } from "./button-transaksi";
import { getDataById } from "@/components/checkout/data";
import { useState } from "react";
import Link from "next/link";

let rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

const DaftarRiwayatTrans = ({ data }: { data: trsingle }) => {
  return (
    <div className="">
      <div className="mx-4 my-2">
        <div className="text-lg font-bold my-3 mx-6 border-b">
          Daftar Riwayat Transaksi
        </div>
        {data.map((list: trsingle) => (
          <div className="" key={list.id}>
            <div className="w-full m-1 flex">
              <p className="text-sm p-1 mr-2">1</p>
              <div className="flex justify-between w-full">
                <div className="">
                  <div className="text-[15px] font-medium">
                    {list.nama_product}
                  </div>
                  <div className="m-1 text-sm font-medium text-slate-500">
                    {rupiah.format(list.total)}
                  </div>
                  <div className="text-[11px] text-slate-500 italic">
                    No Transaksi : {list.id}
                  </div>
                  <div className="text-[11px] text-slate-500 italic">
                    Status : {list.status_kirim}
                  </div>
                </div>
                <Link
                  href={`/products/checkout/transaksi/${list.id}`}
                  className="text-[11px] text-slate-500 italic self-start p-4 underline"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
            {list.status_kirim === "Pembayaran Berhasil" ? (
              <></>
            ) : (
              <div className="flex justify-around mx-2 my-4">
                <DeleteButton id={list.id} />
                <ButtonTransaksi id={list} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarRiwayatTrans;