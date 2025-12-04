/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack(config) {
    
    config.module.rules.push({
      test: /\.(glsl|frag|vert)$/,
      type: "asset/source",
      use: [
        {
          loader: "glslify-loader",
        },
      ],
    });

    return config;
  },
  turbopack: {}, 
  reactCompiler: true,
};

export default nextConfig;
