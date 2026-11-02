import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    // @ts-expect-error - React compiler experimental flag type definition workaround
    reactCompiler: true,
  },
  cacheComponents: true,
  partialPrerendering: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;