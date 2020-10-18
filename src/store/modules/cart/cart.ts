import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import {
  CartItemEntity,
  CartPayload,
  BookedItem,
  BookItemResponse
} from "../../models";
import { getCartResponse, addItemToCart, deleteFromCart } from "../../api";
import store from "@/store";

@Module({
  namespaced: true,
  name: "cart",
  dynamic: true,
  store
})
class CartModule extends VuexModule {
  cartProducts: CartItemEntity[] = [];
  quantity = 0;
  sum = 0;

  cartItemIds: boolean[] = [];
  allSelected = this.cartItemIds.every(e => Boolean(e));

  @Mutation
  initCartItemIds() {
    this.cartItemIds = this.cartProducts.map(e => false);
  }

  @Mutation
  selectAll() {
    console.log("mutation to select");
    if (this.allSelected) {
      console.log("allSelected true");
      this.cartItemIds = this.cartProducts.map(e => false);
      this.allSelected = this.cartItemIds.every(e => Boolean(e));
    } else {
      console.log("allSelected false");
      this.cartItemIds = this.cartProducts.map(e => true);
      this.allSelected = this.cartItemIds.every(e => Boolean(e));
    }
  }

  @Mutation
  select() {
    this.allSelected = false;
  }

  @Mutation
  setCartState(cartState: CartPayload) {
    if (cartState.products) {
      this.cartProducts = cartState.products;
      this.cartItemIds = this.cartProducts.map(e => false);
      this.allSelected = this.cartItemIds.every(e => Boolean(e));
    }
    this.quantity = cartState.quantity;
    this.sum = cartState.sum;
  }

  @Action({ commit: "setCartState" })
  async uploadCartItems(): Promise<CartPayload> {
    const cartResponse = await getCartResponse();
    return cartResponse.payload;
  }

  @Mutation
  setBookItemResponse(bookItemResponse: BookItemResponse) {
    const bookedItem = {
      name: bookItemResponse.name,
      price: bookItemResponse.price,
      productId: bookItemResponse.product_id,
      quantity: bookItemResponse.quantity,
      picture: bookItemResponse.picture
    };
    const existedCartItem = this.cartProducts.find(
      cartItem => cartItem.productId == bookedItem.productId
    );

    if (existedCartItem) {
      existedCartItem.quantity = existedCartItem.quantity + bookedItem.quantity;
      this.sum += bookedItem.quantity * bookedItem.price;
    } else {
      this.cartProducts.push(bookedItem);
      this.quantity++;
      this.sum += bookedItem.quantity * bookedItem.price;
    }
  }

  @Action({ commit: "setBookItemResponse" })
  async saveItemInBusket(bookedItem: BookedItem) {
    const bookItemResponse = await addItemToCart(bookedItem);
    return bookItemResponse;
  }

  @Mutation
  updateCartAfterDelete(cartItem: CartItemEntity) {
    this.cartProducts = this.cartProducts.filter(
      item => item.productId != cartItem.productId
    );
  }

  @Action({ commit: "updateCartAfterDelete" })
  async deleteCartItem(cartItem: CartItemEntity) {
    const deleteCartResponse = await deleteFromCart(cartItem.productId);
    return deleteCartResponse;
  }
}

export default getModule(CartModule);
