/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions:{
    quietDeps:true
  },
  allowedDevOrigins: ['10.91.78.209'],

};

export default nextConfig;
