import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <header></header>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </>
  );
}
