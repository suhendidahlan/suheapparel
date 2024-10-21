import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer1 from "@/components/footer/footer1";
import { auth } from "@/auth";
import { getListProducts } from "@/components/chart/data";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Suhe Apparel",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const role: any = session?.user.role;
  const products: any = await getListProducts(session?.user.id);
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar data={session} products={products} role={role} />
        <br className="mt-14" />
        {children}
        <Footer1 />
      </body>
    </html>
  );
}