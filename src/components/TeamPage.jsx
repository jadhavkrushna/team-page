import React from "react";
import { motion as Motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import "./TeamPage.css";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Visionary leader with 10+ years of experience",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Tech enthusiast driving innovation",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Lead Designer",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Creative mind crafting beautiful experiences",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Strategic thinker connecting brands with people",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 5,
    name: "David Brown",
    role: "Senior Developer",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Code architect building scalable solutions",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 6,
    name: "Emily Davis",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bio: "Product visionary turning ideas into reality",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  },
];

const TeamPage = () => {
  // Generate fireworks particles
  const generateFireworks = () => {
    const fireworks = [];
    const colors = [
      "#ff6b6b", // Red
      "#4ecdc4", // Cyan
      "#ffe66d", // Yellow
      "#a8dadc", // Light blue
      "#ff9ff3", // Pink
      "#feca57", // Orange
      "#48dbfb", // Sky blue
      "#b19cd9", // Purple
      "#77dd77", // Green
      "#f1faee", // White
    ];

    for (let i = 0; i < 8; i++) {
      // 8 fireworks bursts
      const x = Math.random() * 100; // Random X position
      const y = Math.random() * 80 + 10; // Random Y position (10-90%)
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 5; // Stagger the fireworks
      const particleCount = 30; // Particles per firework

      // Create particles for each firework
      const particles = [];
      for (let j = 0; j < particleCount; j++) {
        const angle = (j / particleCount) * 360;
        particles.push({
          id: `${i}-${j}`,
          angle,
          distance: Math.random() * 80 + 40, // 40-120px spread
          color: color,
        });
      }

      fireworks.push({
        id: i,
        x,
        y,
        color,
        delay,
        particles,
        duration: Math.random() * 1 + 2, // 2-3 seconds
      });
    }
    return fireworks;
  };

  // Generate stable glowing circles (stars/planets)
  const generateGalaxyCircles = () => {
    const colors = [
      "#ff6b6b", // Red
      "#4ecdc4", // Cyan
      "#ffe66d", // Yellow
      "#a8dadc", // Light blue
      "#f1faee", // White
      "#ff9ff3", // Pink
      "#feca57", // Orange
      "#48dbfb", // Sky blue
      "#b19cd9", // Purple
      "#77dd77", // Green
    ];

    const circles = [];
    for (let i = 0; i < 240; i++) {
      circles.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 1, // 1-5px
        x: Math.random() * 100,
        y: Math.random() * 100,
        pulseDuration: Math.random() * 4 + 3, // 3-7 seconds
        delay: Math.random() * 5,
        glowSize: Math.random() * 20 + 10, // 10-30px glow
      });
    }
    return circles;
  };

  // Generate comets with different motion types (reduced count)
  const generateComets = () => {
    const colors = [
      "#ff6b6b", // Red
      "#4ecdc4", // Cyan
      "#ffe66d", // Yellow
      "#a8dadc", // Light blue
      "#f1faee", // White
      "#ff9ff3", // Pink
      "#feca57", // Orange
      "#48dbfb", // Sky blue
    ];

    const motionTypes = ["horizontal", "vertical", "diagonal", "random"];

    const comets = [];
    for (let i = 0; i < 8; i++) {
      const motionType =
        motionTypes[Math.floor(Math.random() * motionTypes.length)];
      let startX, startY, endX, endY;

      // Set motion paths based on type
      if (motionType === "horizontal") {
        startX = -10;
        startY = Math.random() * 100;
        endX = 110;
        endY = startY + (Math.random() * 10 - 5);
      } else if (motionType === "vertical") {
        startX = Math.random() * 100;
        startY = -10;
        endX = startX + (Math.random() * 10 - 5);
        endY = 110;
      } else if (motionType === "diagonal") {
        const direction = Math.random() > 0.5 ? 1 : -1;
        startX = direction > 0 ? -10 : 110;
        startY = Math.random() * 50;
        endX = direction > 0 ? 110 : -10;
        endY = startY + (Math.random() * 60 + 30);
      } else {
        startX = Math.random() * 100;
        startY = Math.random() * 100;
        endX = Math.random() * 100;
        endY = Math.random() * 100;
      }

      comets.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 5 + 4,
        startX,
        startY,
        endX,
        endY,
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 8,
        motionType,
      });
    }
    return comets;
  };

  const galaxyCircles = generateGalaxyCircles();
  const comets = generateComets();
  const fireworks = generateFireworks();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="team-page">
      {/* Galaxy Background with Stable Glowing Circles */}
      <div className="galaxy-background">
        {/* Stable luminous circles */}
        {galaxyCircles.map((circle) => (
          <Motion.div
            key={`circle-${circle.id}`}
            className="galaxy-circle"
            style={{
              position: "absolute",
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              background: circle.color,
              borderRadius: "50%",
              boxShadow: `0 0 ${circle.glowSize}px ${circle.color}, 0 0 ${
                circle.glowSize * 1.5
              }px ${circle.color}`,
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: circle.pulseDuration,
              delay: circle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Fireworks Animation */}
        {fireworks.map((firework) => (
          <div
            key={`firework-${firework.id}`}
            style={{
              position: "absolute",
              left: `${firework.x}%`,
              top: `${firework.y}%`,
            }}
          >
            {firework.particles.map((particle) => (
              <Motion.div
                key={particle.id}
                className="firework-particle"
                style={{
                  position: "absolute",
                  width: "4px",
                  height: "4px",
                  background: particle.color,
                  borderRadius: "50%",
                  boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
                }}
                animate={{
                  x: [
                    0,
                    Math.cos((particle.angle * Math.PI) / 180) *
                      particle.distance,
                  ],
                  y: [
                    0,
                    Math.sin((particle.angle * Math.PI) / 180) *
                      particle.distance,
                  ],
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.5, 1, 0],
                }}
                transition={{
                  duration: firework.duration,
                  delay: firework.delay,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeOut",
                }}
              />
            ))}
            {/* Central flash */}
            <Motion.div
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                background: firework.color,
                borderRadius: "50%",
                boxShadow: `0 0 40px ${firework.color}, 0 0 80px ${firework.color}`,
                left: "-10px",
                top: "-10px",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 0.6,
                delay: firework.delay,
                repeat: Infinity,
                repeatDelay: firework.duration + 3,
                ease: "easeOut",
              }}
            />
          </div>
        ))}

        {/* Flying comets (reduced count) */}
        {comets.map((comet) => (
          <Motion.div
            key={comet.id}
            className="comet"
            style={{
              position: "absolute",
              left: `${comet.startX}%`,
              top: `${comet.startY}%`,
              width: `${comet.size}px`,
              height: `${comet.size}px`,
            }}
            animate={{
              x: [`0%`, `${(comet.endX - comet.startX) * 10}px`],
              y: [`0%`, `${(comet.endY - comet.startY) * 10}px`],
              opacity: [0, 0.9, 0.9, 0.3],
            }}
            transition={{
              duration: comet.duration,
              delay: comet.delay,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: Math.random() * 3,
            }}
          >
            {/* Comet Head */}
            <div
              style={{
                width: `${comet.size}px`,
                height: `${comet.size}px`,
                background: comet.color,
                borderRadius: "50%",
                boxShadow: `0 0 ${comet.size * 6}px ${comet.color}, 0 0 ${
                  comet.size * 12
                }px ${comet.color}, 0 0 ${comet.size * 18}px ${comet.color}`,
                position: "absolute",
              }}
            />
            {/* Comet Tail */}
            <div
              style={{
                position: "absolute",
                width: `${comet.size * 20}px`,
                height: `${comet.size * 0.8}px`,
                background: `linear-gradient(90deg, ${comet.color} 0%, transparent 100%)`,
                borderRadius: "50%",
                filter: "blur(3px)",
                opacity: 0.85,
                transformOrigin: "left center",
                transform: `rotate(${
                  Math.atan2(
                    comet.endY - comet.startY,
                    comet.endX - comet.startX
                  ) *
                  (180 / Math.PI)
                }deg)`,
                left: `-${comet.size * 15}px`,
                top: `${comet.size / 2}px`,
              }}
            />
          </Motion.div>
        ))}
      </div>
      {/* Animated decorative element */}
      <Motion.div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, var(--color-red-500), var(--color-red-700))",
          borderRadius: "50%",
          opacity: 0.1,
          filter: "blur(40px)",
          zIndex: 0,
        }}
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Motion.div
        className="team-header"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <Motion.div
          className="brand-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="brand-name">PRAGYAA</h1>
          <p className="brand-tagline">"BRIGHTER THAN EVER BEFORE"</p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="team-title">Our Team</h2>
          <p className="team-subtitle">
            Meet the brilliant minds behind our innovation. Together, we're
            building the future of technology.
          </p>
        </Motion.div>
      </Motion.div>

      <Motion.div
        className="team-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member) => (
          <Motion.div
            key={member.id}
            className="team-card"
            variants={cardVariants}
            transition={{ duration: 0.3 }}
          >
            <Motion.div
              className="card-image-wrapper"
              initial="rest"
              whileHover="hover"
            >
              <Motion.img
                src={member.image}
                alt={member.name}
                className="team-image"
                variants={imageVariants}
              />
              <Motion.div className="image-overlay" variants={overlayVariants}>
                <div className="social-links">
                  {member.social.linkedin && (
                    <Motion.a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </Motion.a>
                  )}
                  {member.social.github && (
                    <Motion.a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </Motion.a>
                  )}
                  {member.social.twitter && (
                    <Motion.a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </Motion.a>
                  )}
                  {member.social.instagram && (
                    <Motion.a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </Motion.a>
                  )}
                </div>
              </Motion.div>
            </Motion.div>

            <Motion.div className="card-content">
              <Motion.h3
                className="member-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {member.name}
              </Motion.h3>
              <Motion.p
                className="member-role"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {member.role}
              </Motion.p>
              <Motion.p
                className="member-bio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {member.bio}
              </Motion.p>
            </Motion.div>
          </Motion.div>
        ))}
      </Motion.div>
    </div>
  );
};

export default TeamPage;
