import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action
} from "vuex-module-decorators";

import { UserLoginSubmit, UserRegisterSubmit, UserInfo } from "../../models";
import { loginUser, registerUser, updateUser, setJWT } from "../../api";
import store from "@/store";

@Module({
  namespaced: true,
  name: "user",
  dynamic: true,
  store
})
class UserModule extends VuexModule {
  userInfo: UserInfo | null = null;

  get getUserInfo() {
    return this.userInfo;
  }

  @Mutation
  setUserInfo(userInfo: UserInfo) {
    this.userInfo = userInfo;
    // setJWT(user.token);
  }

  @Action({ commit: "setUserInfo" })
  async login(userSubmission: UserLoginSubmit) {
    const userInfo = await loginUser(userSubmission);
    return userInfo;
  }

  @Action({ commit: "setUserInfo" })
  async register(userRegister: UserRegisterSubmit) {
    const userInfo = await registerUser(userRegister);
    return userInfo;
  }

  @Mutation
  updateUserInfo(userInfo: UserInfo) {
    if (userInfo) {
      this.userInfo = userInfo;
    }
  }

  @Action({ commit: "updateUserInfo" })
  async savePersonal(userToUpdate: UserInfo) {
    const userInfo = await updateUser(userToUpdate);
    if (userInfo) {
      return userToUpdate;
    } else {
      return null;
    }
  }
}

export default getModule(UserModule);
