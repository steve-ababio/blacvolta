/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"blacvolta-media-uploads.s3.eu-west-2.amazonaws.com",
            }
        ]
    }
};

export default nextConfig;
// touch comment to trigger Next.js dev server reload
