/*import Header from "../components/Header";*/
/*
function Home() {
  return (
    <>
      <Header />
    </>
  );
}
export default Home;
*/

"use client";

import { FC, useState } from "react";
import { ToggleButton } from "../components/ToggleButton";
import { Navigation } from "../components/Navigation";
import "../components/stylenav.module.css";
import "../components/styletog.module.css";

function Header() {
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <ToggleButton
        open={open}
        controls="navigation"
        label="メニューを開きます"
        onClick={toggleFunction} />
      <Navigation id="navigation" open={open} />
    </header>
  );
}
export default Header;
