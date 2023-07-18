import "@styles/globals.css";

import Nav from "@components/Nav";
import { Roboto } from "next/font/google";
import AuthProvider from "@components/Context/AuthProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Jobfinder",
  description: "Let The Job Find You",
};

export default function RootLayout({ children }) {
  const appClasses = `app ${roboto.className}`;

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="main">
            <div className="gradient" />
          </div>

          <div className={appClasses}>
            <Nav />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
