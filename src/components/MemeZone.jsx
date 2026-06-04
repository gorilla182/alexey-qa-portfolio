import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { memes } from '../data/portfolio';
import { scaleIn, stagger, viewOnce } from '../motion/variants';
import MemeLightbox from './MemeLightbox';

function MemeCard({ meme, index, reduce, onPreview }) {
  return (
    <motion.figure
      className="meme-card meme-card-image"
      variants={scaleIn}
      whileHover={
        reduce
          ? undefined
          : {
              rotate: index % 2 === 0 ? 1.5 : -1.5,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 400, damping: 20 },
            }
      }
    >
      <button
        type="button"
        className="meme-thumb-btn"
        data-testid={`meme-thumb-${meme.id}`}
        onClick={() => onPreview(meme)}
        aria-label={`Открыть предпросмотр: ${meme.alt}`}
      >
        <img
          className="meme-img"
          src={meme.src}
          alt={meme.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        <span className="meme-thumb-hint" aria-hidden="true">
          Нажми для просмотра
        </span>
      </button>
    </motion.figure>
  );
}

export default function MemeZone() {
  const reduce = useReducedMotion();
  const [preview, setPreview] = useState(null);

  const columns = useMemo(() => {
    const left = [];
    const right = [];
    memes.forEach((meme, index) => {
      (index % 2 === 0 ? left : right).push({ meme, index });
    });
    return [left, right];
  }, []);

  return (
    <>
      <motion.div
        className="meme-masonry"
        data-testid="meme-zone"
        initial="hidden"
        whileInView="visible"
        viewport={viewOnce}
        variants={stagger(0.06, 0.05)}
      >
        {columns.map((column, colIndex) => (
          <motion.div
            key={colIndex === 0 ? 'left' : 'right'}
            className="meme-column"
            variants={stagger(0.08, colIndex * 0.04)}
          >
            {column.map(({ meme, index }) => (
              <MemeCard
                key={meme.id}
                meme={meme}
                index={index}
                reduce={reduce}
                onPreview={setPreview}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>

      <MemeLightbox meme={preview} onClose={() => setPreview(null)} />
    </>
  );
}
