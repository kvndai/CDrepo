export class User {
   constructor(
      public id: number = null,
      public firstName: string = '',
      public lastName: string = '',
      public email: string = '',
      public password: string = '',
      public conf_pw: string = '',
      public street: string = '',
      public unit: string = '',
      public city: string = '',
      public state: string = '',
      public createdAt: Date = new Date(),
      public updatedAt: Date = new Date()
   ){}
}
