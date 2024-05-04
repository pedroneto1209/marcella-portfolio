"use client";

import HeaderContainer from "@/containers/header/HeaderContainer";
import "../styles/globals.css";
import { GlobalProvider } from "@/hooks/GlobalContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main>
          <GlobalProvider>
            <HeaderContainer />
            {children}
          </GlobalProvider>
        </main>
      </body>
    </html>
  );
}
