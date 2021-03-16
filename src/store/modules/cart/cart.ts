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
import { getCartResponse, addItemToCart, deleteFromCart, deleteSelectedFromCart } from "../../api";
import store from "@/store";

@Module({
  namespaced: true,
  name: "cart",
  dynamic: true,
  store
})
class CartModule extends VuexModule {
  products: CartItemEntity[] = [];
  quantity = 0;
  sum = 0;

  cartItemIds: boolean[] = [];

  isError = false;
  errorMessage = '';

  get getProducts() {
    return this.products;
  }

  get getQuantity() {
    return this.quantity;
  }

  get getSum() {
    return this.sum;
  }

  get getCartItemIds() {
    return this.cartItemIds;
  }

  get allSelected() {
    return this.cartItemIds.every(e => Boolean(e));
  }

  @Mutation
  initCartItemIds() {
    this.cartItemIds = this.products.map(() => false);
  }

  @Mutation
  selectAll() {
    const checkAll = this.cartItemIds.every(e => Boolean(e));
    if (checkAll) {
      this.cartItemIds = this.products.map(() => false);
    } else {
      this.cartItemIds = this.products.map(() => true);
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
      this.products = cartState.products;
      this.cartItemIds = this.products.map(() => false);
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
    const existedCartItem = this.products.find(
      cartItem => cartItem.productId == bookedItem.productId
    );

    if (existedCartItem) {
      existedCartItem.quantity = existedCartItem.quantity + bookedItem.quantity;
      this.sum += bookedItem.quantity * bookedItem.price;
    } else {
      this.products.push(bookedItem);
      this.quantity++;
      this.sum += bookedItem.quantity * bookedItem.price;
    }
  }

  @Action({ commit: "setBookItemResponse" })
  async saveItemInBusket(bookedItem: BookedItem) {
    try {
    const bookItemResponse = await addItemToCart(bookedItem);
    return bookItemResponse;
    } catch(e) {
      console.log(e);
      // this.$bvModal.show("modal-order")
      this.$root.$emit("bv::show::modal", "modal-order");
    } 
  }

  @Mutation
  updateCartAfterDelete(cartItem: CartItemEntity) {
    if (cartItem) {
      this.quantity--;
      this.sum -= cartItem.quantity * cartItem.price;
      this.products = this.products.filter(
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

  @Mutation
  updateCartAfterDeleteSelected(selectedIds: string[]) {
    if (selectedIds.length > 0) {
      this.quantity -= selectedIds.length;

      this.products.forEach(cartItem => {
          if (selectedIds.includes(cartItem.productId)) {
            this.sum -= cartItem.quantity * cartItem.price;
          }
      });

      this.products = this.products
      .filter(cartItem => { 
        return !selectedIds.includes(cartItem.productId) 
        })
    }
  }

  @Action( { commit: "updateCartAfterDeleteSelected"})
  async deleteSelectedItems() {
    const selectedIds = this.cartItemIds.map((item, index) => {
        if (item) {
        return this.products[index].productId;
        }
    }).filter(item => typeof item !== 'undefined');
    const deleteSelectedResponse = await deleteSelectedFromCart(selectedIds);
    if (deleteSelectedResponse) {
      return selectedIds; 
    }
    else {
      return null;
    }
  }
}

export default getModule(CartModule);
