import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import checkboxState from "../atoms/checkboxState";
import filteredBooksState from "../atoms/filteredBooksState";
import pureBooksState from "../atoms/pureBooksState";
import searchInfoState from "../atoms/searchInfoState";
import { FilterType } from "../Typescript/EnumFilterType";
import filter from "../Typescript/Filter";
import "./Header.css";

 // handles search input, (TODO: cart)
function Header() {
  const [checkboxIsDisabled, setCheckboxIsDisabled] = useState({az: false, author: false, year: false});
  const [isSearchDisabled, setIsSearchDisabled] = useState(false);
  const [isChecked, setIsChecked] = useRecoilState(checkboxState);
  const [infoState, setInfoState] = useRecoilState(searchInfoState);
  const pureBooks = useRecoilValue(pureBooksState);
  const setFilteredBooks = useSetRecoilState(filteredBooksState);

  // disable checkbox if no category is selected
  useEffect(() => {
    if (infoState.category === "Category" || infoState.category === "") {
      setCheckboxIsDisabled({ az: true, author: true, year: true });
      setIsSearchDisabled(false);
    } else {
      setCheckboxIsDisabled({ az: false, author: false, year: false });
      setIsSearchDisabled(true);
    }
      
  }, [infoState.category]);

  // filter books according to search input, category and checkbox
  useEffect(() => {
    const updateFilter = async () => {
      await filter(handleFilterType(), setFilteredBooks, pureBooks, infoState);
    };
    updateFilter();
  }, [infoState.searchKey, isChecked]);

  const handleFilterType = () => {
    if (isChecked.az === true && isChecked.author === false && isChecked.year === false) return FilterType.az; 
    else if (isChecked.author === true && isChecked.az === false && isChecked.year === false) return FilterType.author;
    else if (isChecked.year === true && isChecked.az === false && isChecked.author === false) return FilterType.year;
    else return FilterType.searchKey;
  };

  // 
  const handleCategory = (event:any) => {
    setInfoState({
      searchKey: infoState.searchKey,
      category: event.target.value,
    })
    setIsChecked({az: false, author: false, year: false});
  }

   return (
      <div className="homepage-header">
        <Link to="/">
          <h1>Linguini Books</h1>
        </Link>

        <div className="searchbar-container">
          <div className="searchbar">
            <select
              name="menu"
              onChange={handleCategory}
            >
              <option value="Category">Category</option>
              <option value="Comedy">Comedy</option>
              <option value="Detective">Detective</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
            </select>
            <input
              type="text"
              placeholder="Search for a book title, e.g One Piece(Real)"
              onChange={(event) =>
                setInfoState({
                  searchKey: event.target.value,
                  category: infoState.category,
                })
              }
              disabled={isSearchDisabled}
            />
          </div>
          <div className="checkbox-container">
            <label>
              <input
                onChange={(event) =>
                  setIsChecked({
                    az: event.target.checked,
                    author: false,
                    year: false,
                  })
                }
                type="checkbox"
                checked={isChecked.az}
                disabled={checkboxIsDisabled.az}
              />
              A-Z
            </label>
            <label>
              <input
                onChange={(event) =>
                  setIsChecked({
                    az: false,
                    author: event.target.checked,
                    year: false,
                  })
                }
                type="checkbox"
                checked={isChecked.author}
                disabled={checkboxIsDisabled.author}
              />
              Author
            </label>
            <label>
              <input
                onChange={(event) =>
                  setIsChecked({
                    az: false,
                    author: false,
                    year: event.target.checked,
                  })
                }
                type="checkbox"
                checked={isChecked.year}
                disabled={checkboxIsDisabled.year}
              />
              Publication Year
            </label>
          </div>
        </div>

        <Link to="/Profilepage">
          <div className="login-box">
            <FontAwesomeIcon icon={faUser} />
            <p>Sign in</p>
          </div>
        </Link>
        <Link to="/Cartpage">
          <div className="cart-box">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Cart</p>
          </div>
        </Link>
      </div>
  );
}
export default Header;
