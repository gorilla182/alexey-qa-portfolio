import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { popIn, stagger } from '../motion/variants';
import ContactIcon from './ContactIcon';

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="hero"
      data-testid="hero-section"
      initial="hidden"
      animate="visible"
      variants={stagger(0.09, 0.05)}
    >
      <motion.div className="badge-row" variants={stagger(0.07, 0.1)}>
        {profile.badges.map((badge) => (
          <motion.span
            key={badge.text}
            className={`badge ${badge.variant}`}
            variants={popIn}
            whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          >
            {badge.pulse && <span className="pulse" aria-hidden="true" />}
            {badge.text}
          </motion.span>
        ))}
      </motion.div>

      <motion.h1 className="name" variants={item}>
        <motion.span
          initial={reduce ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.name[0]}
        </motion.span>
        <br />
        <motion.span
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.name[1]}
        </motion.span>
      </motion.h1>

      <motion.p className="role" variants={item}>
        {profile.role}
      </motion.p>

      <motion.blockquote
        className="tagline"
        variants={item}
        initial={reduce ? false : { borderLeftWidth: 0 }}
        animate={{ borderLeftWidth: 2 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        {profile.tagline.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
        <em>{profile.taglineEmphasis}</em>
      </motion.blockquote>

      <motion.div className="contacts" variants={stagger(0.06, 0)}>
        {profile.contacts.map((contact, i) => {
          const inner = (
            <>
              <ContactIcon type={contact.icon} />
              {contact.label}
            </>
          );

          const hover = reduce
            ? undefined
            : { scale: 1.04, y: -3, transition: { type: 'spring', stiffness: 400 } };

          return contact.href ? (
            <motion.a
              key={contact.label}
              className="contact-link"
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              variants={item}
              custom={i}
              whileHover={hover}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              {inner}
            </motion.a>
          ) : (
            <motion.span
              key={contact.label}
              className="contact-link"
              variants={item}
              whileHover={hover}
            >
              {inner}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.header>
  );
}
