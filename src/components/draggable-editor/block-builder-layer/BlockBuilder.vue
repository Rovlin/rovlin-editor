<template>
    <div class="rovlin-editor-w-100 rovlin-editor-block-builder"
        :class="{ 'rovlin-editor-block-builder-selected': selected }" @click="selectBlock" ref="blockBuilder">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BlockBuilder',
    props: {
        id: String,
        selected: Boolean
    },
    methods: {
        selectBlock() {
            this.$emit('block:selected', this.id);
        }
    }
};
</script>

<style scoped>
.rovlin-editor-block-builder :hover {
    outline: 2px solid rgba(90, 79, 220, 0.6);
    cursor: pointer;
}

.rovlin-editor-block-builder-selected {
    outline: 2px solid #5a4fdc !important
}
</style>