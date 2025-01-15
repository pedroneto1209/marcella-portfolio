export const metadata = {
  title: 'Marcella Cavalcanti - Portfolio',
  icons: {
    icon: '/src/app/favicon.ico',
  },
  description: 'I am a UX/UI Designer who values efficiency, uniqueness, and creativity, with an approach that combines psychology and design to create impactful and functional user experiences.',
  openGraph: {
    title: 'Marcella Cavalcanti - Portfolio',
    description: 'I am a UX/UI Designer who values efficiency, uniqueness, and creativity, with an approach that combines psychology and design to create impactful and functional user experiences.',
    images: [
      {
        url: 'https://marcella-portfolio.vercel.app/images/image_preview.png', // Use absolute URL
        width: 1200,
        height: 630,
        alt: 'Marcella Cavalcanti Design',
      },
    ],
    url: 'https://marcella-portfolio.vercel.app/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcella Cavalcanti - Portfolio',
    description: 'I am a UX/UI Designer who values efficiency, uniqueness, and creativity, with an approach that combines psychology and design to create impactful and functional user experiences.',
    images: ['https://marcella-portfolio.vercel.app/images/image_preview.png'], // Use absolute URL
  },
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
