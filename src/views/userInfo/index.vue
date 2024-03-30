<template>
    <div class="userInfo">
        <div class="content">
            <div class="item">
                <div class="title">
                    <img src="@/assets/images/user01.png">
                    <h3>SOL Collection</h3>
                </div>
                <div class="text">
                    <div class="copy">{{ message }}</div>
                    <el-button @click="copy"
                               class="loginButtom"
                               type="text">Copy</el-button>
                </div>
            </div>
            <div style="display: flex;justify-content: space-between;">
                <div class="item"
                     style="width: 47%;">
                    <div class="title">
                        <img src="@/assets/images/user02.png">
                        <h3>GDZ</h3>
                    </div>
                    <div class="text">
                        <div style="color: #fefefe;font-size: 0.4rem;font-family: UnboundedMedium;">1389.5</div>
                    </div>
                </div>
                <div class="item"
                     style="width: 47%;">
                    <div class="title">
                        <img src="@/assets/images/user03.png">
                        <h3>Value</h3>
                    </div>
                    <div class="text">
                        <div style="color: #48f9b4;font-size: 0.4rem;font-family: UnboundedMedium;">$ 257.33</div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="title">
                    <img src="@/assets/images/user04.png">
                    <h3 style="min-width: 4.3rem;">Mining Machine</h3>
                </div>
                <div style="display: flex;justify-content: space-between;text-align: left;">
                    <div style="width: 45%;"
                         class="list">
                        <ul>
                            <li>01 BASIC</li>
                            <li>02 BASIC</li>
                            <li>03 BASIC</li>
                        </ul>
                        <el-button class="loginButtom"
                                   type="text">+ ADD NEW</el-button>
                    </div>
                    <img style="width: 45%"
                         src="@/assets/images/Mining.gif">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    data () {
        return {
            message: '3GxzLiDFs37UiDgFGnS55Xk7RgEJsNmcnQ'
        }
    },
    methods: {
        copy () {
            const _input = document.createElement("input");   // 直接构建input
            this.message = this.message.replace(/<\/?.+?\/?>/g, '');
            _input.value = this.message;  // 设置内容
            document.body.appendChild(_input);    // 添加临时实例
            _input.select();   // 选择实例内容
            document.execCommand("Copy");   // 执行复制
            this.$message.success('Replicated');
            document.body.removeChild(_input); // 删除临时实例
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
        & .item
            margin-top: 25px
            position: relative
            border: 2px solid #276773
            border-radius: 10px
            text-align: center
            background: #020322
            padding: 0.4rem
            & .title
                width: auto!important
                display: flex
                align-items: center
                justify-content: space-between
                padding: 5px 10px
                position: absolute
                left: 50%
                transform: translateX(-50%)
                top: -17px
                background: #020322
                color: #fff
                font-size: 14px
                border-radius: 10px
                & h3
                    font-family: UnboundedMedium
                    white-space: nowrap
                & img
                    width: 0.6rem
                    height: 0.6rem
            & .loginButtom
                width: 2.5rem
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
            & .copy
                color: #949494
                font-size: 0.3rem
                position: relative
                font-family: AlibabaSansRegular
                &:before
                    content: ''
                    position: absolute
                    left: 11%
                    top: 38%
                    width: .1rem
                    height: 0.1rem
                    border-radius: 50%
                    background-color: #18dcff
            & .text
                padding: 0.6rem 0 0 0
    .list
        ul
            margin-top: 0.3rem

            li
                padding: 0.2rem 0.2rem 0.2rem 0.3rem
                font-size: 0.4rem
                position: relative
                color: #fff
                border-bottom: .0125rem dashed #767686
                font-family: BlackItalic
                &:nth-last-child(1)
                    border: none
                &::after
                    content: ''
                    position: absolute
                    left: 0
                    top: 50%
                    transform: translateY(-50%)
                    width: 0.1rem
                    height: 0.1rem
                    border-radius: 50%
                    background: #00ff36
</style>