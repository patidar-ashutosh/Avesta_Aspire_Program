export class User {
  constructor(public name: string, public email: string) {}

  isEmailValid(): boolean {
    return this.email.includes("@");
  }
}
