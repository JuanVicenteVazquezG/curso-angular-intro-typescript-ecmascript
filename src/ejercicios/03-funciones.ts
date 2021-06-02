/*
    ===== Código de TypeScript =====
*/

const sumar = (a: string, b?: string): string => {
    return (a + b).toString();
  };
  
  function multiplicar(numero: number, otroNumero: number, base = 3): number {
    return numero * base;
  }
  
  interface PersonajeLOR {
    name: string,
    pv: number,
    showHP: ()=>void, 
  }
  
  function cure(personaje: PersonajeLOR, cureX: number): void {
    personaje.pv += cureX;
    console.log(personaje);
  }
  
  const newCharacter: PersonajeLOR = {
      pv:50,
      name:'Strider',
      showHP(){
          console.log(`Health Points ${this.pv}`);
      }
  }
  
  cure(newCharacter, 23);