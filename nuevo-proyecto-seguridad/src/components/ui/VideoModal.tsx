'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}

export const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {
  if (!videoUrl) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-lg"
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={onClose}
      >
        <motion.div
          key="content"
          onClick={(e) => e.stopPropagation()}
          className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl w-[90vw] max-w-4xl"
          initial={{ opacity: 0, scale: 0.9, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.9, y: 30, filter: 'blur(10px)' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <video
            src={videoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-auto rounded-b-3xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};