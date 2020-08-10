<template>
    <div>
        <h1>Profesores registrados</h1>
        <the-profesores-table />
        <hr />
        <a href="#" @click.prevent="goToHome">Ir a <b>Inicio</b></a>
    </div>
</template>

<script>
import TheProfesoresTable from "./Profesores/TheProfesoresTable.vue";
import EventBus from "@/event-bus";

export default {
    name: "ProfesoresPage",
    components: {
        TheProfesoresTable,
    },
    methods: {
        goToHome() {
            this.$router.push({ name: "home" });
        },
    },
};
</script>
