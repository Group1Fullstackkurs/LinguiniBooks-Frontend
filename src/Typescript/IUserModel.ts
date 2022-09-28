import { IBookModel } from "./IBookModel";

export interface IUserModel {
  id: string;
  name: string;
  mail: string;
  hash: string;
  salt: string;
  isBlockedSelling: boolean;
  isBlockedAccount: boolean;
  isAdmin: boolean;
  isSeller: boolean;
  isActivatedAccount: boolean;
  isActivatedSelling: boolean;
  boughtBooks: Array<IBookModel>;
}
