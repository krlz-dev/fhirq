import Card from './card/Card.vue'
import Menu from './menu/Menu.vue'
import store from '../store'

store.commit('increment')

console.log(store.state.count) // -> 1

export default {
    name: 'App',
    store: store,
    components: {
        Menu,
        Card
    }
}