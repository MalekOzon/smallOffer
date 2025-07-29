import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { UrlProvider } from "../lib/context/URLProvider";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
      <UrlProvider>
        {children}
      </UrlProvider>
      </main>
      <Footer />
    </div>
  );
} 