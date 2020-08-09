<template>
    <form action="#" method="POST" @submit.prevent="search">
        <div class="form-group inline">
            <label for="">Buscar por id</label>
            <input
                type="number"
                min="1"
                max="14"
                step="1"
                inputmode="numeric"
                required
                v-model.number="value"
            />
        </div>
        <button type="submit" :disabled="isSearchLoading">
            Consultar
        </button>
    </form>
</template>

<script>
import { fetchById } from "@/services/regres.in/api/users";

export default {
    name: "TheSearchUser",
    data: () => ({
        value: null,
        isSearchLoading: false,
    }),
    methods: {
        search() {
            this.isSearchLoading = true;

            fetchById({id: this.value})
                .then((data) => {
                    this.$emit("user-found", { ...data.data });
                })
                .catch((err) => {
                    this.$emit("platform-error", {
                        message: "Lo sentimos, intente más tarde.",
                    });
                })
                .finally(() => {
                    this.isSearchLoading = false;
                });
        },
    },
};
</script>

<style></style>
