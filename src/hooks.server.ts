import { prepareStylesSSR } from "@svelteuidev/core";
import mongoose from "mongoose";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import "dotenv/config";
import { redirect } from "@sveltejs/kit";
import User from "$lib/schema/User.ts"

const { connection, connect } = mongoose;

async function connectToDB({ event, resolve }) {
  if (connection.readyState === 0) {
    if (process.env.DB_URI && process.env.DB_PASSWORD) {
      const mongoURI = process.env.DB_URI.replace(
        "<password>",
        encodeURIComponent(process.env.DB_PASSWORD)
      );
      await connect(mongoURI, {
        keepAlive: true,
      });
    }
  }
  const response = await resolve(event);
  return response;
}

async function verifyUserIsLoggedIn({ event, resolve }) {
  const session = event.cookies.get("session")
  if (event.url.pathname.includes("dashboard")) {
    if (!session) {
      redirect(303, "/signup");
    } else {
      const userData = await User.findOne({ userAuthToken: session })
      if (!userData) {
        event.cookies.set("session", "", {
          path: "/",
          expires: new Date(0),
        })
        redirect(303, "/signup");
      }
    }
  }
  if (
    event.url.pathname.includes("signup")
  ) {
    if (event.cookies.get("session")) {
      redirect(303, "/dashboard");
    }
  }
  const response = await resolve(event);
  return response;
}

export const handle: Handle = sequence(
  prepareStylesSSR,
  connectToDB,
  verifyUserIsLoggedIn,
);
