import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Loader from "@/components/layout/Loader";
import CookieConsent from "@/components/layout/CookieConsent";
import GoogleAnalyticsWrapper from "@/components/layout/GoogleAnalyticsWrapper";
import "./globals.css";

export const metadata = {
  title: {
    default: "E-O Samson & Partners | Excellence in Advocacy",
    template: "%s | E-O Samson & Partners",
  },
  description: "E-O Samson & Partners is a premier, full-service law firm combining profound legal expertise with strategic foresight to safeguard your personal, corporate, and constitutional rights.",
  metadataBase: new URL("https://eosamsonandpartners.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "E-O Samson & Partners | Excellence in Advocacy",
    description: "Excellence in Advocacy. Integrity in Service. A premier law firm providing strategic legal counsel for individuals, corporations, and public entities.",
    url: "https://eosamsonandpartners.vercel.app",
    siteName: "E-O Samson & Partners",
    images: [
      {
        url: "https://eosamsonandpartners.vercel.app/logo.jpg",
        width: 1200,
        height: 630,
        alt: "E-O Samson & Partners Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-O Samson & Partners | Excellence in Advocacy",
    description: "Excellence in Advocacy. Integrity in Service. A premier law firm providing strategic legal counsel.",
    images: ["https://eosamsonandpartners.vercel.app/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Recursive:wght@300..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <GoogleAnalyticsWrapper gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <Loader />
        <CookieConsent />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}