<template>
    <div>
        <!-- banner -->
        <div class="banner">
            <img src="@/assets/images/banner.png">
        </div>

        <!-- about -->
        <div class="about marginBox UpDownBox">
            <div class="title">
                <div class="titleLogo"><img src="@/assets/images/titleLogo.png"></div>
                <h3>What is GODZILLA ？</h3>
            </div>
            <div class="flexCenter">
                <div class="left">
                    <div class="aboutContent">
                        Godzilla Token is a visionary token with a total supply of <span class="MarkersBlue">204,500,000,000
                            tokens</span>.
                        Designed to fulfill the aspiration of achieving Artificial General Intelligence (AGI) for the
                        people,
                        the token will be used by All Godzilla ecosystem, It stands not just as a token, but jas a symbol of
                        our
                        shared mission,
                        and it belongs to everyone of the community. Godzilla Token is more than just currency-it's the key
                        to
                        unlocking the next stage of human future.
                    </div>

                    <a class="loginButtom">View Docs</a>
                </div>
                <div class="right">
                    <img src="@/assets/images/icon.png">
                </div>
            </div>
        </div>

        <!-- tokendis -->
        <div class="marginBox UpDownBox tokendis">
            <div class="title">
                <div class="titleLogo"><img src="@/assets/images/titleLogo.png"></div>
                <h3>Token distribution</h3>
            </div>
            <!-- 用于渲染 ECharts 图表的容器 -->
            <div id="token"></div>
        </div>

        <div class="marginBox UpDownBox Ultimate">
            <div class="title">
                <div class="titleLogo"><img src="@/assets/images/titleLogo.png"></div>
                <h3>Ultimate Vision</h3>
            </div>
            <div class="UltimateItem flexCenter">
                <img class="UltimateItemLogo"
                     src="@/assets/images/1.png">
                <div>
                    <div class="UltimateItemTile">WEB 3</div>
                    <p>
                        Born out of the need for a fairer Al landscape, Godzilla leverages the principles of Web3 to create
                        a more equitable, permissionless Al that caters to everyone's unique needs and aspirations.
                    </p>
                </div>
            </div>
            <div class="line">
                <img src="@/assets/images/line.png">
            </div>
            <div class="UltimateItem flexCenter">
                <div style="text-align: right;">
                    <div class="UltimateItemTile">Wild Mind</div>
                    <p>
                        This new breed of Al, free from the shackles of corporate control, has been christened 'Wild Mind.'
                        Unlike traditional Al, Wild Mind is a truly democratic system, serving the many, not just the few.
                    </p>
                </div>
                <img class="UltimateItemLogoRight"
                     src="@/assets/images/2.png">
            </div>
            <div class="line">
                <img src="@/assets/images/line2.png">
            </div>
            <div class="UltimateItem flexCenter">
                <img class="UltimateItemLogo"
                     src="@/assets/images/3.png">
                <div>
                    <div class="UltimateItemTile">People's AI</div>
                    <p>
                        Godzilla’s ultimate vision? To usher in a future where everyindividual, through the power of
                        Godzilla Coin, can own and operate their very own Wild Mind. In this brave new world, Al becomes a
                        tool for empowerment, not control. Welcome to the dawn of the Godzilla era.
                    </p>
                </div>
            </div>
        </div>

        <!-- join -->
        <div class="marginBox join">
            <div class="title">
                <div class="titleLogo"><img src="@/assets/images/titleLogo.png"></div>
                <h3>Join Community</h3>
            </div>
            <p>Your desire for freedom drives you to join Web3 empowering Godzilla community</p>
        </div>
    </div>
</template>

<script>
// import { stake, getTransctions, getPendingReward, userStaked, userSBTID, SBTUrl } from '@/utils/contract'
// import { mapGetters, mapState } from 'vuex'
// import { toggTop, navList } from '@/utils/app'
import * as echarts from 'echarts';
import $ from 'jquery'

