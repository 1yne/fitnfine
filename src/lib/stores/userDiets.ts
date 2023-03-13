import { writable } from "svelte/store";
import type { UserDietStoreType } from "$lib/types";

export const userDietsStore = writable<UserDietStoreType[]>([]);
