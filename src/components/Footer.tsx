import React from 'react';

// ============ TYPES ============
interface Company {
  name: string;y
  logo: string;
  alt: string;
  url: string;
  category: string;
}

interface LogoCardProps {
  company: Company;
  label?: string;
  isStrategic?: boolean; // Added to handle strategic partner styling
}

interface PartnersSectionProps {
  title: string;
  partners: { company: Company; label?: string }[];
  isStrategic?: boolean; // Added to indicate strategic partners section
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
    partnerContainerPadding: "px-2",
    desktopSpacing: "ml-16",
  },
  partnerCard: {
    height: "h-32",
    strategicHeight: "h-48", // Larger height for strategic partners
    padding: "p-0",
    gridCols: "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9",
    strategicWidth: "w-1/2 sm:w-1/3 lg:w-1/4 xl:w-[16.67%]", // Wider for strategic partners
    normalWidth: "w-1/3 sm:w-1/4 lg:w-1/6 xl:w-[11.11%]", // Normal width for other partners
    gridGap: "gap-8",
    sectionWidth: "w-full max-w-8xl",
    gridJustify: "justify-content-center",
  },
  copyright: {
    year: "2025",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    repositoryUrl: "https://gitlab.igem.org/2025/brno-czech-republic",
    brnoUrl: "https://www.brno.cz/",
    brnoLogoPath: "/images/partners/Brno-logo.png"
  }
};

// ============ DATA ============
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
      label: "Main Sponsor\nof\nduckweed hackers"
    },
    {
      company: {
        name: "Brno University of Technology",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/brno-university-logo.webp",
        alt: "Brno University of Technology Logo",
        url: "https://www.vut.cz/en/",
        category: "Sponsor of Duckweed Hustlers"
      },
      label: "Main Sponsor\nof\nduckweed hustlers"
    },
    {
      company: {
        name: "BioVendor Group",
        logo: "https://static.igem.wiki/teams/5642/images/homepage/footer/biovendor-group-logo.webp",
        alt: "BioVendor Group Logo",
        url: "https://www.biovendor.com/",
        category: "Sponsor of Duckweed Hipsters"
      },
      label: "Main Sponsor\nof\nduckweed hipsters"
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
      className="text-center whitespace-pre-line"
      style={{ fontFamily: CONFIG.fonts.secondary }}
    >
      {/* prvý riadok - čierny, väčší a tučný */}
      <div className="text-2xl font-semibold text-black">{firstLine}</div>

      {/* zvyšné riadky - menšie, tenké a stále šedé */}
      {rest.length > 0 && (
        <div className="text-lg font-normal text-gray-600">
          {rest.join('\n')}
        </div>
      )}
    </div>
  );
};

  return (
    <div className="group relative flex flex-col items-center justify-center space-y-2">
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
              parent.innerHTML = `<div className="text-sm ${CONFIG.colors.partnerFallback} text-center font-medium">${company.name}</div>`;
            }
          }}
        />
      </a>
    </div>
  );
};

const PartnersSection: React.FC<PartnersSectionProps> = ({ title, partners, isStrategic }) => (
  <div className={`space-y-8 ${CONFIG.partnerCard.sectionWidth} mx-auto`}>
    <h3
      className={`text-3xl font-semibold ${CONFIG.colors.textHeader} text-center`}
      style={{ fontFamily: CONFIG.fonts.primary }}
    >
      {title}
    </h3>
    <div className="flex flex-wrap justify-center -m-4">
      {partners.map(({ company, label }, index) => (
        <div
          key={`${title}-${index}`}
          className={`${isStrategic ? CONFIG.partnerCard.strategicWidth : CONFIG.partnerCard.normalWidth} p-4 flex items-center justify-center`}
        >
          <LogoCard company={company} label={label} isStrategic={isStrategic} />
        </div>
      ))}
    </div>
  </div>
);

const CopyrightSection: React.FC = () => (
  <div className={`pt-8 border-t ${CONFIG.colors.border} space-y-6`}>
    <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <a href={CONFIG.copyright.brnoUrl} target="_blank" rel="noopener noreferrer" className="group">
          <img
            src={CONFIG.copyright.brnoLogoPath}
            alt="Brno Logo"
            className="h-13 object-contain transition-all duration-300"
            onError={(e) => {
              const target = e.currentTarget;
              const parent = target.parentElement;
              if (parent) {
                target.style.display = 'none';
                parent.innerHTML = `<div className="text-sm font-semibold ${CONFIG.colors.textSecondary}">Brno</div>`;
              }
            }}
          />
        </a>
        <div
          className={`text-sm md:text-base ${CONFIG.colors.textHeader} font-semibold text-center`}
          style={{ fontFamily: CONFIG.fonts.primary }}
        >
          Under the auspices of the Mayor of Brno
        </div>
      </div>
      <div className="space-y-2 text-center max-w-4xl">
        <div
          className={`text-sm ${CONFIG.colors.textSecondary}`}
          style={{ fontFamily: CONFIG.fonts.secondary }}
        >
          © {CONFIG.copyright.year} - Content on this site is licensed under a{' '}
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
          className={`text-sm ${CONFIG.colors.textTertiary}`}
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
    <footer className={`${CONFIG.colors.background} py-12 px-4 md:px-8`}>
      <div className={`${CONFIG.layout.containerMaxWidth} mx-auto ${CONFIG.layout.partnerContainerPadding}`}>
        <div className="md:hidden space-y-12">
          <div className="space-y-12">
            <PartnersSection
              title="Strategic Partners & Sponsors"
              partners={PARTNERS_DATA.strategicSponsors}
              isStrategic={true}
            />
            <PartnersSection
              title="Enablement Partners"
              partners={PARTNERS_DATA.enablementPartners}
            />
          </div>
          <CopyrightSection />
        </div>
        <div className="hidden md:block space-y-12">
          <div className="flex flex-col space-y-10">
            <PartnersSection
              title="Strategic Partners & Sponsors"
              partners={PARTNERS_DATA.strategicSponsors}
              isStrategic={true}
            />
            <PartnersSection
              title="Enablement Partners"
              partners={PARTNERS_DATA.enablementPartners}
            />
          </div>
          <CopyrightSection />
        </div>
      </div>
    </footer>
  );
};

export default Footer;