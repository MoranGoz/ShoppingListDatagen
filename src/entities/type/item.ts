 export default class Item {
     constructor(
         public id: number,
         public name: string,
         public price: number,
         public description: string,
         public currency: string = 'Nis',
         public isActive: boolean = true
     ) {
     }
 }
