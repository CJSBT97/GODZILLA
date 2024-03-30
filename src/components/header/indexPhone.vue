<template>
    <div>
        <header class="marginBox flexCenter">
            <div class="logo"
                 @click="$router.push('/webHome')">
                <img src="@/assets/images/logo.png">
            </div>
            <div class="login flexCenter">
                <template v-if="accountFilter">
                    <el-button class="Connect"
                               @click="goToUserInfo"
                               type="text">{{ accountFilter }}</el-button>
                    <div class="avatar">
                        <img src="@/assets/images/face.png">
                    </div>
                </template>
                <el-button v-else
                           style="padding: 0;"
                           @click="connectWallet"
                           type="text"
                           class="loginButtom">Login</el-button>
                <div class="info centerBetween">
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data () {
        return {
            isTrue: true,
            timer: null,
            activeList: 'Home',
            navList: [{
                name: 'Home',
            }, {
                name: 'Vault',
            }, {
                name: 'DAPP',
            }]
        }
    },
    computed: {
    },
    beforeUnmount () {
        // wqwq
    },
    mounted () {
        this.activeList = this.$route.name
    },
    watch: {
        // '$route' (to) { // to为新的路由信息，from为之前的路由信息
        //     if (to.path == '/AccountOverview') {
        //         this.isTrue = false
        //     } else {
        //         this.isTrue = true
        //     }
        // },
    },
    methods: {
        getPush (item) {
            if (item.name == this.activeList) return
            this.activeList = item.name
            this.$router.push(`/${item.name}`)
        },
        goToUserInfo () {
            this.$router.push('/userInfo')
        }
    }
}
</script>

<style lang="sass" scoped>
header
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: 99
    background: rgba( 255, 255, 255, .1)

.login
    width: auto!important

.loginButtom
    width: 2rem
    height: 0.675rem
    text-align: center
    line-height: 0
    font-size: .4rem
    background-color: #18dcff
    border-radius: 60px
    color: #000
    font-family: 'AlibabaSansBold'
    z-index: 99
    &:hover
        background-color: #18dcff
        color: #000
/* 头部 */
.avatar
    overflow: hidden
    // margin-left: 10px
    width: 0.6rem
    height: 0.6rem
    border-radius: 50%
.Connect
    color: #fff
    // background-color: #325AB4
    &:hover
        color: #fff
        // background-color: #325AB4    
</style>
