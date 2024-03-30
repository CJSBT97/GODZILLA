<template>
    <div>
        <template v-if="!isPC">
            <Header></Header>
        </template>
        <template v-else>
            <HeaderPhone></HeaderPhone>
        </template>
        <router-view />
        <template v-if="!isPC">
            <Footer></Footer>
        </template>
        <template v-else>
            <footerPhone></footerPhone>
        </template>
    </div>
</template>

<script>
import Header from '@/components/header'
import HeaderPhone from '@/components/header/indexPhone'
import footerPhone from '@/components/footer/indexPhone'
import Footer from '@/components/footer'

export default {
    name: 'LayOut',
    components: {
        Header,
        Footer,
        HeaderPhone,
        footerPhone
    },
    computed: {
    },
    created () {
        this.getScreen()
    },
    data () {
        return {
            timer: null,
            windowWidth: window.innerWidth,
            isPC: false
        }
    },
    mounted () {
        // 监听窗口大小变化
        window.addEventListener('resize', this.getScreen);
    },
    beforeUnmount () {
        // 移除监听器
        window.removeEventListener('resize', this.getScreen);
    },
    methods: {
        handleResize () {
            this.windowWidth = window.innerWidth;
            if (!this.isPC) {
                this.$router.push('/Home')
            } else {
                this.$router.push('/webHome')
            }
        },
        getScreen () {
            if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) && !this.isPC
            ) {
                this.isPC = true;
                this.$router.push('/webHome')
                console.log("手机端");
            } else {
                // if (this.$router.currentRoute.path != '/Home' && this.isPC) {
                //     this.isPC = false;
                //     this.$router.push('/Home')
                // }
                console.log("pc端");
            }
        }
    }
}
</script>
