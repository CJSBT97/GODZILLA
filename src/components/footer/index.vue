<template>
    <div :class="isShow ? 'bgbox' : ''">
        <footer>GÖDZILLA © 2024. All Rights Reserved</footer>
        <div id="get-top"><img src="@/assets/images/top.png"
                 alt=""></div>
    </div>
</template>

<script>
import { toggTop } from '@/utils/app'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
    data () {
        return {
            isShow: false
        }
    },
    watch: {
        $route (to) {
            if (to.name == 'DAPP') {
                this.isShow = true
            } else {
                this.isShow = false
            }
        },
    },
    mounted () {
        if (this.$route.name == 'DAPP') {
            this.isShow = true
        } else {
            this.isShow = false
        }
        // this.getPushHome()
        toggTop()
    },
    methods: {
        // getPushHome () {
        //     if (this.$route.path != '/home') {
        //         this.$router.push('/home')
        //     }
        // }
    }
}
</script>

<style lang="sass" scoped>
.bgbox
    background-color: #010111
</style>
