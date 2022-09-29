import { IBookModel } from "./IBookModel";

export class UserModel {
  id: string = "";
  name: string = "";
  mail: string = "";
  hash: string ="";
  salt: string ="";
  isBlockedSelling: boolean = true;
  isBlockedAccount: boolean = true;
  isAdmin: boolean = true;
  isSeller: boolean = true;
  isActivatedAccount: boolean = true;
  isActivatedSelling: boolean = true;
  boughtBooks: Array<IBookModel> = [];
}
