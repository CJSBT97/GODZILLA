<template>
    <div>
        <header class="marginBox flexCenter">
            <div class="logo">
                <img src="@/assets/images/logo.png">
            </div>
            <nav>
                <el-button v-for="(item, index) in navList"
                           :class="[activeList == item.name ? 'clickA' : '']"
                           :key="index"
                           @click="getPush(item)"
                           type="text">{{item.name}}</el-button>
                <el-button type="text">Launchpad</el-button>
            </nav>
            <div class="login flexCenter">
                <div class="language">
                    <img src="@/assets/images/language.png">
                </div>
                <a class="loginButtom">Login</a>
            </div>
            <div class="menuIcon">
                <img src="@/assets/images/menu.png">
            </div>
            <div class="menu">
                <ul>
                    <li v-for="(item, index) in navList"
                        :key="index"><el-button @click="getPush(item)"
                                   type="text">{{item.name}}</el-button></li>
                    <li><el-button type="text">Launchpad</el-button></li>
                </ul>
                <div class="menuLogin">
                    <a class="loginButtom">Login</a>
                    <div class="language">
                        <img src="@/assets/images/language.png">
                    </div>
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
        // waw
    },
    mounted () {
        this.activeList = this.$route.name
        // console.log(this.accountFilter)
        // // 监听账户变化事件
        // window.ethereum.on('accountsChanged', (accounts) => {
        //     if (accounts.length === 0) {
        //         this.$store.commit('web3/saveAccountFilter', null)
        //         this.$store.commit('web3/accountFilter', null)
        //     } else {
        //         this.connectWallet()
        //         console.log("用户已连接，当前账户:", accounts[0]);
        //     }
        // });
        // // 监听网络变化事件
        // window.ethereum.on('chainChanged', (chainId) => {
        //     // 当用户切换网络时，会触发该事件 重新链接钱包
        //     this.connectWallet()
        //     console.log("用户已切换网络，当前网络ID:", chainId);
        // });
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
            // this.$router.push('/Vault')
            this.activeList = item.name
            if (item.name == 'Home') {
                this.$router.push('/')
            } else {
                this.$router.push(`/${item.name}`)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
</style>
