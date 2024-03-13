<template>
    <div class="card mb-3">
        <h5>BUTTON OPTION</h5>
        <div class="row">
            <div class="btn-options">
                <div class="color-picker">
                    <label for="textColor">Text Color</label>
                    <div class="color-picker-input">
                        <input type="color" id="textColor" v-model="textColor">
                        <button v-if="isCustomTextColor" @click="clearTextColor" v-show="clearButtonVisible.text"
                            class="clear-button">&times;</button>
                    </div>
                </div>
                <div class="color-picker">
                    <label for="bgColor">Background Color</label>
                    <div class="color-picker-input">
                        <input type="color" id="bgColor" v-model="bgColor">
                        <button v-if="isCustomBgColor" @click="clearBgColor" v-show="clearButtonVisible.bg"
                            class="clear-button">&times;</button>
                    </div>
                </div>
            </div>
            <div class="alignment-cont">
                <label for="alignment" class="col-form-label">Alignment:</label>
                <div class="btn-group alignment-buttons" role="group" aria-label="Alignment">
                    <button @click="updateAlignment('left')" class="btn btn-outline-secondary align-left" type="button">
                        <i class="fas fa-align-left"></i>
                    </button>
                    <button @click="updateAlignment('center')" class="btn btn-outline-secondary align-center"
                        type="button">
                        <i class="fas fa-align-center"></i>
                    </button>
                    <button @click="updateAlignment('right')" class="btn btn-outline-secondary align-right"
                        type="button">
                        <i class="fas fa-align-right"></i>
                    </button>
                </div>
            </div>


        </div>

        <div>
            <h5 class="card-title">ACTION</h5>

            <div class="action-container">

                <p class="sub-heading">Open Website</p>

                <div class="input-group mb-3" style="width: 90%;">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">URL</button>
                    <input type="text" class="form-control" placeholder="Enter URL"
                        aria-label="Example text with button addon" aria-describedby="button-addon1">

                </div>

                <div class="input-group mb-3" style="width: 90%;">
                    <button class="btn btn-outline-secondary" type="button">Target</button>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                        <option value="1">New Tab</option>
                        <option value="2">Same Tab</option>
                    </select>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ButtonPanel',
    props: {
        element: Object
    },
    data() {
        return {
            defaultTextColor: '#ffffff',
            defaultBgColor: '#35bfbf',
            textColor: '#ffffff',
            bgColor: '#35bfbf',
            isCustomTextColor: false,
            isCustomBgColor: false,
            clearButtonVisible: {
                text: true,
                bg: true,
            },

        }
    },
    methods: {
        toggleButtonOption() {
            this.showButtonOption = !this.showButtonOption;
        },
        updateImage(event) {
            this.$emit('update:element', { ...this.element, config: { ...this.element.config, image: event.target.value } })
        },
        updateAlignment(align) {
            if (this.element.type === 'button') {
                this.$emit('update:element', { ...this.element, config: { ...this.element.config, styles: { ...this.element.config.styles, container: { textAlign: align } } } })
            } else {
                this.$emit('update:element', { ...this.element, config: { ...this.element.config, textAlign: align } })
            }
        },
        clearTextColor() {
            this.textColor = this.defaultTextColor;
            this.isCustomTextColor = false;
            this.clearButtonVisible.text = false;
            this.updateButtonColors();
        },
        clearBgColor() {
            this.bgColor = this.defaultBgColor;
            this.isCustomBgColor = false;
            this.clearButtonVisible.bg = false;
            this.updateButtonColors();
        },
        updateButtonColors() {
            let textColor = this.textColor;
            let bgColor = this.bgColor;
            if (this.textColor !== this.defaultTextColor) {
                this.isCustomTextColor = true;
                this.clearButtonVisible.text = true;
            }
            if (this.bgColor !== this.defaultBgColor) {
                this.isCustomBgColor = true;
                this.clearButtonVisible.bg = true;
            }
            this.$emit('update:element', {
                ...this.element,
                config: {
                    ...this.element.config,
                    styles: {
                        ...this.element.config.styles,
                        button: {
                            ...this.element.config.styles.button,
                            color: textColor,
                            backgroundColor: bgColor
                        }
                    }
                }
            });
        },
        // handleActionSelect() {
        //     // Reset websiteURL and target when action changes
        //     this.websiteURL = '';
        //     this.target = '_self';
        // }


    },
    watch: {
        textColor(newVal) {
            this.isCustomTextColor = true;
            this.updateButtonColors();
        },
        bgColor(newVal) {
            this.isCustomBgColor = true;
            this.updateButtonColors();
        },
        element: {
            handler(newVal) {
                this.newElement = newVal;
            },
            deep: true
        }
    }
}
</script>

<style scoped>
h5 {

    background-color: rgb(240, 238, 238);
    width: 100%;
    padding: 10px;
}

.color-picker {
    margin-bottom: 20px;

}

.color-picker label {
    display: block;
    margin-bottom: 15px;
    margin-left: 15px;
}

.color-picker input[type="color"] {
    width: 35px;
    height: 35px;
    margin-left: 20px;
}

.color-picker-input {
    position: relative;
}

.clear-button {
    position: absolute;
    top: -5px;
    left: 50px;
    background-color: black;
    border: none;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 100%;

}

.btn-options {
    display: inline-flex;
    position: sticky;
    bottom: 0;
    z-index:  999 ;
    padding: 5px;




}

.color-picker+.color-picker {
    margin-left: 80px;
}

.alignment-cont {

    margin-top: 20px;
    margin-left: 15px;
}

.alignment-cont label {
    margin-right: 50px;
}

.alignment-cont {
    position: relative;
    display: flex;
    align-items: center;
}

.alignment-cont label {
    margin-right: 10px;
}

.alignment-buttons {
    position: absolute;
    margin-left: 115px;
    padding: 2px;
    /* border: solid #3a ; */
}
.input-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 12px;

}

.form-control,
.form-select {
    flex: 1;
   padding: 10px;

}

.sub-heading {
    font-size: 16px;
    margin-bottom: 10px;
}
.action-container{
    margin-left: 15px;
}
.btn-outline-secondary{
    padding: 10px;

}

@media only screen and (max-width: 600px) {
    .alignment-cont {
        position: static;
        display: flex;
        justify-content: space-between;
    }

    .alignment-buttons {
        margin-left: auto;
    }

    .color-picker {
        margin-bottom: 10px;
    }

    .color-picker label {
        margin-bottom: 5px;
    }

    .color-picker input[type="color"] {
        width: 30px;
        height: 30px;
        margin-left: 15px;
    }

    .alignment-buttons button {
        margin-right: 5px;
    }
}
@media (max-width: 768px) {

    .alignment-cont .alignment-buttons .align-left,
    .alignment-cont .alignment-buttons .align-center,
    .alignment-cont .alignment-buttons .align-right {
        pointer-events: none;
        opacity: 0.5;
    }
}
</style>
