import { writable } from "svelte/store";
import type { UserDietStoreType } from "$lib/types";

export const userDietStore = writable<UserDietStoreType[]>([]);
