import type { RequestHandler } from "@sveltejs/kit";
import User from "$lib/schema/User";
import { json } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ url, cookies, request }) => {
  const session = cookies.get("session");
  const data = await request.json();
  const profilePicData = data.pictureData;
  await User.updateOne(
    { userAuthToken: session },
    { profilePicture: profilePicData }
  );
  return json({ success: true });
};
