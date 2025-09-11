"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const navItems = [
  { label: "INICIO", href: "/" },
  { label: "PROTOCOLOS", href: "/protocols" },
  { label: "MAPA", href: "/map" },
  { label: "COMITÉ DE EMERGENCIAS", href: "/brigade" },
  { label: "CALENDARIO", href: "/drills-calendar" },
   { label: "VIDA SALUDABLE", href: "/vida-saludable" },
    { label: "MANEJO DE ESTRÉS", href: "/manejo-estres" },
  { label: "PAUSA ACTIVA ", href: "/pausa-activa" },
 
 
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const listVariants: Variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="bg-[#129CBF] w-full flex justify-center py-3">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo Seguridad Laboral"
            width={400}
            height={400}
            priority
          />
        </Link>
      </div>

      <div className="container mx-auto h-16 flex justify-center items-center">
        <nav className="hidden md:flex items-center space-x-9">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-cyan-400 transition-colors ${isActive ? "font-bold" : "font-light"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none bg-transparent border-none"
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                animate={isOpen ? "open" : "closed"}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                transition={{ duration: 0.1 }}
                animate={isOpen ? "open" : "closed"}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
                animate={isOpen ? "open" : "closed"}
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-9/12 mx-auto flex justify-center items-center border-b border-gray-200"></div>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={listVariants}
        className="md:hidden bg-black overflow-hidden"
      >
        <nav className="flex flex-col space-y-2 p-4 pt-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div key={item.href} variants={itemVariants}>
                <Link
                  href={item.href}
                  className={`block text-center text-lg rounded-md p-2 transition-colors ${
                    isActive ? "text-cyan-400 font-bold" : "text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
