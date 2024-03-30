<template>
    <div class="footerPhone">
        <div class="logo"
             style="padding-bottom: 15px;">
            <img src="@/assets/images/logo.png">
        </div>
        <p style="padding-bottom: 15px;color: #686868;font-size: 0.3rem;font-family: MontserratRegular;">
            Godzilla is a groundbreaking protocols that employs mining to democratize AI, revolutionizing model training with Web3 and nurturing an ecosystem for personalized AI models.
        </p>
        <div class="lineList"
             style="padding-bottom: 15px;">
            <div class="lineList-item">
                <img src="@/assets/images/x.png">
            </div>
            <div class="lineList-item">
                <img src="@/assets/images/telegram.png">
            </div>
            <div class="lineList-item">
                <img src="@/assets/images/medium.png">
            </div>
            <div class="lineList-item">
                <img src="@/assets/images/LITE.png">
            </div>
        </div>
        <footer>GÖDZILLA © 2024. All Rights Reserved</footer>
        <div class="buyNow">
            <el-button type="text"
                       @click="$router.push('/userInfo')"><img src="@/assets/images/buyNow.png"></el-button>
        </div>
        <!-- <div id="get-top"><img src="@/assets/images/top.png"
                 alt=""></div> -->
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
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
.footerPhone
    padding: 5%
    background: #000
    & footer
        border: none
        text-align: left
    & .lineList
        display: flex
        &-item
            border: 1px solid #fff
            border-radius: 30%
            display: flex
            justify-content: center
            align-items: center
            padding: 12px
            box-sizing: border-box
            margin-right: 0.3rem
            width: calc(14% - 0.3rem)
    & .buyNow
        position: fixed
        bottom: 6.6rem
        right: 0px
        width: 1.6rem
        z-index: 999
</style>
