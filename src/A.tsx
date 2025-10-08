import React from "react";

// 🌍 Define your global prefix here, or import from a config/env variable
// const GLOBAL_PREFIX = "/brno-czech-republic";
const GLOBAL_PREFIX = "";


interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

const A: React.FC<AProps> = ({href, children, ...props}) => {
    // Ensure no double slashes
    const fullHref = `${GLOBAL_PREFIX.replace(/\/$/, "")}/${href.replace(/^\//, "")}`;

    return (
        <a href={fullHref} {...props}>
            {children}
        </a>
    );
};

export default A;
