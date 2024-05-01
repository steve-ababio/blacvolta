/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"files.blacvolta.com",
                pathname:"/uploads/**"
            }
        ]
    }
};

export default nextConfig;
