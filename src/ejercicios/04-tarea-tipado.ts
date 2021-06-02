/*
    ===== Código de TypeScript =====
*/
/*
    ===== Código de TypeScript =====
*/

interface Address {
    street?: string;
    country?: string;
    city?: string;
  }
  interface SuperHeroe {
    name: string;
    age?: number;
    address?: Address;
    showAddress: () => string;
  }
  
  const superHeroe: SuperHeroe = {
    name: "Spiderman",
    age: 30,
    address: {
      street: "Main st.",
      country: "USA",
      city: "NY",
    },
    showAddress() {
      return this.name + "," + this.address.street + ", " +', '+this.address.country;
    },
  };
  
  superHeroe.address.city = 'TX';
  console.log(superHeroe.showAddress());