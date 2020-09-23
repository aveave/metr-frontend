<template>
    <header class="header-container">
        <b-row>
            <b-col>
                <b-row align-h="center">
                    <b-col>
                        <img src="../assets/header/logo.svg">
                    </b-col>
                    <b-col>
                        <b-button class="btn-color">Каталог</b-button>
                    </b-col>
                </b-row>
            </b-col>

            <b-col cols="5" lg="4" align-self="end">
                <b-input-group class="header-search-panel">
                    <b-form-input size="sm" placeholder="Я хотел бы найти...."></b-form-input>
                    <b-input-group-append>
                        <b-button size="sm" class="mb-2 btn-color">
                            <b-icon icon="search"></b-icon>
                        </b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-col>

            <b-col>
                <b-row class="header-right-panel" align-h="end">
                    <button>
                        <b-col>
                            <img src="../assets/header/heart.svg">
                            <div>Избранное</div>
                        </b-col>
                    </button>

                    <button>
                        <b-col>
                            <img src="../assets/header/user.svg">
                            <div>Мой Мэтр</div>
                        </b-col>
                    </button>

                    <button>
                        <b-col>
                            <img src="../assets/header/group.svg">
                            <div>Заказы</div>
                        </b-col>
                    </button>

                    <button>
                        <b-col>
                            <img src="../assets/header/supermarket.svg">
                            <div>Корзина</div>
                        </b-col>
                    </button>
                </b-row>

            </b-col>
        </b-row>
        <b-row>
            <b-col cols="10">
                <b-row align-h="center">
                    <ul class="nav">
                        <li>
                            <a class="nav-link active" href="#">Бренды</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Акции</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Новости</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Доставка и оплата</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">О компании</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Отзывы</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Поступления</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Заказ по прайсу</a>
                        </li>
                        <li>
                            <a class="nav-link" href="#">Контакты</a>
                        </li>
                    </ul>
                </b-row>
            </b-col>
            <b-col align-self="center" offset-sm="1">
                <div class="bold-text">+7(473) 246-07-07</div>
            </b-col>
        </b-row>
    </header>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Header",
        data: () => ({})
    });
</script>

<style>
    .header-container {
        margin: 10px;
        background-color: #FFFFFF;
    }

    .header-icon {
        width: 16px;
        height: 16px;
    }

    .btn-color {
        background-color: #EF9A41;
        border-radius: 5px;
        color: white;
        border-color: #EF9A41;
    }

    .header-right-panel button {
        background-color: white;
        border: none;
    }

    .header-search-panel input,
    .header-search-panel button {
        border-color: #EF9A41;
    }

    input,
    button,
    select,
    textarea,
    a {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.03em;
        color: #231F20;
    }


    .bold-text {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #231F20;
    }

    input::placeholder {
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: #9D9D9D;
    }
</style>