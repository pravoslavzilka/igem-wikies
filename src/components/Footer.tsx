export default function Footer() {
  return (
    <footer className="pt-4 pb-4 mt-5 bg-light text-center border-top">
      <div className="container">
        <p className="mb-1 text-muted small">
          © 2025 - Content on this site is licensed under a{" "}
          <a
            className="footer-link"
            href="https://creativecommons.org/licenses/by/4.0/"
            rel="license"
          >
            Creative Commons Attribution 4.0 International license
          </a>
          .
        </p>
        <p className="mb-0 text-muted small">
          Repository available at{" "}
          <a
            className="footer-link"
            href="https://gitlab.igem.org/2025/brno-czech-republic"
          >
            gitlab.igem.org/2025/brno-czech-republic
          </a>
          .
        </p>
      </div>

      <style>{`
        .footer-link {
          color: #0d6efd; /* Bootstrap primary color */
          text-decoration: underline;
        }
        .footer-link:hover {
          color: #0a58ca; /* Slightly darker on hover */
          text-decoration: none;
        }
      `}</style>
    </footer>
  );
}
