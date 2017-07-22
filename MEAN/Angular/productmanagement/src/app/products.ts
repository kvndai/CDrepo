export class Products {
  constructor(
    public id: number = Math.floor(Math.random() * 9999) + 1,
    public title: string = null,
    public price: number = null,

  ) { }
}
