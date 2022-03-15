import pkg from "../../package.json";

export const isBrowser = typeof window !== "undefined";
export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;

export const SITE_LANG = "en";
export const SITE_DESCRIPTION = `Convinience for you :D`;
export const SITE_VERSION = `v${pkg.version}`;
