"use client";
import Banner from "@/component/ui/Banner";
import Creativity from "@/component/ui/Creativity";
import Footer from "@/component/ui/Footer";
import Freedom from "@/component/ui/Freedom";
import Navbar from "@/component/ui/Navbar";
import { useEffect, useState } from "react";
import variables from "./variables.module.scss";


export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
      <>
        <div>
          <Navbar />
         
       
        
       
          

          <Banner />
          <Creativity />

          <Freedom />
          
          <Footer />
        </div>
      </>
    </div>
  );
}
