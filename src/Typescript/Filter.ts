import { FilterType } from "./EnumFilterType";
import filteredBooksState from "../atoms/filteredBooksState";
import pureBookState from "../atoms/pureBooksState";
import { useRecoilState } from "recoil";
import { SetterOrUpdater } from "recoil";
import { BookModel } from "./BookModel";
import IInfoState from "./IInfoState";

const filter = async (
  filterType: FilterType,
  setFilteredBooks: SetterOrUpdater<BookModel[]>,
  getPureBooks: Array<BookModel>,
  infoState: IInfoState | null = null
) => {
  let filteredBooks = [...getPureBooks];
  switch (filterType) {
    case FilterType.az:
      setFilteredBooks(
        filteredBooks.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        })
      );
      break;
    case FilterType.author:
      setFilteredBooks(
        filteredBooks.sort((a, b) => {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        })
      );
      break;
    case FilterType.year:
      setFilteredBooks(
        filteredBooks.sort((a, b) => b.publicationYear - a.publicationYear)
      );
      break;
    default:
      console.log("ERROR ID:10T");
      break;
  }
};
export default filter;
