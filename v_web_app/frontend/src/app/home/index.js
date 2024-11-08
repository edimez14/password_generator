'use client';
import { useState, useEffect } from "react";

import { AuthContext } from "@/app/utils/AuthContext";
import LoadingPage from "@/app/views/LoadingPage";
import Footer from "@/app/components/Footer";


import NavBar from "./components/NavBar";
import TrueAuthNavBar from "./components/TrueAuthNavBar";

import Content from "./views/Content";
import TrueAuthContent from "./views/TrueAuthContent";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const isAuthenticated = AuthContext();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {
        loading ? <LoadingPage /> : (
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-1 pb-2 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]" >
            {
              isAuthenticated ? (
                <>
                  <TrueAuthNavBar />
                  <TrueAuthContent />
                </>
              ) : (
                <>
                  <NavBar />
                  <Content />
                </>
              )
            }
            <Footer />
          </div >
        )
      }
    </>
  );
}
