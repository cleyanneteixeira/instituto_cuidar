import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  const metadataBase = host ? new URL(`${protocol}://${host}`) : undefined;

  return {
    title: {
      default: "Instituto Cuidar",
      template: "%s | Instituto Cuidar",
    },
    description:
      "Site institucional do Instituto Cuidar com informacoes sobre historia, projetos e contato.",
    metadataBase,
    openGraph: {
      title: "Instituto Cuidar",
      description:
        "Cultura, integracao social, desenvolvimento e responsabilidade para transformar comunidades em Sao Luis - MA.",
      type: "website",
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Instituto Cuidar",
      description:
        "Projetos culturais e socioeducativos que acolhem, formam e fortalecem comunidades.",
      images: ["/og.png"],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
