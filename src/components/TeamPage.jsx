import React from "react";
import { motion as Motion } from "framer-motion";
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
      scale: 1.1,
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
      <Motion.div
        className="team-header"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h1 className="team-title">Meet Our Team</h1>
        <p className="team-subtitle">
          Talented individuals working together to create amazing experiences
        </p>
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
            whileHover={{ y: -10 }}
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
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Motion.a>
                  )}
                  {member.social.github && (
                    <Motion.a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github"></i>
                    </Motion.a>
                  )}
                  {member.social.twitter && (
                    <Motion.a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-twitter"></i>
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
