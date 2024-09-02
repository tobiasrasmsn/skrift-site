"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
interface FloatingImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
    rotation: number;
    speed?: number;
}

const FloatingImage: React.FC<FloatingImageProps> = ({ src, alt, width, height, className, rotation, speed = 1 }) => {
    const floatingAnimation = {
        y: ["-5%", "5%"],
        rotate: rotation,
        transition: {
            y: {
                duration: 2 / speed,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
            rotate: {
                duration: 0,
                ease: "linear",
            },
        },
    };

    return (
        <motion.div animate={floatingAnimation} className={className}>
            <Image src={src} unoptimized priority width={width} height={height} alt={alt} />
        </motion.div>
    );
};

export default FloatingImage;
