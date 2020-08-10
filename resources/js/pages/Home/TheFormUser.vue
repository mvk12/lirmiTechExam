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
                <div class="form-group">
                    <button :disabled="isProgress">Registrar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { createProfesor } from "@/services/api/profesores";
import EventBus from "@/event-bus";

export default {
    name: "TheFormUser",
    data: () => ({
        isProgress: false,
    }),
    props: {
        user: {
            type: Object,
        },
    },
    mounted() {},
    methods: {
        doRegister(user) {
            const _app = this;

            _app.isProgress = true;

            createProfesor({ ...user })
                .then((data) => {
                    alert(data.message || "Registrado exitosamente!");
                })
                .catch((err) => {
                    EventBus.$emit("platform-error", {
                        message: "Lo sentimos, intente más tarde.",
                    });

                    if (err && err.response) {
                    }
                })
                .finally(() => {
                    _app.isProgress = false;
                });
        },
    },
};
</script>
