import { writable, readable } from "svelte/store";

type WorkoutDataType = {
	name: string,
	type: string,
	muscle: string,
	equipment: string,
	difficulty: string,
	instructions: string,
	id: string
}

export const userWorkoutDataStore = writable<WorkoutDataType[]>([])