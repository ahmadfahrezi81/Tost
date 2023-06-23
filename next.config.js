/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["images.unsplash.com", "res.cloudinary.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.googleusercontent.com",
            },
        ],
    },
};


module.exports = nextConfig;
