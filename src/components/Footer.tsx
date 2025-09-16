import React from 'react';

// ============ TYPES ============
interface Company {
  name: string;
  logo: string;
  alt: string;
  url: string;
  category: string;
}

interface LogoCardProps {
  company: Company;
  label?: string;
  isStrategic?: boolean;
}

interface PartnersSectionProps {
  title: string;
  partners: { company: Company; label?: string }[];
  isStrategic?: boolean;
}

// ============ CONFIGURATION ============
const CONFIG = {
  fonts: {
    primary: "'Space Grotesk', sans-serif",
    secondary: "'Urbanist', sans-serif"
  },
  colors: {
    background: "bg-white",
    textPrimary: "text-gray-700",
    textSecondary: "text-gray-600",
    textTertiary: "text-gray-500",
    textHeader: "text-gray-800",
    border: "border-gray-200",
    link: "text-blue-600 hover:text-blue-800",
    partnerFallback: "text-gray-400"
  },
  layout: {
    containerMaxWidth: "max-w-full",
    partnerContainerPadding: "px-4 sm:px-6",
    desktopSpacing: "ml-16",
  },
  partnerCard: {
    // Mobile optimized heights
    height: "h-20 sm:h-24 md:h-32",
    strategicHeight: "h-24 sm:h-28 md:h-48",
    padding: "p-2",
    // Mobile optimized grid
    gridCols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-9",
    strategicGridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    gridGap: "gap-4 sm:gap-6 lg:gap-8",
    sectionWidth: "w-full max-w-7xl",
  },
  copyright: {
    year: "2025",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    repositoryUrl: "https://gitlab.igem.org/2025/brno-czech-republic",
    brnoUrl: "https://www.brno.cz/",
    brnoLogoPath: "https://static.igem.wiki/teams/5642/images/homepage/footer/brno-logo2.webp"
  }
};



// ============ PARTNERS DATA ============
const PARTNERS_DATA = {
  strategicSponsors: [
    {
      company: {
        name: "MUNI SCI",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/muni-sci-logo.webp",
        alt: "MUNI SCI Logo",
        url: "https://www.sci.muni.cz/",
        category: "Strategic Partner"
      },
      label: "Strategic Partner"
    },
    {
      company: {
        name: "IOCB Tech Foundation",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/iocb-tech-foundation-logo.webp",
        alt: "IOCB Tech Foundation Logo",
        url: "https://nf-iocbtech.cz/en/",
        category: "General Sponsor"
      },
      label: "General Sponsor"
    },
    {
      company: {
        name: "GreenOnyx",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/greenonyx-logo.webp",
        alt: "GreenOnyx Logo",
        url: "https://www.greenonyx.ag/",
        category: "Sponsor of Duckweed Hackers"
      },
      label: "Main Sponsor\nduckweed hackers"
    },
    {
      company: {
        name: "Brno University of Technology",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/brno-university-logo.webp",
        alt: "Brno University of Technology Logo",
        url: "https://www.vut.cz/en/",
        category: "Sponsor of Duckweed Hustlers"
      },
      label: "Main Sponsor\nduckweed hustlers"
    },
    {
      company: {
        name: "BioVendor Group",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/biovendor-group-logo.webp",
        alt: "BioVendor Group Logo",
        url: "https://www.biovendor.com/",
        category: "Sponsor of Duckweed Hipsters"
      },
      label: "Main Sponsor\nduckweed hipsters"
    }
  ],
  enablementPartners: [
    {
      company: {
        name: "Microbial Bioengineering Laboratory",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/mbl-logo.webp",
        alt: "Microbial Bioengineering Laboratory Logo",
        url: "https://mik.sci.muni.cz/mbl",
        category: "Enablement Partner"
      }
    },
    {
      company: {
        name: "CEITEC",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/ceitec-logo.webp",
        alt: "Central European Institute of Technology Logo",
        url: "https://www.ceitec.eu/",
        category: "Enablement Partner"
      }
    },
    {
      company: {
        name: "strojLAB",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/strojlab-logo.webp",
        alt: "strojLAB Logo",
        url: "https://www.strojlab.cz/",
        category: "Enablement Partner"
      }
    },
    {
      company: {
        name: "Arturo Marí-Ordóñez Group",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/arturo-mari-ordonez-logo.webp",
        alt: "Arturo Marí-Ordóñez Group Logo",
        url: "https://www.oeaw.ac.at/gmi/research/research-groups/arturo-mari-ordonez/",
        category: "Enablement Partner"
      }
    },
    {
      company: {
        name: "Ansa Biotechnologies",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/ansa-biotechnologies-logo.webp",
        alt: "Ansa Biotechnologies Logo",
        url: "https://ansabio.com/",
        category: "Enablement Partner"
      }
    },
    {
      company: {
        name: "IBBA",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/ibba-logo.webp",
        alt: "Institute of Agricultural Biology and Biotechnology Logo",
        url: "https://www.cnr.it/en/institute/012/institute-of-agricultural-biology-and-biotechnology-ibba",
        category: "Enablement Partner"
      }
    },
    {
      company: {
        name: "Tensor Ventures",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/tensor-ventures-logo.webp",
        alt: "Tensor Ventures Logo",
        url: "https://tensor.ventures/",
        category: "Enablement Partner"
      }
    },
    {
      company: {
        name: "ThermoFisher Scientific",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/thermofisher-logo.webp",
        alt: "ThermoFisher Scientific Logo",
        url: "https://jobs.thermofisher.com/cz/cz/czech-republic-o-nás",
        category: "Enablement Partner"
      }
    },
    {
      company: {
        name: "P-LAB",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/p-lab-logo.webp",
        alt: "P-LAB Logo",
        url: "https://www.p-lab.cz/",
        category: "Enablement Partner"
      }
    }
  ]
};

