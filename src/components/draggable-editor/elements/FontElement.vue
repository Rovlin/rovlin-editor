<template>
    <div class="font-element" contenteditable="true" :style="element.config.styles" @input="updateContent">
        <span>{{ content }}</span>
    </div>
</template>

<script>
export default {
    name: "FontElement",
    props: {
        element: Object,
    },
    data() {
        return {
            content: "",
        };
    },
    methods: {
        updateContent(event) {
            this.$emit("update:element", {
                ...this.element,
                config: {
                    ...this.element.config,
                    content: event.target.innerText,
                },
            });
        },
    },
    mounted() {
        this.content = this.element.config.content || "Edit me!";
    },
};
</script>

<style scoped>
.font-element {
    padding: 10px;
    font-size: 16px;
    border: 1px dashed lightgray;
    min-height: 40px;
}

.font-element:focus-visible {
    outline: none !important;
}
</style>
