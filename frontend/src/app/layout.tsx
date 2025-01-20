"use client";

import "./globals.css";
import ChakraWrapper from "./context/ChakraWrapper";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <ChakraWrapper>{children}</ChakraWrapper>
        </body>
      </UserProvider>
    </html>
  );
}
