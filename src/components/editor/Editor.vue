<template>
    <div class="rovlin-editor">
        <Toolbar />
        <div class="rovlin-editor-content" contenteditable="true" @input="updateContent">
            <!-- This is where the editable content will go -->
        </div>
    </div>
</template>

<script>
import Toolbar from './Toolbar.vue';

export default {
    name: 'Text-Editor',
    props: {
        msg: String
    },
    components: {
        Toolbar
    },
    data() {
        return {
            content: ''
        };
    },
    methods: {
        updateContent(event) {
            this.content = event.target.innerHTML;
        }
    }
}
</script>

<style scoped>
</style>
