import { writable } from "svelte/store";
import type { UserStoreType } from "$lib/types";

export const currentUserStore = writable<UserStoreType>();
