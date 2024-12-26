<template>
    <div class="card mb-3">
        <div class="card-header">
            <h5>Form Options</h5>
        </div>
        <div class="card-body">
            <!-- Add Form Field -->
            <div class="mb-3">
                <label for="formField" class="form-label">Add New Field</label>
                <div class="input-group">
                    <input type="text" id="formField" class="form-control" v-model="newField"
                        placeholder="Enter field name" />
                    <button class="btn btn-primary" @click="addField">Add</button>
                </div>
            </div>

            <!-- Form Fields List -->
            <h6>Fields</h6>
            <ul class="list-group mb-3">
                <li v-for="(field, index) in formFields" :key="index"
                    class="list-group-item d-flex justify-content-between align-items-center">
                    {{ field }}
                    <button class="btn btn-danger btn-sm" @click="removeField(index)">
                        Remove
                    </button>
                </li>
            </ul>

            <!-- Form Alignment -->
            <div class="mb-3">
                <label class="form-label">Alignment</label>
                <div class="btn-group" role="group" aria-label="Alignment options">
                    <button type="button" class="btn btn-outline-secondary" @click="updateAlignment('left')">
                        Left
                    </button>
                    <button type="button" class="btn btn-outline-secondary" @click="updateAlignment('center')">
                        Center
                    </button>
                    <button type="button" class="btn btn-outline-secondary" @click="updateAlignment('right')">
                        Right
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormPanel",
    props: {
        element: Object,
    },
    data() {
        return {
            newField: "",
            formFields: [],
        };
    },
    methods: {
        addField() {
            if (this.newField.trim()) {
                this.formFields.push(this.newField);
                this.newField = "";
                this.updateFormConfig();
            }
        },
        removeField(index) {
            this.formFields.splice(index, 1);
            this.updateFormConfig();
        },
        updateAlignment(alignment) {
            this.$emit("update:element", {
                ...this.element,
                config: {
                    ...this.element.config,
                    styles: { ...this.element.config.styles, textAlign: alignment },
                },
            });
        },
        updateFormConfig() {
            this.$emit("update:element", {
                ...this.element,
                config: {
                    ...this.element.config,
                    fields: this.formFields,
                },
            });
        },
    },
    mounted() {
        this.formFields = this.element.config.fields || [];
    },
};
</script>

<style scoped>
.card-header h5 {
    margin: 0;
}
</style>
