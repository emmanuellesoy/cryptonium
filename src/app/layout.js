import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import UserProvider from "@/context/user-provider";
import FavoritesProvider from "@/context/favorites-provider";

export const metadata = {
  title: "Cryptonium",
  description: "The Crypto Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </UserProvider>
      </body>
    </html>
  );
}
