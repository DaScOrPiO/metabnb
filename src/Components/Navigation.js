import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import IconContainer from "./IconContainer";

export default function Navigation() {
  return (
    <div className="container">
      <IconContainer />
      <DesktopNav />
      <MobileNav />
    </div>
  );
}
