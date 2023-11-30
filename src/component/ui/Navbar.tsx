import Image from "next/image";
import variables from "../../app/variables.module.scss";
import logo from "../../assets/images/Creativise Logo SVG 2.png";
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  return (
    <>
      <header className={variables.header}>
        
        <div className={variables.fullNavMain}>
          <div>
            <a href="/">
              <Image src={logo} width={150} height={50} alt="logo" />
            </a>
          </div>
          <div className={ isMobile ? variables.menuMobile : variables.mainMenu} onClick={() => setIsMobile(false)}>
            <menu className="">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </menu>

            <div className={variables.navLastDiv}>
              <ul>
                <li>
                  {" "}
                  <a href="#" className={variables.navLogin}>
                    Login
                  </a>{" "}
                </li>
                <li className={variables.bullet}> <div></div></li>
                <li>
                <a href="#" className={variables.navSignup}>
                  SignUp
                </a>
              </li>
              </ul>

              
            </div>
          </div>
          <div className={variables.closeBtnDiv}>
          <button className={variables.closeBtn} onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <RxCross1 /> : <RxHamburgerMenu />}
                  </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
