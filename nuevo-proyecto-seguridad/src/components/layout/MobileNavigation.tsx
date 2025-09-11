import { motion, Variants } from "framer-motion";
import Link from "next/link";

const navVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MobileNavigationProps {
  navItems: { label: string; href: string }[];
  pathname: string;
  toggle: () => void;
}

export const MobileNavigation = ({
  navItems,
  pathname,
  toggle,
}: MobileNavigationProps) => (
  <motion.ul
    variants={navVariants}
    className="absolute top-24 left-0 w-full px-6 z-50"
  >
    {navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <motion.li
          key={item.href}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mb-5"
        >
          <Link
            href={item.href}
            onClick={toggle}
            className={`block text-3xl font-semibold transition-colors ${
              isActive ? "text-cyan-400" : "text-gray-200"
            }`}
          >
            {item.label}
          </Link>
        </motion.li>
      );
    })}
  </motion.ul>
);
