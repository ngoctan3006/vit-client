import resolveConfig from 'tailwindcss/resolveConfig';
// @ts-ignore
import config from '../../tailwind.config.js';

const tailwindConfig = resolveConfig(config);

console.log(tailwindConfig.screens);

export const BREAKPOINT_SM = tailwindConfig.theme.screens['sm'];
export const BREAKPOINT_MD = tailwindConfig.theme.screens['md'];
export const BREAKPOINT_LG = tailwindConfig.theme.screens['lg'];
export const BREAKPOINT_XL = tailwindConfig.theme.screens['xl'];
export const BREAKPOINT_2XL = tailwindConfig.theme.screens['2xl'];

export default tailwindConfig;
