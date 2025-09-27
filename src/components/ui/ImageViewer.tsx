import React, {useEffect, useState} from "react";

export interface ImageSlide {
    src: string;
    title?: string;
    leftNote?: string;
    rightNote?: string;
    bottomNote?: string;
}

interface ImageViewerProps {
    slides: ImageSlide[];
    isOpen: boolean;
    onClose: () => void;
    startIndex?: number;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
                                                     slides,
                                                     isOpen,
                                                     onClose,
                                                     startIndex = 0,
                                                 }) => {
    const [current, setCurrent] = useState(startIndex);

    // Reset when opening
    useEffect(() => {
        if (isOpen) {
            const safeIndex = Math.min(Math.max(startIndex, 0), slides.length - 1);
            setCurrent(safeIndex);
        }
    }, [isOpen, startIndex, slides.length]);

    // Keyboard controls
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft")
                setCurrent((i) => (i - 1 + slides.length) % slides.length);
            if (e.key === "ArrowRight")
                setCurrent((i) => (i + 1) % slides.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, slides.length, onClose]);

    if (!isOpen) return null;

    const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setCurrent((i) => (i + 1) % slides.length);

    const {src, title, leftNote, rightNote, bottomNote} = slides[current];

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            {/* Inner wrapper */}
            <div
                className="relative flex flex-col items-center max-w-[90vw] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-3xl md:text-4xl leading-none"
                    aria-label="Close"
                >
                    ×
                </button>

                {/* Title */}
                {title && (
                    <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 text-center">
                        {title}
                    </h2>
                )}

                {/* Image with side notes */}
                <div className="flex items-center justify-center gap-4">
                    {/* Left note */}
                    {leftNote && (
                        <div className="hidden md:block text-white text-sm max-w-[15vw] text-right">
                            {leftNote}
                        </div>
                    )}

                    {/* Prev button */}
                    <button
                        onClick={prev}
                        className="text-white text-4xl md:text-5xl leading-none select-none"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    {/* Image */}
                    <img
                        src={src}
                        alt={title ?? `Slide ${current + 1}`}
                        className="max-h-[70vh] max-w-[60vw] object-contain rounded-lg shadow-lg"
                    />

                    {/* Next button */}
                    <button
                        onClick={next}
                        className="text-white text-4xl md:text-5xl leading-none select-none"
                        aria-label="Next image"
                    >
                        ›
                    </button>

                    {/* Right note */}
                    {rightNote && (
                        <div className="hidden md:block text-white text-sm max-w-[15vw] text-left">
                            {rightNote}
                        </div>
                    )}
                </div>

                {/* Bottom note */}
                {bottomNote && (
                    <p className="text-white text-sm mt-4 text-center max-w-[80vw]">
                        {bottomNote}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ImageViewer;
