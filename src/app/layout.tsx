import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const SITE_URL = "https://www.thiqa.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Thiqa - Learining Webiste",
    template: "%s | thiqa",
  },
  // description:
  //   "thiqa is a leading technology company specializing in software development, AI solutions, social media management, and digital transformation. We deliver innovative tech solutions for businesses worldwide. صديم - شركة رائدة في تطوير البرمجيات والذكاء الاصطناعي",
  // keywords: [
  //   // Technology Keywords
  //   "software development",
  //   "artificial intelligence",
  //   "AI solutions",
  //   "tech company",
  //   "digital transformation",
  //   "social media management",
  //   "web development",
  //   "mobile apps",
  //   // Regional Keywords
  //   "software company Saudi Arabia",
  //   "tech solutions USA",
  //   // Arabic Keywords
  //   "تطوير برمجيات",
  //   "ذكاء اصطناعي",
  //   "شركة تقنية",
  //   "تطوير تطبيقات",
  //   "إدارة السوشيال ميديا",
  //   // Brand Keywords
  //   "صديم",
  //   "thiqa",
  //   "سديم",
  //   "شركة سديم",
  //   "شركة سديم للبرمجة",
  //   "شركة برمجة",
  // ],
  // authors: [{ name: "thiqa" }],
  // creator: "thiqa",
  // publisher: "thiqa",
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  // alternates: {
  //   canonical: "/",
  //   languages: {
  //     "en-US": "/",
  //     "ar-SA": "/",
  //   },
  // },
  icons: {
    icon: [
      { url: "./favicon-logo.svg" },
      { url: "/favicon-logo.svg", sizes: "16x16", type: "image/png" },
      { url: "./favicon-logo.svg", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "./favicon-logo.svg",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: "thiqa - Innovative Technology Solutions",
    description:
      "Leading technology company providing software development, AI solutions, and digital transformation services globally. شركة صديم - حلول تقنية مبتكرة",
    url: SITE_URL,
    siteName: "thiqa",
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: "thiqa Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thiqa - Technology & AI Solutions",
    description:
      "Innovative technology solutions for modern businesses. Software development, AI, and digital transformation services.",
    creator: "@thiqa",
    images: [`${SITE_URL}/logo.png`],
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
  verification: {
    google: "Rv7G860nmGwM4StHgRy63pPfKuyB2aWPGOKNMBUpXOc",
  },
  category: "technology",
};

// Google Tag Manager script type
type GTMProps = {
  gtmId: string;
};

// Google Tag Manager Component
const GoogleTagManager = ({ gtmId }: GTMProps) => {
  const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');`;

  const gtmNoscript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
      <noscript dangerouslySetInnerHTML={{ __html: gtmNoscript }} />
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM_ID = "GTM-59GV52ZJ";

  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="ar" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="canonical" href={SITE_URL} />

        <GoogleTagManager gtmId={GTM_ID} />
        <script
          defer
          type="text/javascript"
          src="https://www.thiqatutoring.com/im_livechat/loader/1"
        ></script>
        <script
          defer
          type="text/javascript"
          src="https://www.thiqatutoring.com/im_livechat/assets_embed.js"
        ></script>
      </head>
      <body className="font-poppins bg-blue_gray rtl:font-almarai  ">
        <Navbar />
        <main className="mt-24 pt-2 ">{children}</main>
        <Footer />

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "14px", // 🔹 حجم الخط أصغر
              color: "#374151", // 🔹 لون نص محايد (gray-700 من Tailwind)
            },
          }}
        />
      </body>
    </html>
  );
}
