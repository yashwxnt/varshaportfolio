/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"],
		unoptimized: true, // Disable image optimization for static export
	},
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg")
		);

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ }, // exclude if *.svg?url
				use: ["@svgr/webpack"],
			}
		);

		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
	output: 'export', // Specify the new static export method
};

module.exports = nextConfig;
