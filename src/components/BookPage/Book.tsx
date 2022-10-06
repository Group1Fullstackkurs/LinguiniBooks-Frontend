import { useState } from "react";
import { useRecoilState } from "recoil";
import cartState  from "../../atoms/cartState";
import { BookModel } from "../../Typescript/BookModel";
import CartModel from "../../Typescript/CartModel";
import "./Book.css";

// how each book will be displayed
function Book(book: BookModel) {
  const [isShowInfo, setIsShowInfo] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);
 
  const ShowInfo = () =>{
    return isShowInfo ? (
      <div className="book-info" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick()} >
        <h2>{book.title}</h2>
        <h3>by {book.firstName} {book.lastName}</h3>
        <p>Publication Year: {book.publicationYear}</p>
        <p>Category: {book.category}</p>
        <p>Condition: {book.new ? "New" : "Used"}</p>
        <p>Seller: {book.seller}</p>
        <p>Quantity: {book.stock}</p>
      </div>
    ) : null; 
  }

  const handleClick = () => {
    setIsShowInfo(!isShowInfo);
  }

  const addCartBtn = (book: BookModel) => { 
    if(book.stock > 0) {
      return (
        <div className="book-cart-btn"
        onClick={(event: React.MouseEvent<HTMLElement>) => handleAddCart(book)}
          >
        Add to cart
      </div>
      )
    }
    return(
      <div className="book-cart-btn" style={{background:'#bcbcbc'}}>
        Out of stock
        </div>
    )
  }

  const handleAddCart = (book: BookModel) => {
    let isFound: boolean = false;

    cart.map((item, i) => {
      if (item.book.id === book.id) {
        let newCart: Array<CartModel> = JSON.parse(JSON.stringify(cart))
        if(book.stock > newCart[i].quantity){
          newCart[i].quantity++;
        }
        setCart(newCart);
        isFound = true;
        return;
      }
    });
    if(!isFound) {
      let newBook: CartModel = new CartModel(book, 1);
      setCart([...cart, newBook]);
    }
    
    
    console.log("Cart: ", cart);

  }

  return (
    <div className="book-container">
      < ShowInfo />
      <div className="book" onClick={(event: React.MouseEvent<HTMLElement>) => handleClick()}>
        {(book.new) ? <div className="book-new-icon"> New </div> : <div className="book-new-icon"> Used </div>}
        <div className="book-title">
          <p>{book.title}</p>
        </div>
        <div className="book-author">
          <p>{book.firstName} {book.lastName}</p>
        </div>
      </div>
      <div className="book-sale-info">
        <p>{book.price} ({book.publicationYear})</p>
          {addCartBtn(book)}
      </div>
    </div>
  );
}
export default Book;
