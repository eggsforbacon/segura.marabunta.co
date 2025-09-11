"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const InteractiveLogo = () => {
  return (
    <Link href="/" passHref>
      <motion.div
        whileHover={{ scale: 1.1, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer"
      >
        <Image
          src="/images/logo-footer.png"
          alt="Logo de SegurApp"
          width={100}
          height={45}
          priority
        />
      </motion.div>
    </Link>
  );
};
