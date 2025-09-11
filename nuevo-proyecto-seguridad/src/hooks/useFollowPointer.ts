"use client";

import { useEffect } from "react";
import { useSpring, useMotionValue } from "framer-motion";

const springConfig = { damping: 3, stiffness: 50, restDelta: 0.001 };

export function useFollowPointer() {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);

  const x = useSpring(xPoint, springConfig);
  const y = useSpring(yPoint, springConfig);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      xPoint.set(clientX);
      yPoint.set(clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [xPoint, yPoint]);

  return { x, y };
}
