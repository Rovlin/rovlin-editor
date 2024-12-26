<template>
    <div class="rovlin-draggable-editor">

        <div class="rovlin-editor-container" @dragover.prevent @drop="dropNewItem">
            <div class="rovlin-editor-main-container" ref="mainContainer">
                <NoElement v-if="!Object.keys(editorElements).length" />
                <div style="width: 100%;" ref="blockElements">
                    <BlockBuilder v-for="(element) in sortedEditorElements" :selected="element.selected"
                        :id="element.id" @block:selected="handleSelectedElement">
                        <TextElement v-if="element.type === 'text' || element.type === 'link'" :element="element"
                            :ref="element.id" @update:element="updateElement($event)" />
                        <ButtonElement v-if="element.type === 'button'" :element="element" :ref="element.id"
                            @update:element="updateElement($event)" />
                        <ImageElement v-if="element.type === 'image'" :element="element" :ref="element.id" />
                        <AudioElement v-if="element.type === 'audio'" :element="element" :ref="element.id" />
                        <VideoElement v-if="element.type === 'video'" :element="element" :ref="element.id" />
                        <ListElement v-if="element.type === 'list'" :element="element" :ref="element.id"
                            @update:element="updateElement($event)" />
                        <DividerElement v-if="element.type === 'divider'" :element="element" :ref="element.id"
                            @update:element="updateElement($event)" />
                        <FontElement v-if="element.type === 'font'" :element="element" :ref="element.id"
                            @update:element="updateElement($event)" />
                    </BlockBuilder>
                </div>
            </div>
        </div>

        <div class="rovlin-elements" ref="sidebarPanel">
            <DraggableElement v-if="!selectedElementId" />
            <ConfigPanel v-if="selectedElementId" :element="editorElements[selectedElementId]"
                :closeSelectedElement="closeSelectedElement" @update:element="updateElement($event)"
                :deleteElement="deleteElement" />
        </div>

    </div>
</template>
<script>
import VideoElement from './elements/VideoElement.vue';
import AudioElement from './elements/AudioElement.vue';
import TextElement from './elements/TextElement.vue';
import ButtonElement from './elements/ButtonElement.vue';
import ImageElement from './elements/ImageElement.vue';
import DraggableElement from './DraggableElement.vue';
import NoElement from './elements/NoElement.vue';
import { getShortId } from '../../helper/CommonHelper';
import { ElementConfig } from '../../helper/elementConfig/ElementConfig';
import BlockBuilder from './block-builder-layer/BlockBuilder.vue';
import ConfigPanel from './config-panel/ConfigPanel.vue';
import ListElement from './elements/ListElement.vue';
import DividerElement from './elements/DividerElement.vue';
import FontElement from './elements/FontElement.vue';
export default {
    components: {
        BlockBuilder,
        DraggableElement,
        ButtonElement,
        NoElement,
        TextElement,
        ImageElement,
        ConfigPanel,
        AudioElement,
        VideoElement,
        ListElement,
        DividerElement,
        FontElement,
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
            if(!ElementConfig[item.type]) return
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
            if(this.selectedElementId) this.editorElements[this.selectedElementId].selected = false;
            this.selectedElementId = newId;
            this.editorElements[newId].selected = true;
        },
        closeSelectedElement() {
            if(this.editorElements[this.selectedElementId])
                this.editorElements[this.selectedElementId].selected = false;
            this.selectedElementId = null;
        },
        handleClickOutside(event) {

            if (!this.$refs.blockElements.contains(event.target)
                && !this.$refs.sidebarPanel.contains(event.target)
                && this.selectedElementId) {
                this.closeSelectedElement();
            }
        },
        deleteElement() {
            if (this.selectedElementId) {
                delete this.editorElements[this.selectedElementId];
                this.closeSelectedElement();
                let order = 0;
                for (const id in this.editorElements) {
                    this.editorElements[id].order = order++;
                }
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
        },
        selectedElementId: {
            handler(newVal, oldVal) {
                console.log('selectedElementId changed:', newVal);
            }
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
    width: 610px;
    border-left: 1px solid #000;
}
</style>
