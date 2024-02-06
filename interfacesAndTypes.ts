export interface Key {
	name: string
	isBlackKey: boolean
	espacio: boolean
	number: number
	father?: number
}

export type Keys = Key[]

export enum KeySheetMusic {
	"G" = "G",
	"F" = "F",
}

export enum BlackOrWhite {
	"WHITE",
	"BLACK",
}

export interface PianoKey {
	readonly name: string
	blackOrWhite: BlackOrWhite
	number: number
	selected: boolean | null
}

export type Piano = PianoKey[]
