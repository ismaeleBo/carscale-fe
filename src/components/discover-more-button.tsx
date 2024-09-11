"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DiscoverMoreButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <Button
        variant="outline"
        className="bg-white/10 text-white hover:text-inherit border-white/20 hover:bg-white/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Discover More
        <motion.div
          animate={isHovered ? { y: [0, 5, 0] } : { y: 0 }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="ml-2 h-4 w-4" />
        </motion.div>
      </Button>
    </div>
  );
}
