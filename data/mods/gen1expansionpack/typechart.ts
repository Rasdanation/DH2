/**
 * New types use data from their earliest known data.
 * So, Steel- and Dark-type use the SW97 incarnations.
 * Fairy works how it does in modern (SWSH at time of writing, unchanged from XY)
 * All types are put in here in case something crazy happens, also so Fairy and everything work properly.
 */

export const TypeChart: {[k: string]: ModdedTypeData} = {
	"Bug": {
		damageTaken: {
			"Bug": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fighting": 2,
			"Fire": 1,
			"Flying": 1,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 2,
			"Ice": 0,
			"Normal": 0,
			"Poison": 1,
			"Psychic": 0,
			"Rock": 1,
			"Water": 0,
		},
	},
	"Dragon": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 1,
			"Electric": 2,
			"Fairy": 1,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 0,
			"Ice": 1,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 2,
		},
	},
	"Electric": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 2,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 1,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 2,
			"Water": 0,
		},
	},
	"Fighting": {
		damageTaken: {
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 0,
			"Fire": 0,
			"Flying": 1,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 1,
			"Rock": 2,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Fire": {
		damageTaken: {
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 0,
			"Water": 1,
		},
	},
	"Ghost": {
		damageTaken: {
			"Bug": 2,
			"Dark": 1,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 3,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 1,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 3,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Ice": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 1,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Normal": {
		damageTaken: {
			"Bug": 0,
			"Dark": 2, // lol
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 3,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Poison": {
		damageTaken: {
			psn: 3,
			tox: 3,
			"Bug": 1,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 0,
			"Normal": 0,
			"Poison": 2,
			"Psychic": 1,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
			"Fairy": 2,
		},
	},
	"Psychic": {
		damageTaken: {
			"Bug": 1,
			"Dark": 1,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 3,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 2,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Rock": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 2,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 1,
			"Ice": 0,
			"Normal": 2,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 1,
			"Water": 1,
		},
	},
	"Water": {
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 0,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 2,
			"Water": 2,
		},
	},
	"Dark": {
		damageTaken: {
			"Bug": 0,
			"Dark": 1,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 0,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 2,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 1,
			"Poison": 0,
			"Psychic": 2,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Steel": {
		inherit: true,
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fairy": 2,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 2,
			"Steel": 3,
			"Water": 1,
		},
	},
	fairy: {
		inherit: true,
		category: "Special",
		  damageTaken: {
			"Bug": 2,
			"Dark": 2,
			"Dragon": 3,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 1,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 1,
			"Water": 0,
		},
	},
};
