import bcrypt from "bcryptjs";
import User from "$lib/schema/User";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { dev } from "$app/environment";

export const actions: Actions = {
  signup: async ({ request, cookies }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    const weight = formData.get("weight");
    const height = formData.get("height");
    const salt = bcrypt.genSaltSync(10);

    const data = await User.findOne({ username });
    if (data)
      return fail(303, {
        invalid: true,
        error: "This user already exists!",
        signup: true,
      });
    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username ||
      !password
    ) {
      return fail(303, {
        invalid: true,
        error: "Username or password is invalid",
        signup: true,
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
      likedWorkouts: [],
    };

    await new User(object).save();

    cookies.set("session", object.userAuthToken, {
      path: "/",
      httpOnly: false,
      sameSite: "strict",
      secure: !dev,
      maxAge: 60 * 60 * 24 * 30,
    });

    redirect(303, "/dashboard");
  },
  login: async ({ request, cookies }) => {
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
        signup: false,
      });
    }

    const data = await User.findOne({ email, password });
    if (!data)
      return fail(303, {
        invalid: true,
        error: "Email or password is incorrect",
        signup: false,
      });

    const passwordCorrect = bcrypt.compareSync(password, data.passwordHash);
    if (!passwordCorrect)
      return fail(303, {
        invalid: true,
        error: "Email or password is incorrect",
        signup: false,
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
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    redirect(303, "/dashboard");
  },
};
