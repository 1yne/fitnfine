import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = ({ url, cookies }) => {
  cookies.set("session", "", {
    path: "/",
    expires: new Date(0),
  });
  return new Response("Successful");
};
