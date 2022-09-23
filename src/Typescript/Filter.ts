import { FilterType } from "./EnumFilterType"
import filteredBooksState from "../atoms/filteredBooksState"
import pureBookState from "../atoms/pureBookState"
import { useRecoilState } from "recoil"

const filter = async (filterType: FilterType) => {
  const [booksFilterd, setFilterdBooks] = useRecoilState(filteredBooksState)
  const [pureBooks, setPureBooks] = useRecoilState(pureBookState)

  let filteredBooks = [...pureBooks]
  switch (filterType) {
    case FilterType.az:
      setFilterdBooks(
        filteredBooks.sort((a, b) => {
          if (a.title < b.title) {
            return -1
          }
          if (a.title > b.title) {
            return 1
          }
          return 0
        })
      )
      break
    case FilterType.author:
      setFilterdBooks(
        filteredBooks.sort((a, b) => {
          if (a.firstName < b.firstName) {
            return -1
          }
          if (a.firstName > b.firstName) {
            return 1
          }
          return 0
        })
      )
      break
    case FilterType.year:
      setFilterdBooks(
        filteredBooks.sort((a, b) => a.publicationYear - b.publicationYear)
      )
      break
    default:
      console.log("ERROR ID:10T")
      break
  }
}
export default filter
