<template>
    <div class="rovlin-draggable-editor"  >

        <div class="rovlin-editor-container" @dragover.prevent @drop="dropNewItem">
            <div class="rovlin-editor-main-container">
                <NoElement v-if="!Object.keys(editorElements).length"/>
                <template v-for="(element) in editorElements" class="p-2">
                    <TextElement v-if="element.type === 'text'" :element="element" :ref="element.id"/>
                </template>
            </div>
        </div>

        <div class="rovlin-elements">
            <DraggableElement  />
        </div>

    </div>
</template>
<script>
import TextElement from './elements/TextElement.vue';
import DraggableElement from './DraggableElement.vue';
import NoElement from './elements/NoElement.vue';
import { getShortId } from '../../helper/CommonHelper';
import { ElementConfig } from '../../helper/elementConfig/ElementConfig';

export default {
    components: {
        DraggableElement,
        NoElement,
        TextElement
    },
    data() {
        return {
            editorElements:{},
            selectedElement: null
        };
    },
    methods: {
        dropNewItem(event) {
            event.preventDefault();
            const itemData = event.dataTransfer.getData('element');
            const item = JSON.parse(itemData);
            this.addNewElement(item);
        },
        addNewElement(item) {
            const newId = getShortId();
            this.editorElements[newId] = ElementConfig[item.type];
            this.editorElements[newId].id = newId;
        },  
    },
    watch:{
        editorElements: {
        handler(newVal, oldVal) {
            this.$emit('editorElements', newVal);
        },
        deep: true
    }
    },
    mounted(){
      
    }
}

</script>

<style scoped>

.rovlin-editor-main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 100%;
}

.rovlin-draggable-editor {
    display: flex;
}

.rovlin-draggable-editor .rovlin-editor-container {
    display: flex;
    justify-content: center;
    width: calc(100% - 320px);
}

.rovlin-draggable-editor .rovlin-elements {
    width: 320px;
    border-left: 1px solid #000;
    padding-left: 10px;
}
</style>
