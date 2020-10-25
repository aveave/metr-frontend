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

  get allSelected() {
    return this.cartItemIds.every(e => Boolean(e));
  }

  @Mutation
  initCartItemIds() {
    this.cartItemIds = this.cartProducts.map(() => false);
  }

  @Mutation
  selectAll() {
    const checkAll = this.cartItemIds.every(e => Boolean(e));
    if (checkAll) {
      this.cartItemIds = this.cartProducts.map(() => false);
    } else {
      this.cartItemIds = this.cartProducts.map(() => true);
    }
  }

  @Mutation
  toggleOneItem(index: number) {
    this.cartItemIds = this.cartItemIds.map((item, idx) => {
      if (idx === index) {
        return !item;
      } else {
        return item;
      }
    });
  }

  @Mutation
  setCartState(cartState: CartPayload) {
    if (cartState.products) {
      this.cartProducts = cartState.products;
      this.cartItemIds = this.cartProducts.map(() => false);
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
    if (cartItem) {
      this.quantity--;
      this.sum = this.sum - cartItem.quantity * cartItem.price;
      this.cartProducts = this.cartProducts.filter(
        item => item.productId != cartItem.productId
      );
    }
  }

  @Action({ commit: "updateCartAfterDelete" })
  async deleteCartItem(cartItem: CartItemEntity) {
    const deleteCartResponse = await deleteFromCart(cartItem.productId);
    if (deleteCartResponse) {
      return cartItem;
    } else {
      return null;
    }
  }
}

export default getModule(CartModule);
