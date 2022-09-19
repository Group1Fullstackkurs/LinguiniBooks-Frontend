import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import searchInfoState from "../atoms/searchInfoState";
import { useRecoilState } from "recoil";

function Header() {
  const [infoState, setInfoState] = useRecoilState(searchInfoState);

  return (
    <div className="homepage-header">
      <h1>Linguini </h1>
      <h1>Books</h1>
      <div className="searchbar">
        <select
          name="menu"
          id="menu"
          onChange={(event) =>
            setInfoState({
              category: event.target.value,
              filter: infoState.filter,
            })
          }
        >
          <option value="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Classics">Classics</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
        </select>
        <input
          type="text"
          placeholder="Search for a book, e.g Parry Hotter"
          onChange={(event) =>
            setInfoState({
              category: infoState.category,
              filter: event.target.value,
            })
          }
        />
      </div>
      <div className="login-box">
        <FontAwesomeIcon icon={faUser} />
        <p>Sign in</p>
      </div>
      <div className="cart-box">
        <FontAwesomeIcon icon={faCartShopping} />
        <p>Cart</p>
      </div>
    </div>
  );
}
export default Header;
