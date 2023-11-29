import Image from "next/image";
import variables from "../../app/variables.module.scss";
import logo from "../../assets/images/Creativise Logo SVG 2.png";

const Navbar = () => {
  return (
    <>
      <header className={variables.header}>
        
        <div className={variables.fullNavMain}>
          <div>
            <a href="/">
              <Image src={logo} width={100} height={50} alt="logo" />
            </a>
          </div>
          <div className={variables.mainMenu}>
            <menu className="">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Products</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Blogs</a>
                </li>
              </ul>
            </menu>

            <div className={variables.navLastDiv}>
              <ul>
                <li>
                  {" "}
                  <a href="/" className={variables.navLogin}>
                    Login
                  </a>{" "}
                </li>
                <li className={variables.bullet}> <div></div></li>
                <li>
                <a href="/" className={variables.navSignup}>
                  SignUp
                </a>
              </li>
              </ul>

              
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
