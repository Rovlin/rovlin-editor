<template>
    <div class="card mb-3">
        <h5>FONT OPTIONS</h5>
        <div class="font-options">
            <!-- Font Family -->
            <div class="font-picker">
                <label for="fontFamily">Font Family</label>
                <select id="fontFamily" v-model="fontFamily" @change="updateFontStyle">
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Courier New">Courier New</option>
                </select>
            </div>

            <!-- Font Size -->
            <div class="font-size-picker">
                <label for="fontSize">Font Size</label>
                <input type="number" id="fontSize" v-model="fontSize" @input="updateFontStyle"
                    placeholder="Enter size in px" />
            </div>

            <!-- Font Weight -->
            <div class="font-weight-picker">
                <label for="fontWeight">Font Weight</label>
                <select id="fontWeight" v-model="fontWeight" @change="updateFontStyle">
                    <option value="normal">Normal</option>
                    <option value="bold">Bold</option>
                    <option value="lighter">Lighter</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FontPanel",
    props: {
        element: Object,
    },
    data() {
        return {
            fontFamily: "Arial",
            fontSize: "16",
            fontWeight: "normal",
        };
    },
    methods: {
        updateFontStyle() {
            this.$emit("update:element", {
                ...this.element,
                config: {
                    ...this.element.config,
                    styles: {
                        ...this.element.config.styles,
                        fontFamily: this.fontFamily,
                        fontSize: `${this.fontSize}px`,
                        fontWeight: this.fontWeight,
                    },
                },
            });
        },
    },
    mounted() {
        // Initialize values based on existing element config
        this.fontFamily = this.element?.config?.styles?.fontFamily || "Arial";
        this.fontSize =
            parseInt(this.element?.config?.styles?.fontSize) || "16";
        this.fontWeight = this.element?.config?.styles?.fontWeight || "normal";
    },
};
</script>

<style scoped>
h5 {
    background-color: rgb(240, 238, 238);
    padding: 10px;
}

.font-options {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
}

.font-picker,
.font-size-picker,
.font-weight-picker {
    display: flex;
    align-items: center;
    gap: 15px;
}

label {
    width: 150px;
    font-weight: bold;
}

input[type="number"],
select {
    width: 100%;
    padding: 5px;
}
</style>
