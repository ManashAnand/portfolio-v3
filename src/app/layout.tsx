import type { Metadata } from "next";
import {Inter_Tight} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter_Tight({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Manash Anand',
  description: 'I build products that solve real problems. Available for new opportunities.',
  openGraph: {
    url: 'https://kartik017.vercel.app/',
    siteName: 'Kartik Labhshetwar Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 630,
      alt: 'Manash Anand  - Portfolio'
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
        <script
          src="https://script.refix.ai/script.min.js"
          type="text/javascript"
          data-refix-token="c9a48825-4062-464a-941d-c958ddf21a96"
          defer
        ></script>
      </body>
    </html>
  );
}
