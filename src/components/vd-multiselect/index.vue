<template>
    <div>
        <multiselect
                :placeholder="placeholder"
                :value="value"
                :options="options"
                :multiple="multiple"
                :searchable="searchable"
                :allow-empty="true"
                :hide-selected="true"
                :max-height="150"
                :block-keys="['Tab', 'Enter']"
                label="value"
                track-by="value"
                @input="onChange" @close="onTouch" @select="onSelect" v-on:search-change="onSearchChange">
            <template slot="beforeList">
                <input
                        v-for="(val, index) in value"
                        v-if="_multiple"
                        type="text"
                        class="hide"
                        :value="val.id"
                        :name="getInputName(name, index)">
                <input
                  v-if="!_multiple && value"
                  class="hide"
                  :value="value.id"
                  :name="_name"
                  type="text">
            </template>
            <template slot="noResult">
                <div class="multiselect-btn-element">
                    <div class="multiselect--no-result">Нічого не знайдено</div>
                    <b-button block variant="primary">Добавить новую запись</b-button>
                </div>
            </template>
        </multiselect>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import BButton from 'bootstrap-vue/es/components/button/button'
    import './thema.css'

    export default {
        name: "vdMultiselect",
        props: ['_placeholder', '_value', '_options', '_searchable', '_multiple', '_name'],
        data() {
            const self = this;
            let addFieldNames = (arr) => {
              return arr.map((item) => {
                return {
                  id: Object.keys(item)[0],
                  value: Object.values(item)[0]
                }
              })
            };

            return {
              placeholder: this._placeholder,
              value: this._multiple ? addFieldNames( this._value ) : addFieldNames( this._value ).pop(),
              options: addFieldNames( this._options ),
              searchable: this._searchable,
              multiple: this._multiple,
              name: this._name
            }
        },
        components: {
            Multiselect,
            BButton
        },
        methods: {
            onChange (value) {
                //console.log('onChange: ', value);
                this.value = value;
            },
            onSelect (option) {
                //console.log('onSelect: ', option);
            },
            onTouch () {
                //console.log('onTouch');
                this.isTouched = true
            },
            onSearchChange (query, id) {
                //console.log(query, id);
                //console.log('search');
            },
            getInputName (name, index) {
              return `${name}[${index}]`
            }
        }
    }
</script>

<style scoped>
  .hide {
    display: none !important;
  }
</style>
