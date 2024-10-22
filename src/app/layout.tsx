export const metadata = {
  title: 'Marcella Cavalcanti - Portfolio',
  description: 'I am an UX/UI Designer who values efficiency, uniqueness, and creativity, with an approach that combines psychology and design to create impactful and functional user experiences.',
  openGraph: {
    title: 'Marcella Cavalcanti - Portfolio',
    description: 'I am an UX/UI Designer who values efficiency, uniqueness, and creativity, with an approach that combines psychology and design to create impactful and functional user experiences.',
    images: [
      {
        url: '/images/image_preview.png',
        width: 1800,
        height: 840,
        alt: 'Marcella Cavalcanti Design',
      },
    ],
    url: 'https://marcella-portfolio.vercel.app/',
    type: 'website',
  }
};

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
