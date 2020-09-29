<template>
    <b-modal id="modal-login" hide-header hide-footer>
        <b-tabs content-class="mt-3" fill>
            <b-tab title="Войти" active>
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-input id="login-identifier-input" class="login-input" v-model="loginIdentifier"
                        placeholder="Имя пользователя или адрес электронной почты " required></b-form-input>

                    <b-form-input id="password-login-input" class="login-input" v-model="loginPassword"
                        placeholder="Пароль" required></b-form-input>
                </form>

                <b-row>
                    <b-col offset-sm="1">
                        <b-form-checkbox id="accept-checkbox" v-model="loginStatus" name="checkbox-1" value="accepted"
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
            <b-tab title="Зарегистрироваться">
                <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-input id="name-register-input" class="login-input" v-model="registerName" placeholder="Имя пользователя"
                        required></b-form-input>

                    <b-form-input id="email-register-input" class="login-input" v-model="registerEmail" placeholder="Электронная почта"
                        required></b-form-input>

                    <b-form-input id="password-register-input" class="login-input" v-model="registerPassword" placeholder="Пароль"
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

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class Login extends Vue {
        
        registerName = "";
        registerEmail = "";
        registerPassword = "";

        loginIdentifier = "";
        loginPassword = "";

        loginStatus = false;
    };
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