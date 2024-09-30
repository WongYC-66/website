/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',       // to generate static sites
    basePath: "/website",  // for github.io GH-PAGES

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        dangerouslyAllowSVG: true,
        unoptimized: true,
    },
};

export default nextConfig;
