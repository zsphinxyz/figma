'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({ children, style, left=true, animate=true }: {children: React.ReactNode, style?: string, left?: boolean, animate?: boolean}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
  
    return (
      <motion.section ref={ref} className={style}>
        <div
          style={{
            transform: animate ? isInView ? "none" : left ? "translateX(-200px)" : "translateX(200px) " : 'none',
            opacity: animate ? isInView ? 1 : 0 : 1,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </div>
      </motion.section>
    );
  }