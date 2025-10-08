import React from "react";

// 🌍 Define your global prefix here (or import from config/env)
const GLOBAL_PREFIX = ""; // e.g. "/project/how"

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

const A: React.FC<AProps> = ({href, children, ...props}) => {
    // If href is external or anchor link, skip prefixing
    const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("www.") ||
        href.startsWith("#");

    const fullHref = isExternal
        ? href
        : `${GLOBAL_PREFIX.replace(/\/$/, "")}/${href.replace(/^\//, "")}`;

    return (
        <a href={fullHref} {...props}>
            {children}
        </a>
    );
};

export default A;
