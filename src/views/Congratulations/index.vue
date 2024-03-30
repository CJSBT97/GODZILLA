<template>
    <div class="userInfo">
        <div class="content">
            <div class="Page">
                <h3>Congratulations !</h3>
                <p>Your mining machine has been successfully purchased!</p>
                <img style="width: 80%"
                     src="@/assets/images/Mining.gif">
                <el-button class="loginButtom"
                           type="text"
                           @click="gotoAccountPage">Go To Account Page</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Congratulations',
    components: {

    },
    data () {
        return {}
    },
    methods: {
        gotoAccountPage () {
            this.$router.push('/userInfo')
        }
    }
}
</script>

<style lang="sass" scoped>
.userInfo
    position: relative
    background: url(~@/assets/images/banner6.png) no-repeat center
    background-size: cover
    padding: 1.6rem 0
    .content
        padding: 0 5%
        .Page
            display: flex
            justify-content: center
            align-items: center
            flex-direction: column
            padding: 1rem
            background: #fff
            background: linear-gradient(to bottom, #9f17b4, #15106a)
            border-radius: 20px
            text-align: center
            & h3
                color: #fff
                font-size: .6rem
                margin-bottom: 0.6rem
                font-family: BlackItalic
            & p
                font-size: .4rem
                color: #83ff3f
                margin-bottom: 0.6rem
                font-family: 'AlibabaSansRegular'
            & .loginButtom
                width: 4rem
                margin-top: 0.6rem
                height: 0.675rem
                text-align: center
                line-height: 0
                font-size: .3rem
                background-color: #18dcff
                border-radius: 60px
                color: #000
                font-family: 'AlibabaSansBold'
                z-index: 99
                &:hover
                    background-color: #18dcff
                    color: #000
</style>