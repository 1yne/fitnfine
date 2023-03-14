import { writable } from "svelte/store";
import type { WorkoutDataType } from "$lib/types";

export const userWorkoutDataStore = writable<WorkoutDataType[]>([]);
