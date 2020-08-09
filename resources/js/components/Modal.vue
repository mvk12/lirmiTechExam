<template>
    <div :class="['modal', show ? 'active' : '']">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" @click="close">&times;</span>
                <div slot="header">
                    <h2>{{ title }}</h2>
                </div>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer" slot="footer"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    mounted() {},
    props: {
        title: {
            type: String,
            required: true,
        },
        show: {
            type: Boolean,
            required: true,
        },
    },
    data: () => ({}),
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

    &.active {
        display: block !important;
    }
}

/* Modal Content */
.modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 60%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
}

/* Add Animation */
@-webkit-keyframes animatetop {
    from {
        top: -300px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}

@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}

.close {
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
        text-decoration: none;
        cursor: pointer;
    }
    &::after {
        color: white;
        content: " Cerrar";
        font-size: 0.5em;
    }
}

.modal-header,
.modal-body,
.modal-footer {
    padding: 2px 16px;
}

.modal-header,
.modal-footer {
    background-color: $blue;
    color: white;
}
</style>
