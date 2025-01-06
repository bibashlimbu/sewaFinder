import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./_components/Footer";
import { BookingProvider } from "./_components/BookingContext";

export const metadata = {
  title: {
    template: "%s|SewaFinder",
    default: "SewaFinder",
  },

  description: "online home service provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} sm:mx-0 mx-4 `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            <BookingProvider> {children}</BookingProvider>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
