import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FilterType } from "../Typescript/EnumFilterType";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import searchInfoState from "../atoms/searchInfoState";
import filteredBooksState from "../atoms/filteredBooksState";
import pureBooksState from "../atoms/pureBooksState";
import checkboxState from "../atoms/checkboxState";
import filter from "../Typescript/Filter";

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

  useEffect(() => {
    if (infoState.category === "Category" || infoState.category === "") {
      setCheckboxIsDisabled({ az: true, author: true, year: true });
    } else {
      setCheckboxIsDisabled({ az: false, author: false, year: false });
    }
  }, [infoState.category]);

  useEffect(() => {
    const updateFilter = async () => {
      await filter(
        FilterType.searchKey, //måste göra ngn switch grejsimojsimoj
        setFilteredBooks,
        pureBooks,
        infoState
      );
    };
    updateFilter();
      }, [infoState.searchKey]);

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
