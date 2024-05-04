import HeaderContainer from "@/containers/header/HeaderContainer";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main>
          <HeaderContainer />
          {children}
        </main>
      </body>
    </html>
  );
}
