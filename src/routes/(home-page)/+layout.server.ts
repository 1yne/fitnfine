import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ locals, url: { pathname } }) => {
  return {
    pathname,
  };
};
