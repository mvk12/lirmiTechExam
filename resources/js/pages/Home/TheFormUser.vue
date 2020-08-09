<template>
    <div class="row cols-2">
        <div class="col">
            <img v-if="!!user" :src="user.avatar" :alt="user.first_name" />
        </div>
        <div class="col">
            <form action="#" method="POST" @submit.prevent="doRegister(user)">
                <div class="form-group">
                    <label for="first_name">Nombre(s)</label>
                    <input
                        type="text"
                        readonly
                        :value="(user ? user.first_name : '')"
                    />
                </div>
                <div class="form-group">
                    <label for="last_name">Apellido(s)</label>
                    <input
                        type="text"
                        readonly
                        :value="(user ? user.last_name : '')"
                    />
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input
                        type="text"
                        readonly
                        :value="(user ? user.email : '')"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheFormUser",
    data: () => ({}),
    props: {
        user: {
            type: Object,
        },
    },
    mounted() {},
    methods: {
        doRegister(user) {},
    },
};
</script>

<style></style>
