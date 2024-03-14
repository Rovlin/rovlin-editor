<template>
    <div style="width:100%" class="rovlin-editor-divider-panel">
        <!-- Ref Element -->
        <div style="padding:10px">
            <div :style="element.config.styles.container">
                <div :style="element.config.styles.icon">
                    <img :src="element.config.iconUrl" alt="Divider Icon">
                </div>
                <div :style="element.config.styles.title">
                    {{ element.config.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DividerPanel',
    props: {
        element: Object,
    },
    data() {
        return {
            content: ''
        }
    },
    mounted() {
        this.content = this.element.config.content;
    }
}
</script>

<style scoped>
.rovlin-editor-divider-panel :focus-visible,
.rovlin-editor-divider-panel :hover {
    outline: none !important;
}
</style>
