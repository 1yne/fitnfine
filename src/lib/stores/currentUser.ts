import { writable } from "svelte/store";
import type { UserStoreType } from "$lib/types"

// type UserStoreType = {
//   username: string,
//   weight: number,
//   height: number
// }

export const currentUserStore = writable<UserStoreType>()