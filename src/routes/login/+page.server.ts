import { redirect, fail, type Actions } from "@sveltejs/kit";
import bcrypt from "bcryptjs";
import User from "$lib/schema/User";
import { dev } from "$app/environment";

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email ||
      !password
    ) {
      return fail(303, {
        invalid: true,
        error: "Email or password is invalid",
      });
    }

    const data = await User.findOne({ email, password });
    if (!data)
      return fail(303, {
        invalid: true,
        error: "Email or password is incorrect",
      });

    const passwordCorrect = bcrypt.compareSync(password, data.passwordHash);
    if (!passwordCorrect)
      return fail(303, {
        invalid: true,
        error: "Email or password is incorrect",
      });

    const newUserAuthToken = crypto.randomUUID();
    User.findOneAndUpdate(
      { email },
      {
        userAuthToken: newUserAuthToken,
      },
      {
        upsert: true,
      }
    ).then(() => {});

    cookies.set("session", newUserAuthToken, {
      path: "/",
      httpOnly: false,
      sameSite: "strict",
      secure: !dev,
      maxAge: 60 * 60 * 24 * 30,
    });
    throw redirect(303, "/dashboard");
  },
};
