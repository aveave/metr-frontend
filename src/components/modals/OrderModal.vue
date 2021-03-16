<template>
    <b-modal id="modal-order" hide-footer>
        <div class="d-block text-center">
            <h3>Заказ с номером сформирован</h3>
        </div>
        <b-button class="mt-3" block @click="openMainPage">Перейти на главную</b-button>
        <b-button class="mt-3" block @click="$bvModal.hide('modal-order')">Закрыть</b-button>
    </b-modal>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class OrderModal extends Vue {

        openMainPage() {
            this.$router.push({name: 'home'});
        }
    }
</script>