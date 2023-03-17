import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ url: { pathname }, request }) => {
  return {
    dontLoadData: request.url.includes("invalidate") && pathname === "/dashboard",
  };
};
