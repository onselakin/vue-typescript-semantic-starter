import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({ template: require('./index.html') })
export default class Button extends Vue {

    @Prop()
    title: string;

}
