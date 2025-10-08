import React, {useEffect, useState} from "react";

export interface ImageSlide {
    src: string;
    title?: string;
    leftNote?: string | string[];
    rightNote?: string | string[];
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

    // Reset index when opening
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
                    className="fixed top-4 right-6 md:top-6 md:right-10 text-white text-6xl leading-none hover:scale-110 transition-transform z-50"
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
                    {/* Prev button */}
                    <button
                        onClick={prev}
                        className="p-6 md:p-8 text-white text-5xl md:text-6xl leading-none select-none hover:scale-110 transition-transform"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    {/* Left note (desktop only) */}
                    {leftNote && (
                        <div className="hidden md:block text-white text-lg max-w-[15vw] text-right space-y-2">
                            {Array.isArray(leftNote)
                                ? leftNote.map((line, idx) => <p key={idx}>• {line}</p>)
                                : leftNote}
                        </div>
                    )}

                    {/* Image */}
                    <img
                        src={src}
                        alt={title ?? `Slide ${current + 1}`}
                        className="max-h-[70vh] max-w-[60vw] object-contain rounded-lg shadow-lg"
                    />

                    {/* Right note (desktop) */}
                    {rightNote && (
                        <div className="hidden md:block text-white text-lg max-w-[15vw] text-left space-y-2">
                            {Array.isArray(rightNote)
                                ? rightNote.map((line, idx) => <p key={idx}>• {line}</p>)
                                : rightNote}
                        </div>
                    )}

                    {/* Next button */}
                    <button
                        onClick={next}
                        className="p-6 md:p-8 text-white text-5xl md:text-6xl leading-none select-none hover:scale-110 transition-transform"
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>

                {/* Right note (mobile only — appears below image) */}
                {rightNote && (
                    <div className="block md:hidden text-white text-base mt-4 text-center space-y-1 max-w-[80vw]">
                        {Array.isArray(rightNote)
                            ? rightNote.map((line, idx) => <p key={idx}>• {line}</p>)
                            : rightNote}
                    </div>
                )}

                {/* Bottom note */}
                {bottomNote && (
                    <p className="text-white text-sm mt-2 text-center max-w-[80vw]">
                        {bottomNote}
                    </p>
                )}

                {/* Slide counter */}
                <p className="text-white text-xs mt-2 opacity-75">
                    {current + 1} / {slides.length}
                </p>
            </div>
        </div>
    );
};

export default ImageViewer;
