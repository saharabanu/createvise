"use client";
import Banner from "@/component/ui/Banner";
import Creativity from "@/component/ui/Creativity";
import Footer from "@/component/ui/Footer";
import Freedom from "@/component/ui/Freedom";
import Navbar from "@/component/ui/Navbar";
import { useEffect, useState } from "react";
import variables from "./variables.module.scss";
import { useSpring, animated } from 'react-spring';



export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navbarProps = useSpring({
    transform: `translateY(${offsetY * 0.2}px)`,
  });

  const bannerProps = useSpring({
    transform: `translateY(${offsetY * 0.3}px)`,
  });

  const creativityProps = useSpring({
    transform: `translateY(${offsetY * 0.1}px)`,
  });

  // const freedomProps = useSpring({
  //   transform: `translateY(${offsetY * 0.4}px)`,
  // });

  const footerProps = useSpring({
    transform: `translateY(0)`,
  });

  return (
    <div>
      <animated.div style={navbarProps}>
        <Navbar />
      </animated.div>
      <animated.div style={bannerProps}>
        <Banner />
      </animated.div>
      <animated.div style={creativityProps}>
        <Creativity />
      </animated.div>
      <Freedom />
      {/* <animated.div style={freedomProps}>
        <Freedom />
      </animated.div> */}
      <animated.div style={footerProps} >
        <Footer />
      </animated.div>
    </div>
  );
}
