<template>
    <div class="rovlin-draggable-editor">

        <div class="rovlin-editor-container" @dragover.prevent @drop="dropNewItem">
            <div class="rovlin-editor-main-container" ref="mainContainer">
                <NoElement v-if="!Object.keys(editorElements).length" />
                <div style="width: 100%;" ref="blockElements">
                    <BlockBuilder v-for="(element) in sortedEditorElements" :selected="element.selected" :id="element.id"
                        @block:selected="handleSelectedElement">
                        <TextElement v-if="element.type === 'text'" :element="element" :ref="element.id"
                            @update:element="updateElement($event)" />
                        <ButtonElement v-if="element.type === 'button'" :element="element" :ref="element.id"
                            @update:element="updateElement($event)" />
                    </BlockBuilder>
                </div>
            </div>
        </div>

        <div class="rovlin-elements">
            <DraggableElement v-if="!selectedElementId" />
            <div v-if="selectedElementId">
                id: {{ selectedElementId }}
                <button @click="closeSelectedElement">Close</button>
            </div>
        </div>

    </div>
</template>
<script>
import TextElement from './elements/TextElement.vue';
import ButtonElement from './elements/ButtonElement.vue';
import DraggableElement from './DraggableElement.vue';
import NoElement from './elements/NoElement.vue';
import { getShortId } from '../../helper/CommonHelper';
import { ElementConfig } from '../../helper/elementConfig/ElementConfig';
import BlockBuilder from './block-builder-layer/BlockBuilder.vue';
export default {
    components: {
        BlockBuilder,
        DraggableElement,
        ButtonElement,
        NoElement,
        TextElement
    },
    data() {
        return {
            editorElements: {},
            selectedElementId: null
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
            const order = Object.keys(this.editorElements).length;
            this.editorElements[newId] = { ...ElementConfig[item.type], id: newId, order, selected: false };
        },
        // update the element in the editorElements
        updateElement(element) {
            if (this.editorElements[element.id]) {
                this.editorElements[element.id] = element;
            }
        },
        // updates the Selected Element
        handleSelectedElement(newId) {
            console.log("handle Selected Element Runs", newId, this.selectedElementId);
            if(this.selectedElementId) this.editorElements[this.selectedElementId].selected = false;
            this.selectedElementId = newId;
            this.editorElements[newId].selected = true;
        },
        closeSelectedElement() {
            this.editorElements[this.selectedElementId].selected = false;
            this.selectedElementId = null;
        },
        handleClickOutside(event) {
            if (!this.$refs.blockElements.contains(event.target) && this.selectedElementId) {
               this.closeSelectedElement();
            }
        }
    },
    computed: {
        sortedEditorElements() {
            return Object.values(this.editorElements).sort((a, b) => a.order - b.order);
        }
    },
    watch: {
        editorElements: {
            handler(newVal, oldVal) {
                console.log('editorElements changed:', newVal);
            },
            deep: true
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    }
}

</script>

<style scoped>
.rovlin-editor-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 100%;
    padding-top: 15px;
}

.rovlin-draggable-editor {
    height: calc(100vh - 15px);
    width: 100%;
    display: flex;
}

.rovlin-draggable-editor .rovlin-editor-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.rovlin-draggable-editor .rovlin-elements {
    width: 410px;
    border-left: 1px solid #000;
    padding-left: 10px;
}
</style>
