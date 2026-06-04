import { motion, useReducedMotion } from 'framer-motion';
import { jobs } from '../data/portfolio';
import { slideInLeft, stagger, viewOnce } from '../motion/variants';

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="jobs"
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
      variants={stagger(0.12, 0.05)}
    >
      {jobs.map((job) => (
        <motion.article
          key={job.title + job.period}
          className="job-card"
          variants={slideInLeft}
          whileHover={
            reduce
              ? undefined
              : {
                  x: 6,
                  borderColor: '#5dcaa5',
                  transition: { type: 'spring', stiffness: 300, damping: 24 },
                }
          }
        >
          <div className="job-header">
            <div>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
            </div>
            <time className="job-period">
              {job.period.split('\n').map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </time>
          </div>
          <motion.ul
            className="job-body"
            variants={stagger(0.06, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewOnce}
          >
            {job.bullets.map((bullet) => (
              <motion.li
                key={bullet}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {bullet}
              </motion.li>
            ))}
          </motion.ul>
        </motion.article>
      ))}
    </motion.div>
  );
}
