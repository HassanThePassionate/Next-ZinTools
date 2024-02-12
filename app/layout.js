import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zin Tools",
  description: "The Most Best Tools in Google Market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}

        <script
          src="https://kit.fontawesome.com/191f0bfef4.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
