<template>
    <b-modal id="modal-login" hide-header hide-footer>
        <b-tabs content-class="mt-3" fill>
            <b-tab title="Зарегистрироваться" active>

                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-input id="name-input" class="login-input" v-model="name" :state="nameState"
                        placeholder="Имя пользователя или адрес электронной почты " required></b-form-input>

                    <b-form-input id="password-input" class="login-input" v-model="password" :state="passwordState"
                        placeholder="Пароль" required></b-form-input>
                </form>

                <b-row>
                    <b-col offset-sm="1">
                        <b-form-checkbox id="accept-checkbox" v-model="status" name="checkbox-1" value="accepted"
                            unchecked-value="not_accepted">
                            Запомнить меня
                        </b-form-checkbox>
                    </b-col>
                    <b-col offset-sm="2">
                        <b-link href="#">Забыли пароль?</b-link>
                    </b-col>
                </b-row>
                <b-row>
                    <button class="login-btn">Войти</button>
                </b-row>


            </b-tab>
            <b-tab title="Войти">

                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-input id="name-input" class="login-input" v-model="name" placeholder="Имя пользователя"
                        required></b-form-input>

                    <b-form-input id="email-input" class="login-input" v-model="email" placeholder="Электронная почта"
                        required></b-form-input>

                    <b-form-input id="password-input" class="login-input" v-model="password" placeholder="Пароль"
                        required>
                    </b-form-input>
                </form>
                <b-row>
                    <button class="login-btn">Создать аккаунт</button>
                </b-row>
            </b-tab>
        </b-tabs>
    </b-modal>
</template>


<script>
    import Vue from "vue";

    export default Vue.extend({
        name: "Login",
        data: () => ({

        }),
        components: {

        }
    });
</script>


<style>
    .login-input {
        margin: 10px;
    }

    .login-btn {
        width: 100%;
        margin: 20px;
    }

    .login-switch-btn {
        width: 50%;
        background-color: Transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
        color: #000;
        font-size: 18px;
    }
</style>