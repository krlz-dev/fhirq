import Card from './card/Card.vue'
import Menu from './menu/Menu.vue'
import store from '../store'


export default {
    name: 'App',
    store,
    components: {
        Menu,
        Card
    }
}