export default {
    name: 'PageDetail',
    components: {

    },
    computed: {
    },
    data () {
        return {
            mycharts: null
        }
    },
    watch: {
    },
    mounted () {
        // toggTop()
        // navList()
        this.inCharts()
    },
    destroyed () {
    },
    methods: {
        inCharts () {
            this.myChart = echarts.init(document.getElementById('token'));
            const trafficWay = [
                {
                    name: 'Miner',
                    value: 70
                }, {
                    name: 'Artist & Creator',
                    value: 10
                }, {
                    name: 'Developer',
                    value: 20
                }]
            const data = []
            const color = ['#00efa9', '#53f0e0', '#00b2a7']
            const titleToken = 'TOKEN'
            let titleNum = 204.5
            let titleDW = 'BILLION'
            for (var i = 0; i < trafficWay.length; i++) {
                data.push({
                    value: trafficWay[i].value,
                    name: trafficWay[i].name,
                    itemStyle: {
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        normal: {
                            borderWidth: 10,
                            shadowBlur: 30,
                            borderColor: color[i],
                            shadowColor: color[i]
                        }
                    }
                }, {
                    value: 2,
                    name: '',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 20
                        }
                    }
                })
            }
            const seriesOption = [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: ['60%', '70%'],
                hoverAnimation: false,
                itemStyle: {
                    color: (params) => { // 自定义颜色函数
                        return color[params.dataIndex];
                    },
                    emphasis: {
                        opacity: 1 // 将emphasis.opacity设置为1表示不显示高亮效果
                    },
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: function (params) {
                                let percent = 0
                                let total = 0
                                for (let i = 0; i < trafficWay.length; i++) {
                                    total += trafficWay[i].value
                                }
                                percent = ((params.value / total) * 100).toFixed(0) + '%'
                                if (params.name !== '') {
                                    return `{a|${params.name} }\n\n{b|${percent} } `
                                } else {
                                    return ''
                                }
                            },
                            rich: {
                                a: {
                                    fontSize: 30,
                                    fontFamily: 'AlibabaSansRegular',
                                    color: '#fff'
                                },
                                b: {
                                    fontSize: 50,
                                    fontFamily: 'UnboundedMedium',
                                    color: '#00efa9'
                                }
                            }
                        },
                        labelLine: {
                            length: 30,
                            length2: 100,
                            show: false,
                            color: '#fff'
                        }
                    }
                },
                data: data
            },
            {
                name: '边框线',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ['50%', '50%'],
                radius: ['51%', '51%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.8, // 设置圆环的透明度为0.5（范围从0到1）
                    },
                    emphasis: {
                        opacity: 1 // 将emphasis.opacity设置为1表示不显示高亮效果
                    }
                },
                data: [{
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 50,
                            borderColor: '#00ae9d',
                        }
                    }
                }]
            },
            // 边框的设置
            {
                name: '外边框',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: true, //鼠标移入变大
                center: ['50%', '50%'],
                radius: ['55%', '55%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    emphasis: {
                        opacity: 1 // 将emphasis.opacity设置为1表示不显示高亮效果
                    }
                },
                data: [{
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#35cfc8',
                            opacity: 1 // 将emphasis.opacity设置为1表示不显示高亮效果
                        }
                    }
                }]
            }]
            const option = {
                backgroundColor: 'rgba(255,255,255,0)',
                color: color,
                title: {
                    text: `{a|${titleToken}}\n\n{b|${titleNum}}\n\n{c|${titleDW}}`,
                    top: '40%',
                    textAlign: "center",
                    left: "50%",
                    textStyle: {
                        rich: {
                            a: {
                                fontSize: 20,
                                fontFamily: 'AlibabaSansBold',
                                color: '#00a796',

                            },
                            b: {
                                fontSize: 50,
                                fontFamily: 'UnboundedMedium',
                                color: '#fff'
                            },
                            c: {
                                fontSize: 20,
                                fontFamily: 'AlibabaSansBold',
                                color: '#fff'
                            }
                        }
                    }
                },
                tooltip: {
                    show: false
                },
                toolbox: {
                    show: false
                },
                series: seriesOption
            }
            this.myChart.setOption(option);
        },
        getPage () {
            const that = this
            $(window).on("resize", function () {
                let width = $(window).width();
                that.myChart.resize();
                // 当屏幕小于 1024 时 改变img图片地址
                if (width <= 1024) {
                    $(".banner").children("img").attr("src", require('@/assets/images/banner2.png'));
                }
                else {
                    $(".banner").children("img").attr("src", require('@/assets/images/banner.png'));
                }
            })

            // 页面刷新时
            $(window).on("load", function () {
                let width = $(window).width();
                // 当屏幕小于 1024 时 改变img图片地址
                if (width <= 1024) {
                    that.inCharts()
                    $(".banner").children("img").attr("src", require('@/assets/images/banner2.png'));
                }
                else {
                    that.inCharts2()
                    $(".banner").children("img").attr("src", require('@/assets/images/banner.png'));
                }
            })
        }
    }
}
</script>
<style scoped>
@import "~@/style/home.css";
</style>
