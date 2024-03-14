<template>
    <div class="rovlin-editor-config-panel">

        <div class="rovlin-editor-config-panel-header">
            <h3>Content</h3>
            <div class="right-bar">
                <div @click="deleteElement()"><i class="bi bi-trash-fill" style="color: red;"></i></div>
                <div @click="closeSelectedElement()"><i class="bi bi-x"></i></div>
            </div>
        </div>

        <div class="rovlin-editor-config-panel-body">
            <ButtonPanel :element="element" v-if="element.type == 'button'" @update:element="updateElement($event)" />
            <ImagePanel :element="element" v-if="element.type == 'image'" @update:element="updateElement($event)" />
            <AudioPanel :element="element" v-if="element.type == 'audio'" @update:element="updateElement($event)" />
            <VideoPanel :element="element" v-if="element.type == 'video'" @update:element="updateElement($event)" />
            <ListPanel :element="element" v-if="element.type == 'list'" @update:element="updateElement($event)" />
            <DividerPanel :element="element" v-if="element.type == 'divider'" @update:element="updateElement($event)" />
        </div>

    </div>
</template>

<script>
import VideoPanel from "./elements/VideoPanel.vue";
import ButtonPanel from "./elements/ButtonPanel.vue";
import ImagePanel from "./elements/ImagePanel.vue";
import AudioPanel from "./elements/AudioPanel.vue";
import ListPanel from "./elements/ListPanel.vue";
import DividerPanel from "./elements/DividerPanel.vue"
export default {
  name: 'ConfigPanel',
  props: ['element', 'deleteElement', 'closeSelectedElement'],
  components: {
    ImagePanel,
    ButtonPanel,
    AudioPanel,
    VideoPanel,
      ListPanel,

},
  data() {
    return {
    }
    },
    methods: {
        updateElement(newElement) {
            this.$emit('update:element', newElement);
        }
    },
  mounted() {
  }
}
</script>

<style scoped>

.rovlin-editor-config-panel{
    height: 100%;
}

.rovlin-editor-config-panel-header{
    margin: 5px 4px;
    padding: 15px 10px ;
    border: 1px solid #dee2e6;;
    justify-content: space-between;
    align-items: center;
    border-radius: 14px;
    display: flex;
}

.rovlin-editor-config-panel-header h3{
    margin: 0;
    font-size: 1.3rem;
    font-weight: 500;
}

.rovlin-editor-config-panel-header .right-bar{
    display: flex;
}

.rovlin-editor-config-panel-header i{
   font-size: 24px;
   cursor: pointer;
}

.rovlin-editor-config-panel-header .right-bar div{
    margin-left: 4px;
    margin-right: 4px;
}


</style>