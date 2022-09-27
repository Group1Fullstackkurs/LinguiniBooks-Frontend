import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import checkboxState from "../atoms/checkboxState";
import filteredBooksState from "../atoms/filteredBooksState";
import pureBooksState from "../atoms/pureBooksState";
import searchInfoState from "../atoms/searchInfoState";
import { FilterType } from "../Typescript/EnumFilterType";
import filter from "../Typescript/Filter";
import "./Header.css";

function Header() {
  const [infoState, setInfoState] = useRecoilState(searchInfoState);
  const [isChecked, setIsChecked] = useRecoilState(checkboxState);
  const [checkboxIsDisabled, setCheckboxIsDisabled] = useState({
    az: false,
    author: false,
    year: false,
  });
  const [filteredBooks, setFilteredBooks] = useRecoilState(filteredBooksState);
  const pureBooks = useRecoilValue(pureBooksState);

  // disable checkbox if no category is selected
  useEffect(() => {
    if (infoState.category === "Category" || infoState.category === "") {
      setCheckboxIsDisabled({ az: true, author: true, year: true });
    } else {
      setCheckboxIsDisabled({ az: false, author: false, year: false });
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

  return (
    <div className="navbar">
      <div className="homepage-header">
        <Link to="/">
          <h1>Linguini Books</h1>
        </Link>

        <div className="searchbar-container">
          <div className="searchbar">
            <select
              name="menu"
              onChange={(event) =>
                setInfoState({
                  searchKey: infoState.searchKey,
                  category: event.target.value,
                })
              }
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
              placeholder="Search for a book, e.g Parry Hotter"
              onChange={(event) =>
                setInfoState({
                  searchKey: event.target.value,
                  category: infoState.category,
                })
              }
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
        <Link to="/">
          <div className="cart-box">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
