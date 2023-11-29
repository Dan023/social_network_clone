import type { Metadata } from "next";
import { Providers } from "./providers";
import { Navbar } from "@components/Navbar";
import { ColorModeScript } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Social Network",
  description: "A social media app",
  creator: "Dan023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ColorModeScript />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
