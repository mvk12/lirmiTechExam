<template>
    <div>
        <table>
            <thead class="primary">
                <tr>
                    <th></th>
                    <th>Nombre(s)</th>
                    <th>Apellido(s)</th>
                    <th>Correo electrónico</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="loading">
                    <td colspan="2" class="text-center">Cargando...</td>
                </tr>
                <template v-else-if="profesores.length">
                    <tr v-for="(profesor, key) in profesores" :key="key">
                        <td class="text-center">
                            <button
                                class="delete"
                                @click.prevent="doRemove(profesor)"
                                :disabled="profesor._loading"
                            >
                                Eliminar
                            </button>
                        </td>
                        <td>{{ profesor.first_name }}</td>
                        <td>{{ profesor.last_name }}</td>
                        <td>{{ profesor.email }}</td>
                    </tr>
                </template>
                <tr v-else>
                    <td colspan="3" class="text-center">
                        No existen usuarios registrados
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
            Página:
            <button
                @click="
                    () => {
                        page -= 1;
                    }
                "
                :disabled="page === 1"
            >
                -
            </button>
            <button @click="search" class="active">
                {{ page }}
            </button>
            <button
                @click="
                    () => {
                        page += 1;
                    }
                "
                :disabled="page >= maxPage"
            >
                +
            </button>
        </div>
    </div>
</template>

<script>
import { fetchProfesores, deleteProfesor } from "@/services/api/profesores";
import EventBus from "@/event-bus";

export default {
    name: "TheProfesoresTable",
    data: () => ({
        profesores: [],
        loading: false,
        page: 1,
        maxPage: null,
    }),
    mounted() {
        this.$nextTick(this.search);
    },
    methods: {
        search() {
            const _app = this;
            _app.loading = true;

            fetchProfesores({ page: _app.page })
                .then((data) => {
                    _app.$set(
                        _app,
                        "profesores",
                        data.data.map((item) => ({ ...item, _loading: false }))
                    );
                    _app.maxPage = data.meta.last_page;
                })
                .catch((err) => {
                    EventBus.$emit("platform-error", {
                        message: "Lo sentimos, intente más tarde.",
                    });

                    if (err && err.response) {
                    }
                })
                .finally(() => {
                    _app.loading = false;
                });
        },
        doRemove(profesor) {
            if (
                !confirm(
                    `¿Desea eliminar a "${profesor.first_name} ${profesor.last_name}"?`
                )
            ) {
                return;
            }

            const _app = this;

            profesor._loading = true;
            deleteProfesor({ id: profesor.id })
                .then((data) => {
                    EventBus.$emit("platform-error", {
                        message: data.message || data.error,
                    });
                })
                .catch((err) => {
                    EventBus.$emit("platform-error", {
                        message: "Lo sentimos, intente más tarde.",
                    });

                    if (err && err.response) {
                    }
                })
                .finally(() => {
                    setTimeout(_app.search, 200);
                });
        },
    },
    watch: {
        page() {
            if (this.page > 0) {
                this.search();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.delete {
    background-color: rgb(139, 39, 39);
    color: white;
}
</style>
