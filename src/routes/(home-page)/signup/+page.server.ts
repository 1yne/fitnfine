import bcrypt from "bcryptjs";
import User from "$lib/schema/User";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { dev } from "$app/environment";

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    const weight = formData.get("weight");
    const height = formData.get("height");
    const salt = bcrypt.genSaltSync(10);

    const data = await User.findOne({ username });
    if (data)
      return fail(303, { invalid: true, error: "This user already exists!" });
    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username ||
      !password
    ) {
      return fail(303, {
        invalid: true,
        error: "Username or password is invalid",
      });
    }

    const object = {
      _id: crypto.randomUUID(),
      username,
      passwordHash: bcrypt.hashSync(password, salt),
      email,
      userAuthToken: crypto.randomUUID(),
      weight,
      height,
    };

    await new User(object).save();

    cookies.set("session", object.userAuthToken, {
      path: "/",
      httpOnly: false,
      sameSite: "strict",
      secure: !dev,
      maxAge: 60 * 60 * 24 * 30,
    });

    throw redirect(303, "/dashboard");
  },
};
