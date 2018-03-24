import Vue from 'vue'
import Button from './vue-semantic/components/button'
import Component from 'vue-class-component'

@Component({
    template: `
    <div id="app">
        <div class="ui fluid container">
            <h1>Hello Semantic!</h1>
            <div class="ui segment">
                <my-button title="Hello" class="ui button" />
            </div>
        </div>
    </div>`,
    components: {
        'my-button': Button
    }
})
export default class App extends Vue {
}
