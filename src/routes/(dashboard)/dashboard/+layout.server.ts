import type { LayoutServerLoad } from "./$types";
import User from "$lib/schema/User";
import type { Cookies } from "@sveltejs/kit";
import { get } from "svelte/store";
import { currentUserStore } from "$lib/stores/currentUser";

export const load: LayoutServerLoad = ({
  url: { pathname },
  cookies,
  request,
}) => {
  let userData: any = get(currentUserStore);
  if (
    (!request.url.includes("invalidate") && pathname === "/dashboard") ||
    pathname === "/dashboard/profile"
  ) {
    userData = saveUserDataToStore(cookies);
  }

  return {
    pathname,
    userData,
  };
};

async function saveUserDataToStore(cookies: Cookies) {
  const session = cookies.get("session");
  if (!session) {
    return;
  }
  const storedUserData = await User.findOne({ userAuthToken: session });
  if (storedUserData)
    return {
      username: storedUserData.username,
      height: storedUserData.height,
      weight: storedUserData.weight,
      profilePicture: storedUserData.profilePicture,
    };
}
