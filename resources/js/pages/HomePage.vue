<template>
    <div>
        <h1>Usuarios desde regres.in/api/users</h1>
        <the-search-user @user-found="showUser" />
        <the-table-users @show-user="showUser" />
        <modal
            :show="isModalActive"
            :title="'Mostrar usuario'"
            @close="closeModal"
        >
            <the-form-user :user="currentUser" />
        </modal>
        <hr />
        <a href="#" @click.prevent="goToUsersRegistered"
            >Ir a <b>Usuarios registrados</b></a
        >
    </div>
</template>

<script>
import TheFormUser from "./Home/TheFormUser.vue";
import TheTableUsers from "./Home/TheTableUsers.vue";
import TheSearchUser from "./Home/TheSearchUser.vue";
import Modal from "@/components/Modal.vue";

export default {
    name: "HomePage",
    components: {
        TheFormUser,
        TheTableUsers,
        TheSearchUser,
        Modal,
    },
    data: () => ({
        currentUser: null,
        isModalActive: false,
    }),
    methods: {
        goToUsersRegistered() {
            this.$router.push({ name: "profesores" });
        },
        showUser(user) {
            this.$set(this, "currentUser", { ...user });
            this.isModalActive = true;
        },
        closeModal() {
            this.isModalActive = false;
            this.currentUser = null;
        },
    },
};
</script>
