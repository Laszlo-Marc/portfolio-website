import { motion } from "framer-motion";

const ShootingStars = () => {
  const stars = Array.from({ length: 10 }); // More stars for better effect

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, index) => {
        const delay = Math.random() * 5; // Random delay before animation starts
        const duration = 10 + Math.random() * 5; // Slower speed (5-10s)
        const size = Math.random() * 3 + 2; // Random size (2px - 5px)

        return (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full"
            style={{
              width: `${size}px`,
              height: `${size * 20}px`, // Adjusted for tail effect
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 10px 2px rgba(255, 255, 255, 0.8)`,
              filter: `blur(2px)`,
              opacity: 0.8,
            }}
            initial={{ opacity: 0, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, 150], // Travels more distance
              y: [0, 150],
              scale: [1, 1.2, 1], // Subtle scale effect
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: [0.4, 0, 0.2, 1], // Custom bezier easing for smooth movement
            }}
          />
        );
      })}
    </div>
  );
};

export default ShootingStars;
