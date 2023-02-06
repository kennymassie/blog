/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";


const nextConfig = {
  reactStrictMode: true,
  /**
   * Tell Next.js where the `public` folder is.
   * Replace `nextjs-github-pages` with your Github repo project name.
   */
  assetPrefix: isProd ? "/blog/" : "",
  /**
   * Disable server-based image optimization.
   *
   * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
   */
  images: {
    unoptimized: true,
    // loader: unsplashed
    // path:
  },
}

module.exports = nextConfig
