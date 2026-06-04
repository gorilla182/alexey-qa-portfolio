import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';

export default function MemeLightbox({ meme, onClose }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!meme) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [meme, onClose]);

  return (
    <AnimatePresence>
      {meme && (
        <motion.div
          className="meme-lightbox"
          data-testid="meme-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={meme.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.1 : 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="meme-lightbox-panel"
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="meme-lightbox-btn meme-lightbox-btn-close"
              onClick={onClose}
              aria-label="Закрыть предпросмотр"
            >
              ✕
            </button>

            <img
              className="meme-lightbox-img"
              src={meme.src}
              alt={meme.alt}
            />

            <div className="meme-lightbox-footer">
              <a
                className="meme-lightbox-btn meme-lightbox-btn-download"
                data-testid="meme-download-btn"
                href={meme.src}
                download={meme.filename}
              >
                Скачать
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
