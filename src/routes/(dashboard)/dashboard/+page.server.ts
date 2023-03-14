import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ url: { pathname }, request }) => {
  return {
    loadData: request.url.includes("invalidate") && pathname === "/dashboard",
  };
};
