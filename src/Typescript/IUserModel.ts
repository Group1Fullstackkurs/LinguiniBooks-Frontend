import IBookModel from "./IBookModel";

interface IUserModel {
  Id: string;
  Name: string;
  Mail: string;
  Hash: string;
  Salt: string;
  IsBlockedSelling: boolean;
  IsBlockedAccount: boolean;
  IsAdmin: boolean;
  IsSeller: boolean;
  IsActivatedAccount: boolean;
  IsActivatedSelling: boolean;
  BoughtBooks: Array<IBookModel>;
}
export default IUserModel;
