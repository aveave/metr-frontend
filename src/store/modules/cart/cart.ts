import { Module, VuexModule, getModule, Mutation, Action, MutationAction } from "vuex-module-decorators";
import { CartItemEntity, CartPayload, BookedItem, BookItemResponse } from "../../models";
import { getCartResponse, addItemToCart } from "../../api";
import store from "@/store";

@Module({
    dynamic: true,
    namespaced: true,
    name: "cart",
    store
})
class CartModule extends VuexModule {
    cartProducts: CartItemEntity[]  = [];
    quantity = 0;
    sum = 0;

    cartItemIds: string[] = [];
    allSelected = false;

    @Mutation
    selectAll() {
      this.cartItemIds = [];
      if (this.allSelected) {
        for (const cartItem in this.cartProducts) {
          this.cartItemIds.push(this.cartProducts[cartItem].productId);
        }
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

        const bookedItem = { name: bookItemResponse.name, 
                         price:  bookItemResponse.price, 
                         productId: bookItemResponse.product_id, 
                         quantity: bookItemResponse.quantity, 
                         picture: bookItemResponse.picture
                        }
        const existedCartItem = this.cartProducts.find(cartItem => cartItem.productId == bookedItem.productId);

        if (existedCartItem) {
            existedCartItem.quantity = existedCartItem.quantity + bookedItem.quantity;
            this.sum += bookedItem.quantity * bookedItem.price;
        } else {
            this.cartProducts.push(bookedItem);
            this.quantity++;
            this.sum += bookedItem.quantity * bookedItem.price;
        }

    }

    @Action({ commit: 'setBookItemResponse' })
    async saveItemInBusket(bookedItem: BookedItem) {
        const bookItemResponse = await addItemToCart(bookedItem);
        return bookItemResponse;
    }

    @Mutation
    deleteCartItem(cartItem: CartItemEntity) {
        this.cartProducts = this.cartProducts.filter( item => item.productId != cartItem.productId);
        return this.cartProducts;
    }
}

export default getModule(CartModule);