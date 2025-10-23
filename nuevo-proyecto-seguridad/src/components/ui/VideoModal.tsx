'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface VideoModalProps {
  videoUrl: string | null;
  title?: string;
  area?: string;
  description?: string;
  duration?: string;
  onClose: () => void;
}

export const VideoModal = ({
  videoUrl,
  title,
  area,
  description,
  duration,
  onClose,
}: VideoModalProps) => {
  useEffect(() => {
    if (!videoUrl) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [videoUrl]);

  if (!videoUrl) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          onClick={(e) => e.stopPropagation()}
          className="relative w-[92vw] max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-white/10 bg-white"
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
            filter: 'blur(10px)',
            transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
          }}
        >

          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 text-white p-2 rounded-full z-10"
            style={{
              backgroundColor: '#0d9cbfcc',
              boxShadow: '0 0 15px #0d9cbf66',
            }}
            whileHover={{ rotate: 90 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <X className="h-5 w-5" />
          </motion.button>

          <div className="relative bg-black">
            <video
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-auto object-cover aspect-video"
            />
          </div>

          <AnimatePresence>
            <motion.div
              key="info-panel"
              className="w-full text-white p-6 backdrop-blur-xl border-t border-white/10"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10, 65, 78, 0.95) 0%, rgba(53, 6, 15, 0.95) 100%)',
              }}
              initial={{ y: 120, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 120,
                  damping: 18,
                  mass: 0.8,
                },
              }}
              exit={{
                y: 120,
                opacity: 0,
                transition: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
              }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                <div>
                  {area && (
                    <span className="text-base uppercase text-purple-400 font-semibold tracking-wide">
                      {area}
                    </span>
                  )}
                  {title && (
                    <h2 className="text-lg font-bold text-white leading-loose">
                      {title}
                    </h2>
                  )}
                </div>
                {duration && (
                  <span className="text-base font-semibold text-white/90">
                    ⏱️ {duration}
                  </span>
                )}
              </div>

              {description && (
                <p className="text-sm text-white/90 leading-relaxed drop-shadow-sm">
                  {description}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};