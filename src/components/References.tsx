import { Link } from 'react-router-dom';
import A from "../A";

interface Reference {
  id: number;
  text: string;
  url?: string;
}

interface ReferencesProps {
  references: Reference[];
  title?: string;
  className?: string;
}

const References = ({ 
  references, 
  title = "References", 
  className = "" 
}: ReferencesProps) => {
  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="border-t border-gray-200 pt-8">
          <h3 
            className="text-xl lg:text-2xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {title}
          </h3>
          <div className="space-y-4 text-sm sm:text-base text-gray-700">
            {references.map((ref) => (
              <p 
                key={ref.id} 
                className="leading-relaxed"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                [{ref.id}] {ref.url ? (
                  <>
                    {ref.text.split(ref.url)[0]}
                    <A 
                      className="text-blue-500 hover:underline break-all" 
                      target="_blank" 
                      href={ref.url}
                    >
                      {ref.url}
                    </A>
                    {ref.text.split(ref.url)[1] || ''}
                  </>
                ) : (
                  ref.text
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;