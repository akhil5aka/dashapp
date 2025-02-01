"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { ThemeContextProvider } from "../theme-context"; 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthLayout>{children}</AuthLayout>
    </SessionProvider>
  );
}

function AuthLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin"); // Redirect to login page if not logged in
    }
  }, [status, router]);

  // if (status === "loading") return <p>Loading...</p>;
  const drawerWidth = 90;
  return (
    <html lang="en">
      <body>
      <ThemeContextProvider>

        <Header />
        {session ? <Sidebar /> : null} {/* Show sidebar only if logged in */}
       
        <main style={{ display: "flex" }}>
        <div style={{ flexGrow: 1, marginLeft: drawerWidth }}> 
          {children}
          </div>
</main>
      </ThemeContextProvider>

      </body>
    </html>
  );
}