// ============ COMPONENTS ============
const LogoCard: React.FC<LogoCardProps> = ({ company, label, isStrategic }) => {
  const renderLabel = () => {
    if (!label) return null;
    const [firstLine, ...rest] = label.split('\n');
    return (
      <div
        className="text-center whitespace-pre-line mb-2 sm:mb-3"
        style={{ fontFamily: CONFIG.fonts.secondary }}
      >
        {/* prvnÃ­ Å™Ã¡dek - ÄernÃ½, vÄ›tÅ¡Ã­ a tuÄnÃ½ - mobile optimized */}
        <div className="text-sm sm:text-lg md:text-2xl font-semibold text-black leading-tight">
          {firstLine}
        </div>

        {/* zbÃ½vajÃ­cÃ­ Å™Ã¡dky - menÅ¡Ã­, tenkÃ© a stÃ¡le Å¡edÃ© - mobile optimized */}
        {rest.length > 0 && (
          <div className="text-xs sm:text-sm md:text-lg font-normal text-gray-600 leading-tight mt-1">
            {rest.join('\n')}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="group relative flex flex-col items-center justify-center w-full h-full">
      {renderLabel()}
      <a
        href={company.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center ${CONFIG.partnerCard.padding} ${
          isStrategic ? CONFIG.partnerCard.strategicHeight : CONFIG.partnerCard.height
        } transition-transform duration-300 hover:scale-105 w-full`}
      >
        <img
          src={company.logo}
          alt={company.alt}
          className="max-w-full max-h-full object-contain transition-all duration-300"
          onError={(e) => {
            const target = e.currentTarget;
            const parent = target.parentElement;
            if (parent) {
              target.style.display = 'none';
              parent.innerHTML = `<div class="text-xs sm:text-sm ${CONFIG.colors.partnerFallback} text-center font-medium px-2">${company.name}</div>`;
            }
          }}
        />
      </a>
    </div>
  );
};

const PartnersSection: React.FC<PartnersSectionProps> = ({ title, partners, isStrategic }) => (
  <div className={`space-y-4 sm:space-y-6 lg:space-y-8 ${CONFIG.partnerCard.sectionWidth} mx-auto`}>
    {title && (
      <h3
        className={`text-xl sm:text-2xl lg:text-3xl font-semibold ${CONFIG.colors.textHeader} text-center px-4`}
        style={{ fontFamily: CONFIG.fonts.primary }}
      >
        {title}
      </h3>
    )}
    <div className={`grid ${isStrategic ? CONFIG.partnerCard.strategicGridCols : CONFIG.partnerCard.gridCols} ${CONFIG.partnerCard.gridGap} px-2 sm:px-4`}>
      {partners.map(({ company, label }, index) => (
        <div
          key={`${title || 'partners'}-${index}`}
          className="flex items-center justify-center min-h-0"
        >
          <LogoCard company={company} label={label} isStrategic={isStrategic} />
        </div>
      ))}
    </div>
  </div>
);

const CopyrightSection: React.FC = () => (
  <div className={`pt-6 sm:pt-8 border-t ${CONFIG.colors.border} space-y-4 sm:space-y-6`}>
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
        <a href={CONFIG.copyright.brnoUrl} target="_blank" rel="noopener noreferrer" className="group">
          <img
            src={CONFIG.copyright.brnoLogoPath}
            alt="Brno Logo"
            className="h-11 sm:h-14 md:h-15 object-contain transition-all duration-300"
            onError={(e) => {
              const target = e.currentTarget;
              const parent = target.parentElement;
              if (parent) {
                target.style.display = 'none';
                parent.innerHTML = `<div class="text-sm font-semibold ${CONFIG.colors.textSecondary}">Brno</div>`;
              }
            }}
          />
        </a>
        <div
          className={`text-xs sm:text-sm md:text-base ${CONFIG.colors.textHeader} font-semibold text-center px-4`}
          style={{ fontFamily: CONFIG.fonts.primary }}
        >
          Under the auspices of the Mayor of Brno
        </div>
      </div>
      <div className="space-y-2 text-center max-w-4xl px-4">
        <div
          className={`text-xs sm:text-sm ${CONFIG.colors.textSecondary} leading-relaxed`}
          style={{ fontFamily: CONFIG.fonts.secondary }}
        >
          Â© {CONFIG.copyright.year} - Content on this site is licensed under a{' '}
          <a
            href={CONFIG.copyright.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${CONFIG.colors.link} underline transition-colors duration-200`}
          >
            Creative Commons Attribution 4.0 International license
          </a>.
        </div>
        <div
          className={`text-xs sm:text-sm ${CONFIG.colors.textTertiary} leading-relaxed`}
          style={{ fontFamily: CONFIG.fonts.secondary }}
        >
          The repository used to create this website is available at{' '}
          <a
            href={CONFIG.copyright.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${CONFIG.colors.link} underline transition-colors duration-200 break-all`}
          >
            gitlab.igem.org/2025/brno-czech-republic
          </a>.
        </div>
      </div>
    </div>
  </div>
);

// ============ MAIN COMPONENT ============
const Footer: React.FC = () => {
  return (
    <footer className={`${CONFIG.colors.background} py-8 sm:py-12`}>
      <div className={`${CONFIG.layout.containerMaxWidth} mx-auto ${CONFIG.layout.partnerContainerPadding}`}>
        <div className="space-y-8 sm:space-y-12">
          <PartnersSection
            partners={PARTNERS_DATA.strategicSponsors}
            isStrategic={true}
          />
          <PartnersSection
            title="Enablement Partners"
            partners={PARTNERS_DATA.enablementPartners}
          />
          <CopyrightSection />
        </div>
      </div>
    </footer>
  );
};

export default Footer;