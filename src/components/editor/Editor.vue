<template>
    <div class="rovlin-editor">
        
        <Toolbar :toolbarConfig="toolbarConfig"/>

        <div class="rovlin-editor-content" contenteditable="true" @input="updateContent">
            <!--  Editable Div -->
        </div>
    </div>
</template>

<script>
import Toolbar from './Toolbar.vue';
import { TOOLBAR_DEFAULT,finalToolbar } from "../../helper/toolbar/toolbarConfig.ts"

export default {
    name: 'Text-Editor',
    props: {
        msg: String,
        toolbar: {
            type: Object,
            default: TOOLBAR_DEFAULT
        }
    },
    components: {
        Toolbar
    },
    data() {
        return {
            content: '',
            toolbarConfig:{}
        };
    },
    
    methods: {
        updateContent(event) {
            this.content = event.target.innerHTML;
        }
    },
    created() {
        this.toolbarConfig =  finalToolbar(this.toolbar);
    }
}
</script>
