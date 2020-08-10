<template>
    <div>
        <table>
            <thead class="primary">
                <tr>
                    <th>Nombre(s)</th>
                    <th>Apellidos(s)</th>
                </tr>
                <!--
                <tr>
                    <th>
                        <input type="number" v-model="filteredId" />
                    </th>
                    <th></th>
                </tr>
                -->
            </thead>
            <tbody>
                <tr v-if="loading">
                    <td colspan="2" class="text-center">Cargando...</td>
                </tr>
                <template v-else-if="usersList.length">
                    <tr
                        v-for="(user, key) in usersList"
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
import EventBus from "@/event-bus";
const PAGES = [1, 2];

export default {
    name: "TheTableUsers",
    data: () => ({
        loading: false,
        users: [],
        page: 1,
        filteredId: null,
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
        showModalUser(user) {
            this.$emit("show-user", { ...user });
        },
    },
    computed: {
        pages: () => [...PAGES],
        usersList() {
            const _app = this;
            if (_app.filteredId && _app.filteredId > 0) {
                return _app.users.filter((row) => row.id == _app.filteredId);
            }
            return [..._app.users];
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
