import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import NextLogo from './em.svg'
import styled from 'styled-components'



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

const myDivStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};

const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  
  @media (min-width: 768px) {
    max-width: 100px;
    margin-left: 10%;
  }
  @media (min-width: 268px) {
    max-width: 200px;
    margin-left: 10%;
  
  }



  @media (min-width: 1000px) {
    
   max-width: 300px;
   margin-left: 10%;
    
  }
`;

const LargeTitle = () => (
  
    
 <Page><div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
  <NextLogo />
  <hr />
</div></Page>

      
    
  
);



const SmallTitle = () => (
  <h1>
    <Link href="/">
    
            <a className={clsx(
          "text-2xl font-black text-black no-underline font-display",
          "dark:text-white"
        )}>
              ← home
            </a>
          </Link>
  </h1>
);
