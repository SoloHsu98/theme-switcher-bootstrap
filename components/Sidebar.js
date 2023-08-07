import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <ul>
        <li>
          <Link href="/link1" className="linkStyle">
            Link 1
          </Link>
        </li>
        <li>
          <Link href="/link2" className="linkStyle">
            Link 2
          </Link>
        </li>
        <li>
          <Link href="/settings" className="linkStyle">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
