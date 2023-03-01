import { prepareStylesSSR } from "@svelteuidev/core";
import mongoose from "mongoose";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import "dotenv/config";
import { redirect } from "@sveltejs/kit";

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
  if (event.url.pathname.includes("dashboard")) {
    if (!event.cookies.get("session")) {
      throw redirect(303, "/login");
    }
  }
  if (
    event.url.pathname.includes("login") ||
    event.url.pathname.includes("signup")
  ) {
    if (event.cookies.get("session")) {
      throw redirect(303, "/dashboard");
    }
  }
  const response = await resolve(event);
  return response;
}

export const handle: Handle = sequence(
  prepareStylesSSR,
  verifyUserIsLoggedIn,
  connectToDB
);
