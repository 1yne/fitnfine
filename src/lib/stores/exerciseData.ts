import { writable } from "svelte/store";
import type { ExerciseDataType } from "$lib/types";

export const exerciseDataStore = writable<ExerciseDataType[]>([]);
