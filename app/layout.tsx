import "./globals.css";
import { EmailProvider } from "./lib/context/EmailContext";
import { PhoneProvider } from "./lib/context/PhoneContext";
import { QueryProvider } from "./lib/loginservices/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="">
        <QueryProvider>
          <EmailProvider>
            <PhoneProvider>
            {children}
            </PhoneProvider>
          </EmailProvider>
        </QueryProvider>
      </body>
    </html>
  );
}