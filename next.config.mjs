/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns:[
        {
            protocol:"https",
            hostname:"www.lineashoes.com",
            port:"",
            pathname: "/**"
        }
    ]
}
};

export default nextConfig;
