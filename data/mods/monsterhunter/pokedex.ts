export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	aknosom: {
		num: 1,
		name: "Aknosom",
		types: ["Fire", "Flying"],
		baseStats: {hp: 90, atk: 62, def: 90, spa: 70, spd: 70, spe: 80},
		abilities: {0: "Big Pecks", 1: "Dancer"},
		heightm: 1.4,
		weightkg: 39.2,
		color: "White",
		eggGroups: ["Flying"],
	},
	arzuros: {
		num: 2,
		name: "Arzuros",
		types: ["Normal"],
		baseStats: {hp: 60, atk: 102, def: 114, spa: 60, spd: 80, spe: 62},
		abilities: {0: "Honey Gather", 1: "Tough Claws", H: "Hustle"},
		heightm: 1.8,
		weightkg: 125.8,
		color: "Blue",
		eggGroups: ["Field"],
		otherFormes: ["Redhelm Arzuros"],
	},
 	redhelmarzuros: {
		num: 2,
		name: "Redhelm Arzuros",
		baseSpecies: "Arzuros",
		forme: "Mega",
		types: ["Normal"],
		baseStats: {hp: 80, atk: 112, def: 144, spa: 60, spd: 84, spe: 98},
		abilities: {0: "Tough Claws"},
		heightm: 1.9,
		weightkg: 178.4,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Arzurite",
	},
	barroth: {
		num: 3,
		name: "Barroth",
		types: ["Ground"],
		baseStats: {hp: 86, atk: 84, def: 68, spa: 72, spd: 100, spe: 86},
		abilities: {0: "Mold Breaker", 1: "Mega Launcher", H: "Sand Stream"},
		heightm: 2.4,
		weightkg: 282.8,
		color: "Brown",
		eggGroups: ["Monster"],
	},
 	basarios: {
		num: 4,
		name: "Basarios",
		types: ["Rock", "Poison"],
		baseStats: {hp: 80, atk: 74, def: 120, spa: 74, spd: 62, spe: 52},
		abilities: {0: "Sturdy", 1: "Rock Head"},
		heightm: 1.9,
		weightkg: 312.2,
		color: "White",
		eggGroups: ["Mineral"],
	},
  	greatbaggi: {
		num: 5,
		name: "Great Baggi",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 70, atk: 50, def: 100, spa: 90, spd: 114, spe: 50},
		abilities: {0: "Ice Body", 1: "Vital Spirit", H: "Comatose"},
		heightm: 1.7,
		weightkg: 45.5,
		color: "Blue",
		eggGroups: ["Monster"],
	},
 	greatizuchi: {
		num: 6,
		name: "Great Izuchi",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 70, atk: 114, def: 90, spa: 50, spd: 50, spe: 100},
		abilities: {0: "Hyper Cutter", 1: "Wind Rider", H: "Scrappy"},
		heightm: 1.7,
		weightkg: 45.5,
		color: "Orange",
		eggGroups: ["Monster"],
	},
 	greatwroggi: {
		num: 7,
		name: "Great Wroggi",
		types: ["Normal", "Poison"],
		baseStats: {hp: 70, atk: 50, def: 50, spa: 114, spd: 100, spe: 90},
		abilities: {0: "Merciless", 1: "Dry Skin", H: "Sniper"},
		heightm: 1.7,
		weightkg: 45.5,
		color: "Orange",
		eggGroups: ["Monster"],
	},
 	kuluyaku: {
		num: 8,
		name: "Kulu-Ya-Ku",
		types: ["Normal", "Flying"],
		baseStats: {hp: 65, atk: 88, def: 113, spa: 44, spd: 70, spe: 101},
		abilities: {0: "Pickup", 1: "Unburden", H: "Quick Feet"},
		heightm: 1.4,
		weightkg: 30.0,
		color: "Yellow",
		eggGroups: ["Flying"],
	},
 	khezu: {
		num: 9,
		name: "Khezu",
		types: ["Electric"],
		baseStats: {hp: 102, atk: 62, def: 72, spa: 107, spd: 84, spe: 60},
		abilities: {0: "Electric Terrain", 1: "Static", H: "Lightning Rod"},
		heightm: 1.7,
		weightkg: 50.5,
		color: "White",
		eggGroups: ["Monster"],
	},
 	lagombi: {
		num: 10,
		name: "Lagombi",
		types: ["Normal", "Ice"],
		baseStats: {hp: 88, atk: 102, def: 83, spa: 46, spd: 56, spe: 105},
		abilities: {0: "Fur Coat", 1: "Slush Rush"},
		heightm: 1.3,
		weightkg: 53.4,
		color: "White",
		eggGroups: ["Field"],		
		otherFormes: ["Snowbaron Lagombi"],
	},
 	snowbaronlagombi: {
		num: 10,
		name: "Snowbaron Lagombi",
		baseSpecies: "Lagombi",
		forme: "Mega",
		types: ["Normal", "Ice"],
		baseStats: {hp: 88, atk: 141, def: 96, spa: 46, spd: 72, spe: 137},
		abilities: {0: "Skill Link"},
		heightm: 1.9,
		weightkg: 178.4,
		color: "White",
		eggGroups: ["Field"],
		requiredItem: "Lagombite",
	},
 	royalludroth: {
		num: 11,
		name: "Royal Ludroth",
		types: ["Water"],
		baseStats: {hp: 103, atk: 70, def: 70, spa: 107, spd: 70, spe: 80},
		abilities: {0: "Water Absorb", 1: "Swift Swim", H: "Fluffy"},
		heightm: 2.0,
		weightkg: 6.9,
		color: "Yellow",
		eggGroups: ["Water 1"],
	},
 	tetranadon: {
		num: 12,
		name: "Tetranadon",
		types: ["Water", "Grass"],
		baseStats: {hp: 105, atk: 58, def: 75, spa: 100, spd: 75, spe: 30},
		abilities: {0: "Thick Fat", 1: "Rain Dish", H: "Huge Power"},
		heightm: 2,
		weightkg: 105.5,
		color: "Green",
		eggGroups: ["Water 1", "Grass"],
	},
 	anjanath: {
		num: 13,
		name: "Anjanath",
		types: ["Fire"],
		baseStats: {hp: 94, atk: 135, def: 80, spa: 50, spd: 74, spe: 93},
		abilities: {0: "Strong Jaw", 1: "Anger Point"},
		heightm: 2.5,
		weightkg: 155.5,
		color: "Pink",
		eggGroups: ["Monster", "Dragon"],
	},
 	barioth: {
		num: 14,
		name: "Barioth",
		types: ["Ice"],
		baseStats: {hp: 103, atk: 110, def: 83, spa: 78, spd: 83, spe: 80},
		abilities: {0: "Slush Rush", 1: "Snow Cloak", H: "Justified"},
		heightm: 1.9,
		weightkg: 152.2,
		color: "White",
		eggGroups: ["Field"],
	},
 	bishaten: {
		num: 15,
		name: "Bishaten",
		types: ["Normal"],
		baseStats: {hp: 102, atk: 86, def: 80, spa: 60, spd: 90, spe: 105},
		abilities: {0: "Harvest", 1: "Ripen", H: "Effect Spore"},
		heightm: 1.2,
		weightkg: 55.0,
		color: "White",
		eggGroups: ["Field", "Human-Like"],
	},
 	daimyohermitaur: {
		num: 16,
		name: "Daimyo Hermitaur",
		types: ["Water"],
		baseStats: {hp: 78, atk: 98, def: 112, spa: 78, spd: 102, spe: 52},
		abilities: {0: "Shell Armor", 1: "Sturdy", H: "Weak Armor"},
		heightm: 1.3,
		weightkg: 60.0,
		color: "Red",
		eggGroups: ["Water 3"],
	},
 	jyuratodus: {
		num: 17,
		name: "Jyuratodus",
		types: ["Ground", "Water"],
		baseStats: {hp: 126, atk: 70, def: 60, spa: 114, spd: 60, spe: 80},
		abilities: {0: "Dry Skin", 1: "Hydration", H: "Storm Drain"},
		heightm: 1.1,
		weightkg: 33.3,
		color: "Brown",
		eggGroups: ["Water 2"],
	},
 	pukeipukei: {
		num: 18,
		name: "Pukei-Pukei",
		types: ["Poison"],
		baseStats: {hp: 68, atk: 74, def: 70, spa: 112, spd: 98, spe: 108},
		abilities: {0: "Liquid Ooze", 1: "Merciless"},
		heightm: 1.0,
		weightkg: 22.0,
		color: "Green",
		eggGroups: ["Field"],
	},
 	somnacanth: {
		num: 19,
		name: "Somnacanth",
		types: ["Water", "Psychic"],
		gender: "F",
		baseStats: {hp: 60, atk: 66, def: 69, spa: 124, spd: 80, spe: 116},
		abilities: {0: "Forewarn", 1: "Frisk", H: "Synchronize"},
		heightm: 1.7,
		weightkg: 5.0,
		color: "Yellow",
		eggGroups: ["Water 2"],
	},
 	tobikadachi: {
		num: 20,
		name: "Tobi-Kadachi",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 100, def: 70, spa: 102, spd: 72, spe: 125},
		abilities: {0: "Intimidate", 1: "Static", H: "Speed Boost"},
		heightm: 1.4,
		weightkg: 42.4,
		color: "White",
		eggGroups: ["Field"],
	},
 	volvidon: {
		num: 21,
		name: "Volvidon",
		types: ["Normal", "Ground"],
		baseStats: {hp: 60, atk: 72, def: 116, spa: 82, spd: 104, spe: 80},
		abilities: {0: "Stench", 1: "Gluttony", H: "Neutralizing Gas"},
		heightm: 1.4,
		weightkg: 58.0,
		color: "Red",
		eggGroups: ["Field"],
	},
 	gossharag: {
		num: 22,
		name: "Goss Harag",
		types: ["Ice"],
		baseStats: {hp: 74, atk: 126, def: 104, spa: 60, spd: 102, spe: 66},
		abilities: {0: "Stake Out", 1: "No Guard"},
		heightm: 2.0,
		weightkg: 240.5,
		color: "White",
		eggGroups: ["Field"],
	},
 	auroracanth: {
		num: 22,
		name: "Auroracanth",
		types: ["Dark", "Ice"],
		gender: "F",
		baseStats: {hp: 70, atk: 60, def: 65, spa: 128, spd: 95, spe: 122},
		abilities: {0: "Shadow Tag", 1: "Snow Cloak"},
		heightm: 1.7,
		weightkg: 5.0,
		color: "White",
		eggGroups: ["Water 2"],
	},
 	almudron: {
		num: 23,
		name: "Almudron",
		types: ["Ground"],
		baseStats: {hp: 112, atk: 105, def: 93, spa: 77, spd: 99, spe: 75},
		abilities: {0: "Arena Trap", 1: "Earth Eater"},
		heightm: 3.0,
		weightkg: 52.5,
		color: "Brown",
		eggGroups: ["Water 1"],
	},
 	orangaten: {
		num: 24,
		name: "Orangaten",
		types: ["Fighting", "Fire"],
		baseStats: {hp: 110, atk: 94, def: 78, spa: 94, spd: 90, spe: 100},
		abilities: {0: "Flame Body", 1: "Vital Spirit", H: "Intimidate"},
		heightm: 1.2,
		weightkg: 55.0,
		color: "Orange",
		eggGroups: ["Field", "Human-Like"],
	},
 	diablos: {
		num: 25,
		name: "Diablos",
		types: ["Rock", "Ground"],
		baseStats: {hp: 112, atk: 122, def: 94, spa: 20, spd: 77, spe: 120},
		abilities: {0: "Rock Head", 1: "Reckless", H: "Rivalry"},
		heightm: 3.0,
		weightkg: 220.2,
		color: "Brown",
		eggGroups: ["Mineral", "Monster"],
	},
 	garangolm: {
		num: 26,
		name: "Garangolm",
		types: ["Grass", "Rock"],
		baseStats: {hp: 113, atk: 115, def: 105, spa: 78, spd: 94, spe: 65},
		abilities: {0: "Rocky Payload", 1: "Gooey", H: "Iron Fist"},
		heightm: 2.5,
		weightkg: 150.5,
		color: "Brown",
		eggGroups: ["Field", "Mineral"],
	},
 	mizutsune: {
		num: 27,
		name: "Mizutsune",
		types: ["Water", "Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 88, atk: 82, def: 80, spa: 111, spd: 102, spe: 107},
		abilities: {0: "Water Bubble", 1: "Marvel Scale", H: "Competitive"},
		heightm: 3.3,
		weightkg: 70.3,
		color: "White",
		eggGroups: ["Water 1", "Dragon"],
		otherFormes: ["Soulseer Mizutsune"],
	},
 	soulseermizutsune: {
		num: 27,
		name: "Soulseer Mizutsune",
		baseSpecies: "Mizutsune",
		forme: "Mega",
		types: ["Water", "Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 95, atk: 112, def: 80, spa: 147, spd: 136, spe: 100},
		abilities: {0: "No Guard"},
		heightm: 3.3,
		weightkg: 70.3,
		color: "White",
		eggGroups: ["Water 1", "Dragon"],
		requiredItem: "Mizutsunite",
	},
 	nargacuga: {
		num: 28,
		name: "Nargacuga",
		types: ["Steel"],
		baseStats: {hp: 88, atk: 111, def: 102, spa: 82, spd: 80, spe: 107},
		abilities: {0: "Super Luck", 1: "Mirror Armor", H: "Sharpness"},
		heightm: 2.0,
		weightkg: 88.8,
		color: "Black",
		eggGroups: ["Field"],
	},
 	rathalos: {
		num: 29,
		name: "Rathalos",
		types: ["Fire", "Flying"],
		gender: "M",
		baseStats: {hp: 70, atk: 100, def: 85, spa: 120, spd: 70, spe: 110},
		abilities: {0: "Hustle", 1: "Poison Touch", H: "Gale Wings"},
		heightm: 2.2,
		weightkg: 110.5,
		color: "Red",
		eggGroups: ["Flying", "Dragon"],
		otherFormes: ["Dreadking Rathalos"],
	},
 	dreadkingrathalos: {
		num: 30,
		name: "Dreadking Rathalos",
		baseSpecies: "Rathalos",
		forme: "Mega",
		types: ["Fire", "Flying"],
		gender: "M",
		baseStats: {hp: 70, atk: 145, def: 95, spa: 145, spd: 70, spe: 145},
		abilities: {0: "Desolate Land"},
		heightm: 2.2,
		weightkg: 110.5,
		color: "Red",
		eggGroups: ["Flying", "Dragon"],
		requiredItem: "Rathalosite",
	},
 	rathian: {
		num: 30,
		name: "Rathian",
		types: ["Poison", "Ground"],
		gender: "F",
		baseStats: {hp: 120, atk: 85, def: 115, spa: 70, spd: 115, spe: 70},
		abilities: {0: "Poison Point", 1: "Tough Claws", H: "Queenly Majesty"},
		heightm: 2.2,
		weightkg: 110.5,
		color: "Green",
		eggGroups: ["Flying", "Dragon"],
		otherFormes: ["Dreadqueen Rathian"],
	},
 	dreadqueenrathian: {
		num: 30,
		name: "Dreadqueen Rathian",
		baseSpecies: "Rathian",
		forme: "Mega",
		types: ["Poison", "Ground"],
		gender: "F",
		baseStats: {hp: 145, atk: 100, def: 145, spa: 70, spd: 145, spe: 70},
		abilities: {0: "Toxic Chain"},
		heightm: 2.2,
		weightkg: 110.5,
		color: "Green",
		eggGroups: ["Flying", "Dragon"],
		requiredItem: "Rathanite",
	},
 	shogunceanataur: {
		num: 31,
		name: "Shogun Ceanataur",
		types: ["Water"],
		baseStats: {hp: 60, atk: 140, def: 92, spa: 42, spd: 88, spe: 104},
		abilities: {0: "Battle Armor", 1: "Sniper", H: "Snarpness"},
		heightm: 1.3,
		weightkg: 60.0,
		color: "Blue",
		eggGroups: ["Water 3"],
	},
 	zinogre: {
		num: 32,
		name: "Zinogre",
		types: ["Electric"],
		baseStats: {hp: 73, atk: 103, def: 82, spa: 109, spd: 92, spe: 111},
		abilities: {0: "Volt Absorb", 1: "Galvanize"},
		heightm: 1.9,
		weightkg: 178.4,
		color: "Blue",
		eggGroups: ["Field"],
		otherFormes: ["Thunderlord Zinogre"],
	},
 	thunderlordzinogre: {
		num: 32,
		name: "Thunderlord Zinogre",
		baseSpecies: "Zinogre",
		forme: "Mega",
		types: ["Electric"],
		baseStats: {hp: 83, atk: 133, def: 82, spa: 144, spd: 92, spe: 136},
		abilities: {0: "Transistor"},
		heightm: 1.9,
		weightkg: 178.4,
		color: "Blue",
		eggGroups: ["Field"],
		requiredItem: "Zinogrite",
	},
 	astalos: {
		num: 33,
		name: "Astalos",
		types: ["Electric", "Bug"],
		baseStats: {hp: 50, atk: 92, def: 84, spa: 112, spd: 112, spe: 135},
		abilities: {0: "Lightning Rod", 1: "Surge Surfer"},
		heightm: 1.9,
		weightkg: 45.5,
		color: "Green",
		eggGroups: ["Bug"],
		otherFormes: ["Boltreaver Astalos"],
	},
 	boltreaverastalos: {
		num: 33,
		name: "Boltreaver Astalos",
		baseSpecies: "Astalos",
		forme: "Mega",
		types: ["Electric", "Bug"],
		baseStats: {hp: 60, atk: 114, def: 84, spa: 155, spd: 122, spe: 150},
		abilities: {0: "Electromorphosis"},
		heightm: 1.9,
		weightkg: 45.5,
		color: "Green",
		eggGroups: ["Bug"],
		requiredItem: "Astalosite",
	},
 	espinas: {
		num: 34,
		name: "Espinas",
		types: ["Grass", "Poison"],
		baseStats: {hp: 98, atk: 104, def: 100, spa: 108, spd: 98, spe: 91},
		abilities: {0: "Poison Point", 1: "Unaware", H: "Merciless"},
		heightm: 2.0,
		weightkg: 113.4,
		color: "Green",
		eggGroups: ["Dragon", "Grass"],
	},
 	goremagala: {
		num: 35,
		name: "Gore Magala",
		types: ["Dragon", "Dark"],
		baseStats: {hp: 102, atk: 96, def: 50, spa: 127, spd: 108, spe: 98},
		abilities: {0: "Infiltrator", 1: "Overcoat"},
		heightm: 2.5,
		weightkg: 230.3,
		color: "Black",
		eggGroups: ["Dragon"],
	},
 	lunagaron: {
		num: 36,
		name: "Lunagaron",
		types: ["Dark", "Ice"],
		baseStats: {hp: 88, atk: 125, def: 88, spa: 87, spd: 88, spe: 108},
		abilities: {0: "Refrigerate", 1: "Tough Claws"},
		heightm: 1.4,
		weightkg: 90.5,
		color: "Blue",
		eggGroups: ["Field"],
	},
 	magmadron: {
		num: 37,
		name: "Magmadron",
		types: ["Fire", "Ground"],
		baseStats: {hp: 112, atk: 95, def: 90, spa: 108, spd: 102, spe: 75},
		abilities: {0: "Magma Armor", 1: "Flash Fire"},
		heightm: 3.0,
		weightkg: 52.5,
		color: "Brown",
		eggGroups: ["Water 1"],
	},
 	magnamalo: {
		num: 40,
		name: "Magnamalo",
		types: ["Dark", "Fire"],
		baseStats: {hp: 105, atk: 115, def: 78, spa: 121, spd: 75, spe: 96},
		abilities: {0: "Moxie", 1: "Intimidate", H: "Supreme Overlord"},
		heightm: 3.3,
		weightkg: 212.2,
		color: "Purple",
		eggGroups: ["Field", "Monster"],
		otherFormes: ["Scorned Magnamalo"],
	},
 	scornedmagnamalo: {
		num: 40,
		name: "Scorned Magnamalo",
		baseSpecies: "Magnamalo",
		forme: "Mega",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 105, atk: 155, def: 80, spa: 134, spd: 110, spe: 106},
		abilities: {0: "Moxie"},
		heightm: 3.3,
		weightkg: 212.2,
		color: "Purple",
		eggGroups: ["Field", "Monster"],
		requiredItem: "Magnamalite",
	},
  	raknakadaki: {
		num: 41,
		name: "Rakna-Kadaki",
		types: ["Bug", "Ghost"],
		baseStats: {hp: 100, atk: 112, def: 112, spa: 78, spd: 112, spe: 60},
		abilities: {0: "Swarm", 1: "Technician", H: "Disguise"},
		heightm: 2.5,
		weightkg: 188.8,
		color: "White",
		eggGroups: ["Bug"],
	},
 	pyrekadaki: {
		num: 42,
		name: "Pyre-Kadaki",
		types: ["Bug", "Fire"],
		baseStats: {hp: 100, atk: 78, def: 112, spa: 112, spd: 112, spe: 60},
		abilities: {0: "Blaze", 1: "Mummy", H: "Disguise"},
		heightm: 2.5,
		weightkg: 188.8,
		color: "White",
		eggGroups: ["Bug"],
	},
 	seregios: {
		num: 43,
		name: "Seregios",
		types: ["Steel", "Flying"],
		baseStats: {hp: 94, atk: 121, def: 114, spa: 60, spd: 92, spe: 99},
		abilities: {0: "Iron Barbs", 1: "Battle Armor", H: "Sharpness"},
		heightm: 2.0,
		weightkg: 160.4,
		color: "Yellow",
		eggGroups: ["Monster", "Dragon"],
	},
 	tigrex: {
		num: 44,
		name: "Tigrex",
		types: ["Normal"],
		baseStats: {hp: 94, atk: 114, def: 98, spa: 108, spd: 95, spe: 88},
		abilities: {0: "Punk Rock", 1: "Gluttony"},
		heightm: 2.3,
		weightkg: 130.5,
		color: "Yellow",
		eggGroups: ["Monster", "Dragon"],
	},
 	bazelgeuse: {
		num: 45,
		name: "Bazelgeuse",
		types: ["Flying", "Fire"],
		baseStats: {hp: 102, atk: 120, def: 86, spa: 86, spd: 102, spe: 106},
		abilities: {0: "Skill Link", 1: "Reckless"},
		heightm: 2.5,
		weightkg: 220.5,
		color: "Brown",
		eggGroups: ["Monster", "Dragon"],
		otherFormes: ["Seething Bazelgeuse"],
	},
 	seethingbazelgeuse: {
		num: 45,
		name: "Seething Bazelgeuse",
		baseSpecies: "Bazelgeuse",
		forme: "Mega",
		types: ["Flying", "Dark"],
		baseStats: {hp: 110, atk: 138, def: 86, spa: 129, spd: 117, spe: 122},
		abilities: {0: "Anger Shell"},
		heightm: 3.5,
		weightkg: 280.5,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Bazelnite",
	},
 	chameleos: {
		num: 46,
		name: "Chameleos",
		types: ["Dragon", "Poison"],
		baseStats: {hp: 77, atk: 128, def: 78, spa: 128, spd: 78, spe: 125},
		abilities: {0: "Neutralizing Gas", 1: "Poison Puppeteer"},
		heightm: 3.5,
		weightkg: 230.4,
		color: "Purple",
		eggGroups: ["Monster", "Dragon"],
	},
 	kushaladaora: {
		num: 47,
		name: "Kushala Daora",
		types: ["Dragon", "Steel"],
		baseStats: {hp: 95, atk: 85, def: 105, spa: 127, spd: 130, spe: 73},
		abilities: {0: "Filter", 1: "Full Metal Body"},
		heightm: 3.2,
		weightkg: 200.4,
		color: "Gray",
		eggGroups: ["Dragon"],
	},
 	teostra: {
		num: 48,
		name: "Teostra",
		types: ["Dragon", "Fire"],
		baseStats: {hp: 85, atk: 135, def: 120, spa: 105, spd: 74, spe: 96},
		abilities: {0: "Thermal Exchange", 1: "Orichalcum Pulse"},
		heightm: 2.5,
		weightkg: 113.0,
		color: "Red",
		eggGroups: ["Dragon", "Field"],
	},
 	 flamingespinas: {
		num: 49,
		name: "Flaming Espinas",
		types: ["Grass", "Fire"],
		baseStats: {hp: 107, atk: 104, def: 104, spa: 110, spd: 108, spe: 81},
		abilities: {0: "Corrosion", 1: "Flash Fire", H: "Toxic Debris"},
		heightm: 2.0,
		weightkg: 130.4,
		color: "Green",
		eggGroups: ["Dragon", "Grass"],
	},
 	malzeno: {
		num: 50,
		name: "Malzeno",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 94, atk: 110, def: 88, spa: 130, spd: 88, spe: 120},
		abilities: {0: "Soul-Heart", 1: "Regenerator"},
		heightm: 2.5,
		weightkg: 85.0,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Primordial Malzeno"],
	},
 	primordialmalzeno: {
		num: 50,
		name: "Primordial Malzeno",
		baseSpecies: "Malzeno",
		forme: "Mega",
		types: ["Dragon", "Fairy"],
		baseStats: {hp: 94, atk: 155, def: 88, spa: 150, spd: 88, spe: 155},
		abilities: {0: "Prism Armor"},
		heightm: 2.5,
		weightkg: 85.0,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItem: "Malzenite",
	},
 	rajang: {
		num: 51,
		name: "Rajang",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 75, atk: 137, def: 91, spa: 102, spd: 91, spe: 105},
		abilities: {0: "Anger Point", 1: "Defiant", H: "Unseen Fist"},
		heightm: 1.5,
		weightkg: 90.0,
		color: "Gray",
		eggGroups: ["Field"],
		otherFormes: ["Furious Rajang"],
	},
 	furiousrajang: {
		num: 51,
		name: "Furious Rajang",
		baseSpecies: "Rajang",
		forme: "Mega",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 75, atk: 195, def: 95, spa: 131, spd: 95, spe: 110},
		abilities: {0: "Gorilla Tactics"},
		heightm: 1.5,
		weightkg: 113.0,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Rajanite",
	},
 	shagarumagala: {
		num: 52,
		name: "Shagaru Magala",
		types: ["Dragon", "Fairy"],
		baseStats: {hp: 107, atk: 82, def: 92, spa: 132, spd: 122, spe: 95},
		abilities: {0: "Magic Bounce", 1: "Pixilate", H: "Misty Surge"},
		heightm: 2.5,
		weightkg: 230.3,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
 	chaoticgore: {
		num: 53,
		name: "Chaotic Gore",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 85, atk: 125, def: 95, spa: 130, spd: 105, spe: 80},
		abilities: {0: "Dark Aura", 1: "Fairy Aura", H: "Contrary"},
		heightm: 2.5,
		weightkg: 230.3,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
 	velkhana: {
		num: 54,
		name: "Velkhana",
		types: ["Dragon", "Ice"],
		baseStats: {hp: 76, atk: 104, def: 65, spa: 148, spd: 106, spe: 128},
		abilities: {0: "Ice Scales", 1: "Snow Warning", H: "Refrigerate"},
		heightm: 2.5,
		weightkg: 55.4,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
 	violetmizutsune: {
		num: 55,
		name: "Violet Mizutsune",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 88, atk: 92, def: 90, spa: 116, spd: 102, spe: 112},
		abilities: {0: "Serene Grace", 1: "Multiscale"},
		heightm: 3.3,
		weightkg: 70.3,
		color: "Purple",
		eggGroups: ["Water 1"],
	},
 	lucentnargacuga: {
		num: 56,
		name: "Lucent Nargacuga",
		types: ["Steel", "Poison"],
		baseStats: {hp: 88, atk: 116, def: 102, spa: 92, spd: 90, spe: 112},
		abilities: {0: "Clear Body", 1: "Tinted Lens"},
		heightm: 2.0,
		weightkg: 88.8,
		color: "White",
		eggGroups: ["Field"],
	},
 	ibushi: {
		num: 57,
		name: "Ibushi",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 114, atk: 87, def: 112, spa: 102, spd: 122, spe: 88},
		gender: "M",
		abilities: {0: "Minus", 1: "Air Lock", H: "Wind Rider"},
		heightm: 5.5,
		weightkg: 132.3,
		color: "Blue",
		eggGroups: ["Dragon"],
	},
 	narwa: {
		num: 58,
		name: "Narwa",
		types: ["Dragon", "Electric"],
		baseStats: {hp: 114, atk: 102, def: 87, spa: 122, spd: 88, spe: 112},
		gender: "F",
		abilities: {0: "Plus", 1: "Levitate", H: "Hadron Engine"},
		heightm: 6.6,
		weightkg: 154.3,
		color: "Yellow",
		eggGroups: ["Dragon"],
		otherFormes: ["Allmother Narwa"],
	},
 	allmothernarwa: {
		num: 58,
		name: "Allmother Narwa",
		baseSpecies: "Narwa",
		forme: "Mega",
		types: ["Electric", "Flying"],
		baseStats: {hp: 110, atk: 108, def: 110, spa: 160, spd: 130, spe: 107},
		gender: "F",
		abilities: {0: "Parental Bond"},
		heightm: 6.6,
		weightkg: 154.3,
		color: "Yellow",
		eggGroups: ["Dragon"],
		requiredItem: "Narwanite",
	},
 	amatsu: {
		num: 59,
		name: "Amatsu",
		types: ["Dragon", "Water"],
		baseStats: {hp: 100, atk: 101, def: 98, spa: 135, spd: 124, spe: 98},
		abilities: {0: "Drizzle", 1: "Delta Stream"},
		heightm: 8.5,
		weightkg: 392.0,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
 	valstrax: {
		num: 60,
		name: "Valstrax",
		types: ["Dragon", "Steel"],
		baseStats: {hp: 95, atk: 102, def: 104, spa: 122, spd: 92, spe: 140},
		abilities: {0: "Dragon’s Maw", 1: "Mold Breaker"},
		heightm: 2.5,
		weightkg: 50.0,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
 	gaismagorm: {
		num: 61,
		name: "Gaismagorm",
		types: ["Dark", "Dragon"],
		baseStats: {hp: 135, atk: 106, def: 117, spa: 103, spd: 114, spe: 60},
		abilities: {0: "Sheer Force", 1: "Berserk", H: "Regenerator"},
		heightm: 8.0,
		weightkg: 888.0,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
}