import  BookModel from "./BookModel";

class CartModel {
    constructor(book: BookModel, quantity: number) {
        this.book = book;
        this.quantity = quantity;
    }
    book: BookModel;
    quantity: number = 0;
}

export default CartModel;