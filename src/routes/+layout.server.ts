import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ locals, url: { pathname } }) => {
  return {
    user: locals.user,
    pathname,
  };
};
