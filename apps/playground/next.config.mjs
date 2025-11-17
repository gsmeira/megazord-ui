import {createMDX} from 'fumadocs-mdx/next';

const config = {
  reactStrictMode: true,
  transpilePackages: ['@megazord/ui'],
}

const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});

export default withMDX(config);
