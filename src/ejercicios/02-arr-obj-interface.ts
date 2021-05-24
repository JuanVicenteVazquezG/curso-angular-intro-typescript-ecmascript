/*
    ===== Código de TypeScript =====
*/

let habilidades: Array <string | number  | boolean>  =['Bash','Counter','Healing'];
habilidades.push(true);

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?:string;
}

const personaje: Personaje = {
    nombre: 'String',
    hp:  100,
    habilidades : ['Bash', 'Counter', 'Healing'],
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);