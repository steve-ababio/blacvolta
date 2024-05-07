/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"files.blacvolta.com",
            }
        ]
    }
};

export default nextConfig;
