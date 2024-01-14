export interface Key {
	name: string
	isBlackKey: boolean
	espacio: boolean
	number: number
}

export type Keys = Key[]

export enum KeySheetMusic {
	"G",
	"F",
}

export enum BlackOrWhite {
	"WHITE",
	"BLACK",
}

export interface PartituraProps {
	musicSheet: KeySheetMusic
	currentKey: number
}

export interface PianoKey {
	name: string
	blackOrWhite: BlackOrWhite
	number: number
	selected: boolean
}

export type Piano = PianoKey[]
