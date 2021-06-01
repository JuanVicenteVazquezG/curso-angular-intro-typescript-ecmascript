/*
    ===== Código de TypeScript =====
*/



let habilities: Array <string>   = ['Bash','Counter','healing'];

habilities.push('pepe');

interface Persona {
    name: string;
    hp: number;
    habilities: string[];
    puebloNatal?: string;
}

const personaje:Persona = {
    name: 'Strider',
    hp: 100,
    habilities: [],
}

personaje.puebloNatal = 'Pueblo Paleta'

console.table(personaje) ;

