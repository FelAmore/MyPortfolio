import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="mt-10 hidden flex-row items-center justify-between sticky bg-white top-0 z-10 tablet:flex">
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleAboutScroll}>About</Button>
            <Button onClick={handleWorkScroll}>My Projects</Button>
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:felise.amore@gmail.com")}>
              Contact
            </Button>
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:felise.amore@gmail.com")}>
              Contact
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
