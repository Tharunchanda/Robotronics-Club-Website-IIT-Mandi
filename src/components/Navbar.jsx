import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Using react-router-dom for navigation

const navItems = [
    {
      name: "The Club",
      link: "/AboutUS",
    },
    {
      name: "Events",
      link: "/Events",
    },
    {
        name: "Projects",
        link: "/Projects",
    },
    {
        name: "Members",
        link: "/Members",
    },
    {
        name: "Gallery",
        link: "/Gallery",
    }
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        // Always show the navbar when at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Hide navbar when scrolling down
        setIsVisible(true);
      } else {
        // Show navbar when scrolling up
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`z-[980] fixed top-0 h-[60px] left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg transition-transform duration-300 ${
        isVisible ? "sm:translate-y-0" : "sm:-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-2">

        {/* Navbar Links */}
        <nav className="hidden sm:flex flex-row items-center space-x-6">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className="relative group p-2"
              onMouseEnter={() => item.subItems && toggleDropdown(index)}
              onMouseLeave={() => item.subItems && toggleDropdown(null)}
            >
              <div className="flex">
                <a
                  href={item.link}
                  className="text-base text-white hover:text-yellow-300 transition"
                >
                  {item.name}
                </a>
                {item.subItems && (
                  <img
                    src="/icons/custom/dropdown.svg"
                    alt="Arrow Down"
                    width={20}
                    height={20}
                    style={{ filter: "invert(1)" }}
                  />
                )}
              </div>

              {/* Dropdown Menu */}
              {item.subItems && dropdownOpen === index && (
                <div className="border-2 dark:border-white/[0.2] absolute top-full left-0 text-white rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border-b border-white/20 transition-transform duration-300">
                  {item.subItems.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.link}
                      className="block px-4 py-2 hover:text-yellow-300 transition"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden bg-transparent border-none p-0 m-0"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 w-full bg-white/10 backdrop-blur-md p-4 shadow-lg border-t border-white/20">
          <div className="flex flex-col space-y-4 text-white">
            {navItems.map((item, i) => (
              <Link key={i} to={item.link} className="text-2xl">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
