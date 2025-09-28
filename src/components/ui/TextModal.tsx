import React, {useEffect, useState} from "react";

export interface textSlide {
    src: string;
    title?: string;
    leftNote?: string | string[];
    description?: string | string[];
    bottomNote?: string;
}

interface TextModalProps {
    slides: textSlide[];
    isOpen: boolean;
    onClose: () => void;
    startIndex?: number;
}

const TextModal: React.FC<TextModalProps> = ({
                                                     slides,
                                                     isOpen,
                                                     onClose,
                                                     startIndex = 0,
                                                 }) => {
    const [current, setCurrent] = useState(startIndex);

    // Reset when opening
    useEffect(() => {
        if (isOpen) {
            const safeIndex = Math.min(
                Math.max(startIndex, 0),
                slides.length - 1
            );
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

    const prev = () =>
        setCurrent((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setCurrent((i) => (i + 1) % slides.length);

    const {src, title, leftNote, description, bottomNote} = slides[current];

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
                <div className="flex text-justify  gap-4">
                    

                

                    

                    {/* Right note */}
                    {description && (
                        <div className="block text-white text-lg  text-justify space-y-2">
                            {Array.isArray(description)
                                ? description.map((line, idx) => (
                                    <p key={idx}>• {line}</p>
                                ))
                                : description}
                        </div>
                    )}

                    
                </div>

                {/* Bottom note */}
                {bottomNote && (
                    <p className="text-white text-sm mt-2 text-center max-w-[80vw]">
                        {bottomNote}
                    </p>
                )}

                
            </div>
        </div>
    );
};

export default TextModal;
