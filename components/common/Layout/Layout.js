import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import NextLogo from './em.svg'


export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen dark:bg-gray-700 dark:text-white">
      <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
        <Header />
        <main>{children}</main>
        <footer className="text-lg font-light">
          © {new Date().getFullYear()}, powered by Winchester Typography.
        </footer>
      </div>
    </div>
  );
}

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isRoot = pathname === "/";
  const isDarkMode = resolvedTheme === "dark";

  return (
    
   
      <div>
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      </div>
    
    
  );
};

const LargeTitle = () => (
  
    
 <div className="logoo">
  <NextLogo height="100" />
  <hr />
</div>

      
    
  
);

const SmallTitle = () => (
  <h1>
    <Link href="/">
    
            <a className="text-lg font-bold">
              ← home
            </a>
          </Link>
  </h1>
);
