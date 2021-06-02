/*
    ===== Código de TypeScript =====
*/

interface Player {
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details{
    author: string,
    year: number;
   }

const player: Player = {
    volume:90,
    second: 26,
    song:"Mess",
    details: {
        author: "Ed Sheran",
        year: 2015,
    }
}

const {volume, second, song, details:{author: authorDetail}} = player;

console.log(`The current Volume is ${volume}`);
console.log(`The current second is ${second}`);
console.log(`The current song is ${song}`);
console.log(`The current Author is ${authorDetail}`);