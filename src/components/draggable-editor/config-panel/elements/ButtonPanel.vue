<template>
    <div class="row">
        <div class="btn-options" style="float: right;">
            <h5 style="float: left;">BUTTON OPTION
                <button @click="toggleButtonOption" class="btn btn-outline-secondary">
                    <i class="fas" :class="showButtonOption ? 'fa-chevron-up' : 'fa-chevron-down'"
                        style="float: right;"></i>
                </button>
            </h5>
        </div>

        <div v-if="showButtonOption">
            <div style="margin-top: 10px;">
                <label for="textColor">Text Color:</label>
                <input type="color" id="textColor" v-model="textColor">
            </div>
            <div style="margin-top: 10px;">
                <label for="bgColor">Background Color:</label>
                <input type="color" id="bgColor" v-model="bgColor">
            </div>

            <label for="alignment">Alignment</label>
            <div class="btn-group">
                <button @click="updateAlignment('left')" class="btn btn-outline-secondary">
                    <i class="fas fa-align-left"></i>
                </button>
                <button @click="updateAlignment('center')" class="btn btn-outline-secondary">
                    <i class="fas fa-align-center"></i>
                </button>
                <button @click="updateAlignment('right')" class="btn btn-outline-secondary">
                    <i class="fas fa-align-right"></i>
                </button>
                <button @click="updateAlignment('justify')" class="btn btn-outline-secondary">
                    <i class="fas fa-align-justify"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ButtonPanel',
    props: {
        element:Object
    },
    data(){
        return {
            // newElement: {}
            showButtonOption: false,
            showButtonOption: false,
            textColor: '#ffffff',
            bgColor: " #0080ff"
        }
    },
    methods: {
        toggleButtonOption() {
            this.showButtonOption = !this.showButtonOption;
        },
        updateImage(event) {
            this.$emit('update:element', { ...this.element, config: { ...this.element.config, image: event.target.value }})
        },
        updateAlignment(align) {
            if (this.newElement.type === 'button') {
                this.$emit('update:element', { ...this.element, config: { ...this.element.config, styles: { ...this.element.config.styles, container: { textAlign: align } } } })
            } else {
                this.$emit('update:element', { ...this.element, config: { ...this.element.config, textAlign: align } })
            }
        },
    },
    mounted(){
        this.newElement = this.element
    },
    watch:{
        element:{
            handler(newVal){
                this.newElement = newVal
            },
            deep:true
        }
    }
}

</script>
<style scoped>
.row {
    display: inline;
}

.btn-group {
    margin-left: 100px;
}

.btn-outline-secondary {
    font-weight: 50px;
    font-size: 15px;
}

.btn-options {
    background-color: rgb(182, 180, 180);
    width: 100%;
}
</style>