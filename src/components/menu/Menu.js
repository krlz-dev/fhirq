export default {
    name: 'Menu',
    data: () => {
        return {
            isShow: false
        }
    },
    mounted: function () {
        this.showMenu()
    },
    methods: {
        showMenu() {
            console.log(this.isShow)
            if (this.isShow) this.$refs.slideMenu.classList.add("slide-menu-show")
            else this.$refs.slideMenu.classList.remove("slide-menu-show")
            this.isShow = !this.isShow;
        }
    }
}