<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <modal
            :show="isModalOpen"
            :title="'Ocurrió un error'"
            @close="closeModal"
        >
            <h2 class="text-center">{{ alertMessage }}</h2>
        </modal>
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import EventBus from "@/event-bus";

export default {
    name: "App",
    components: {
        Modal,
    },
    data: () => ({
        alertMessage: null,
        isModalOpen: false,
    }),
    mounted() {
        const _app = this;
        EventBus.$on("platform-error", ({ message }) => {
            _app.alertMessage = message;
            _app.isModalOpen = true;
        });
    },
    methods: {
        closeModal() {
            this.isModalOpen = false;
        },
    },
};
</script>
