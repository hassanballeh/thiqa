"use client";

import { useState, useEffect, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import SelectLanguage from "./SelectLanguage";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import SelectCountry from "./SelectCountry";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tutoring Plan", href: "/tutoring-plan" },
  {
    name: "Education Service",
    href: "/academic",
    children: [
      { name: "Academic Consultation", href: "/academic" },
      { name: "Shadow Teacher", href: "/shadow-teacher" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
  {
    name: "Become a Tutor",
    href: "/become-1",
    children: [
      { name: "How To", href: "/become-1" },
      { name: "Benefits & Earnings", href: "/become-2" },
      { name: "Sign Up", href: "/under-develop" },
    ],
  },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (
    itemHref: string,
    children?: { name: string; href: string }[]
  ) => {
    if (pathname === itemHref) return true;
    if (children?.some((child) => pathname === child.href)) return true;
    return false;
  };

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen((prev) => ({ ...prev, [name]: true }));
  };

  const handleMouseLeave = (name: string) => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen((prev) => ({ ...prev, [name]: false }));
    }, 200);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-sm shadow-sm py-2" : "py-6"
      }`}
    >
      <nav
        aria-label="Global"
        className="flex mx-auto w-full items-center justify-between px-4 sm:px-6 lg:px-20"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 gap-1 flex items-center">
            <img
              alt="logo"
              src="/logo.svg"
              className="h-8 md:h-10 w-auto 2xl:h-12"
            />
          </Link>
        </div>

        {/* Burger Menu Button */}
        <div className="flex xl:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              scrolled ? "text-gray-700" : "text-gray1"
            }`}
          >
            <Bars3Icon aria-hidden="true" className="size-8" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex lg:gap-x-4 2xl:gap-x-8 items-center">
          {navigation.map((item) => {
            const isDropdown = !!item.children;
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => isDropdown && handleMouseEnter(item.name)}
                onMouseLeave={() => isDropdown && handleMouseLeave(item.name)}
              >
                <Link
                  href={item.href}
                  className={`text-xs 2xl:text-sm transition-colors flex items-center gap-1 ${
                    isActive(item.href, item.children)
                      ? "text-primary"
                      : scrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-gray1"
                  }`}
                >
                  {item.name}
                  {isDropdown && (
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        dropdownOpen[item.name] ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {isDropdown && dropdownOpen[item.name] && (
                  <div
                    className="absolute top-full mt-1 px-2 -left-3 py-5 w-44 md:w-[calc(100%+3rem)] md:-left-4 md:pl-4 md:pr-0 space-y-3 bg-white shadow-md rounded-xl z-50 "
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={() => handleMouseLeave(item.name)}
                  >
                    {item.children?.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() =>
                          setDropdownOpen((prev) => ({
                            ...prev,
                            [item.name]: false,
                          }))
                        }
                        className="block text-xs md:text-[13px] font-medium text-gray1 hover:text-primary"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden xl:flex lg:flex-1 lg:justify-end items-center gap-2">
          <Link
            href="/contact"
            className="rounded-3xl px-2 2xl:px-5 text-xs lg:text-sm font-semibold py-1 border border-primary text-primary hover:text-white hover:bg-primary/70"
          >
            Sign Up
          </Link>
          <Link
            href="/contact"
            className="bg-primary rounded-3xl px-2 2xl:px-5 text-xs lg:text-sm font-semibold py-1 text-white hover:bg-primary/70"
          >
            Log In
          </Link>
          <SelectCountry />
          {/* <SelectLanguage /> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="xl:hidden"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Panel */}
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white shadow-lg">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                className="h-full px-6 py-6 flex flex-col overflow-y-auto"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5 flex items-center gap-1"
                  >
                    <img alt="logo" src="/logo.svg" className="h-10 w-auto" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>

                {/* Navigation */}
                <div className="mt-6 flex-1">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block rounded-lg px-3 py-2 text-xs font-medium transition ${
                            isActive(item.href, item.children)
                              ? "text-primary bg-gray-100"
                              : "text-gray1 hover:bg-gray-50"
                          }`}
                        >
                          {item.name}
                        </Link>
                        {/* Show children in mobile */}
                        {item.children && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block rounded-lg px-3 py-1 text-xs transition ${
                                  pathname === child.href
                                    ? "text-primary bg-gray-100"
                                    : "text-gray1 hover:bg-gray-50"
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="py-6 flex flex-col gap-4">
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-32 rounded-lg px-2 md:px-5 text-sm font-semibold py-2 border border-primary text-primary hover:text-white hover:bg-primary/70"
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="bg-primary w-32 rounded-lg px-2 md:px-5 text-sm font-semibold py-2 text-white hover:bg-primary/70"
                    >
                      Log In
                    </Link>
                    <SelectCountry />
                    {/* <SelectLanguage /> */}
                  </div>
                </div>
              </motion.div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
