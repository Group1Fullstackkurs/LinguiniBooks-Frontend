import { FilterType } from "./EnumFilterType";
import { SetterOrUpdater } from "recoil";
import BookModel from "./BookModel";
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
        filteredBooks.filter(books => books.category === infoState?.category).sort((a, b) => {
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
        filteredBooks.filter(books => books.category === infoState?.category).sort((a, b) => {
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
        filteredBooks.filter(books => books.category === infoState?.category).sort((a, b) => b.publicationYear - a.publicationYear)
      );
      break;

    case FilterType.searchKey:
      if (infoState === null) {
        throw new Error("ID:10T - infoState is null");
      }
      setFilteredBooks(
        filteredBooks.filter((book) => {
          if (infoState.searchKey == "") {
            return book;
          } else if (
            book.title.toLowerCase().includes(infoState.searchKey.toLowerCase())
          ) {
            return book;
          }
        })
      );
      break;

    default:
      throw new Error("ID:10T - Filter.ts");
  }
};
export default filter;
