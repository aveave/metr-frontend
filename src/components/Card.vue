<template>
    <b-container fluid class="card">
        <b-row>
            <b-col>
                <b-row align-h="end">
                    <img src="../assets/card/heart-card.svg">
                </b-row>

                <b-row align-h="center">
                    <img src="../assets/header/image.png">
                </b-row>

                <b-row>
                    <b-col>
                        <h4 class="card-title">Бумага SVETOCOPY</h4>

                        <h6 class="card-subtitle mb-2 text-muted">Наличие: 582</h6>

                        <h5 class="price metr-text mt-4">$125</h5>
                    </b-col>
                </b-row>

                <b-row align-v="center">
                    <b-col>
                        <button class="card-basket-btn">В корзину</button>
                    </b-col>
                    <b-col offset-md="1">

                        <select class="card-count-btn">
                            <option selected>1</option>
                            <option value="1">Green</option>
                            <option value="2">Blue</option>
                            <option value="3">Red</option>
                        </select>

                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        name: "Card"
    })
</script>

<style>
    .card {
        width: 318px;
        height: 370px;
    }

    .card img {
        margin: 10px;
    }

    .card-basket-btn {
        width: 110px;
        height: 30px;
    }

    .card-count-btn {
        width: 85px;
        height: 30px;
    }

    .btn-color {
        background-color: #EF9A41;
        border-radius: 5px;
        color: white;
        border-color: #EF9A41;
    }

    .metr-text {
        color: #EF9A41;
    }
</style>