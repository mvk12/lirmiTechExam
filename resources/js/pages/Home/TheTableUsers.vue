<template>
    <div>
        <table>
            <thead class="primary">
                <tr>
                    <th>Nombre(s)</th>
                    <th>Apellidos(s)</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="loading">
                    <td colspan="2" class="text-center">Cargando...</td>
                </tr>
                <template v-else-if="users.length">
                    <tr
                        v-for="(user, key) in users"
                        :key="key"
                        @click="showModalUser(user)"
                    >
                        <td>{{ user.first_name }}</td>
                        <td>{{ user.last_name }}</td>
                    </tr>
                </template>
                <tr v-else>
                    <td colspan="2" class="text-center">
                        Sin registros disponibles
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
            Página:
            <button
                v-for="p in pages"
                :key="p"
                @click="
                    () => {
                        page = p;
                    }
                "
                :class="(page === p ? 'active' : '')"
            >
                {{ p }}
            </button>
        </div>
    </div>
</template>

<script>
import { fetchUsers } from "@/services/regres.in/api/users";
const PAGES = [1, 2];

export default {
    name: "TheTableUsers",
    data: () => ({
        loading: false,
        users: [],
        page: 1,
    }),
    mounted() {
        this.$nextTick(this.search);
    },
    methods: {
        search() {
            const _app = this;
            _app.loading = true;

            fetchUsers({ page: _app.page })
                .then((data) => {
                    _app.$set(_app, "users", [...data.data]);
                })
                .catch((err) => {
                    this.$emit("platform-error", {
                        message: "Lo sentimos, intente más tarde.",
                    });

                    alert("Lo sentimos, intente más tarde.");

                    if (err && err.response) {
                    }
                })
                .finally(() => {
                    _app.loading = false;
                });
        },
        showModalUser(user) {
            this.$emit("show-user", { ...user });
        },
    },
    computed: {
        pages: () => [...PAGES],
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

<style></style>
