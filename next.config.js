/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cfd.pockethost.io',
                port: '',
                pathname: '/**'
                
            }
        ]
    }
}

module.exports = nextConfig
