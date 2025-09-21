'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';

interface BannerSliderProps {
  images: string[];
  autoSlideInterval?: number;
}

export default function BannerSlider({ images, autoSlideInterval = 5000 }: BannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying, images.length, autoSlideInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (images.length === 0) return null;

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex] || ''}
              alt={`Banner ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          {/* Previous/Next Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={goToPrevious}
              className="ml-4 p-3 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={goToNext}
              className="mr-4 p-3 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-amber-400 scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="p-2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? (
                <FiPause className="w-4 h-4" />
              ) : (
                <FiPlay className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Slide Counter */}
          <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}

      {/* Progress Bar */}
      {images.length > 1 && isPlaying && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
          <motion.div
            key={currentIndex}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: autoSlideInterval / 1000, 
              ease: 'linear' 
            }}
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
          />
        </div>
      )}

      {/* Keyboard Navigation */}
      <div
        className="absolute inset-0 focus:outline-none"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') goToPrevious();
          if (e.key === 'ArrowRight') goToNext();
          if (e.key === ' ') {
            e.preventDefault();
            togglePlayPause();
          }
        }}
        aria-label="Image slider. Use arrow keys to navigate, space to pause/play"
      />
    </section>
  );
}