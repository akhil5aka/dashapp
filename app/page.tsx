"use client"
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Dashboard from "./Dashboard/page";
import Login from "./components/Login/Login";
import { SessionProvider } from "next-auth/react";
import Sidebar from "./components/Sidebar/Sidebar";


import { useSession } from "next-auth/react";

export default function Home() {

  
  const {data:session} = useSession()
  const drawerWidth = 90;
  return (
    <main >
      <div > 
        
      {session ? (
        <>
         
          <Dashboard />,
        </>
      ) : (
        <Login />
      )}
        {/* { session?(<Sidebar/>):null } */}
 
      </div>
    </main>
  );
}
