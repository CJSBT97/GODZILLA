<template>
    <div>
        <!-- banner -->
        <div class="banner">
            <img src="@/assets/images/banner2.png">
            <div class="bannertext">
                <div class="title3">
                    <img src="@/assets/images/h-logo.png">
                    <h3>Mine to co-build the <br> People's AI Model </h3>
                </div>
                <div class="aboutContent MarkersBlue">
                    Join decentralized to train Godzilla AI: <br>
                    fair launch, permissionless and total weird
                </div>
                <div class="title3">
                    <h3>What is GODZILLA ？</h3>
                </div>
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
            </div>
        </div>
        <!-- banner -->
        <div class="banner2">
            <img src="@/assets/images/banner4.png">
            <div class="bannerText2 marginBox">
                <img src="@/assets/images/phoneLogo.png">
                <h4>Democratizing AI Through</h4>
                <h4>Decentralized Data Availability And Infrastructure</h4>
                <p>Godzilla leverages the power of decentralization, making AI accessible to all. We use Data Availability
                    Sampling (DAS) for secure scaling with user growth and enable direct contribution via our Decentralized
                    Physical Infrastructure Networks (DePINs). In essence, we’re democratizing AI by transforming data
                    availability and infrastructure.
                </p>
                <ul>
                    <li>
                        <span>DAS</span>
                        <img src="@/assets/images/dasicon.png">
                    </li>
                    <li>
                        <img src="@/assets/images/depinicon.png">
                        <span>Depin</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="Odyssey">
                <div class="title2">
                    <span>G<span style="color: #18dcff;">O</span>DZILLA Ai</span>
                    <span>Odyssey</span>
                </div>
                <ul>
                    <li>
                        <img src="@/assets/images/odyssey1.png">
                        <div class="text">
                            <h3>Genesis Gateway <br> Personalized AI</h3>
                            <p>The first decentralized AI model that is built by the community.</p>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/odyssey2.png">
                        <div class="text">
                            <h3>Dialogue Docks <br> AI Interaction</h3>
                            <p>AIs start sharing knowledge and learning from each other.</p>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/odyssey3.png">
                        <div class="text">
                            <h3>Synergy Sphere <br> AI Agent Co-play</h3>
                            <p>Different AI Agents work together on complex problems.</p>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/odyssey4.png">
                        <div class="text">
                            <h3>Infinity Point <br> Self-learning & Evolution</h3>
                            <p>Creation of self-evolving AI</p>
                        </div>
                    </li>
                    <li>
                        <img src="@/assets/images/odyssey5.png">
                        <div class="text">
                            <h3>Leading Peak <br> Towards AGI</h3>
                            <p>Developing AI that can perform any intelligent task</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div class="title2">Leading Peak</div>
                <p style="color: #fff; font-size: 0.3rem;text-align: center;margin-bottom: 0.6rem;font-family: PoppinsExtraLight;">Towards AGI: Developing AI that <br> can perform any intelligent task.</p>
                <img src="@/assets/images/peak.png">
            </div>
            <div class="tokendis2">
                <div class="title2">Token <br> Distribution</div>
                <!-- 用于渲染 ECharts 图表的容器 -->
                <div id="token2"></div>
            </div>
            <div class="listText">
                <div class="title">
                    <img src="@/assets/images/token01.png">
                    <div class="text">
                        <h3>10%</h3>
                        <p>Artist & Creator</p>
                    </div>
                </div>
                <p>Innovation comes from thinking, and excellent AI models require human+AI collaboration. So whether you provide IP, creativity, or even Prompts - if you’re a creator, you’re valuable! That’s why we’ve established a 10% creator’s fund.
                </p>
            </div>
            <div class="listText">
                <div class="title">
                    <img src="@/assets/images/token02.png">
                    <div class="text">
                        <h3>20%</h3>
                        <p>Developer</p>
                    </div>
                </div>
                <p>The Godzilla AI Ecosystem thrives on a diverse range of AI Dapps. We need your wisdom and innovation, which is why we’re allocating 20% of tokens to all Dapp developers and tech builder.
                </p>
            </div>
            <div class="listText">
                <div class="title">
                    <img src="@/assets/images/token03.png">
                    <div class="text">
                        <h3>70%</h3>
                        <p>Miner</p>
                    </div>
                </div>
                <p>AI empowers the future, and computational power makes dreams come true. It’s only fair that our miners, who make significant contributions to th is, receive 70%.
                </p>
            </div>
        </div>
        <div class="listItem box">
            <h3 class="title2">MINING</h3>
            <div id="miningEcharts"></div>
            <ul class="miningList">
                <li>
                    <h4>1389.5<span>GDZ</span></h4>
                    <p>Block Reward</p>
                </li>
                <li>
                    <h4>2045<span>Images</span></h4>
                    <p>Block Consist</p>
                </li>
                <li>
                    <h4>1<span>Billion Images</span></h4>
                    <p>Supply Halving</p>
                </li>
                <li>
                    <h4>204.5<span>billion</span></h4>
                    <p>CIRCULATING SUPPLY</p>
                </li>
            </ul>
        </div>
        <div class="box">
            <div class="title2">GODZILLA <br> Mining Machine</div>
            <div class="Machine">
                <div class="MachineItem">
                    <div class="left">
                        <h3 style="color: #3abfd7">BASIC</h3>
                        <ul>
                            <li>· 810.2 / Epoch</li>
                            <li>· 16666.7 / Day</li>
                            <li>· 500000 / Month</li>
                        </ul>
                        <h4>3000<span>USDT</span></h4>
                    </div>
                    <div class="right">
                        <img src="@/assets/images/machine03.png">
                        <el-button class="MontserratBold"
                                   type="text">
                            <div style="display: flex;align-items: center;justify-content: space-between;padding: 0 10%;font-family: AlibabaSansBold">
                                <span>Buy Now</span>
                                <img src="@/assets/images/jt.png"
                                     alt="">
                            </div>
                        </el-button>
                    </div>
                </div>
                <div class="MachineItem">
                    <div class="left">
                        <h3 style="color:#9f41e7">PLUS</h3>
                        <ul>
                            <li>· 1552.9 / Epoch</li>
                            <li>· 31944.4 / Day</li>
                            <li>· 958333.3 / Month</li>
                        </ul>
                        <h4>5000<span>USDT</span></h4>
                    </div>
                    <div class="right">
                        <img src="@/assets/images/machine02.png">
                        <el-button class="MontserratBold"
                                   type="text">
                            <div style="display: flex;align-items: center;justify-content: space-between;padding: 0 10%;font-family: AlibabaSansBold">
                                <span>Buy Now</span>
                                <img src="@/assets/images/jt.png"
                                     alt="">
                            </div>
                        </el-button>
                    </div>
                </div>
                <div class="MachineItem">
                    <div class="left">
                        <h3 style="color: #ff48ad;">PRO</h3>
                        <ul>
                            <li>· 3645.8 / Epoch</li>
                            <li>· 75000 / Day</li>
                            <li>· 2250000 / Month</li>
                        </ul>
                        <h4>10000<span>USDT</span></h4>
                    </div>
                    <div class="right">
                        <img src="@/assets/images/machine01.png">
                        <el-button class="MontserratBold"
                                   type="text">
                            <div style="display: flex;align-items: center;justify-content: space-between;padding: 0 10%;font-family: AlibabaSansBold">
                                <span>Buy Now</span>
                                <img src="@/assets/images/jt.png"
                                     alt="">
                            </div>
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="title2">Strategic <br> Investment</div>
            <div class="iconList">
                <div class="iconList-item"><img src="@/assets/images/iconList01.png"></div>
                <div class="iconList-item"><img src="@/assets/images/iconList02.png"></div>
            </div>
        </div>
        <div class="box">
            <div class="title2">Partner</div>
            <div class="iconList">
                <div class="iconList-item"><img src="@/assets/images/iconList03.png"></div>
                <div class="iconList-item"><img src="@/assets/images/iconList04.png"></div>
                <div class="iconList-item"><img src="@/assets/images/iconList05.png"></div>
                <div class="iconList-item"><img src="@/assets/images/iconList06.png"></div>
                <div class="iconList-item"><img src="@/assets/images/iconList07.png"></div>
                <div class="iconList-item"><img src="@/assets/images/iconList08.png"></div>
                <div class="iconList-item"><img src="@/assets/images/iconList09.png"></div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import IconBad from '@/assets/images/token01.png'
import IconBad2 from '@/assets/images/token02.png'
import IconBad3 from '@/assets/images/token03.png'

// import $ from 'jquery'
export default {
    name: 'WebHome',
    components: {
    },
    computed: {
    },
    created () {
    },
    data () {
        return {
        }
    },
    mounted () {
        this.inCharts()
        this.inCharts2()
    },
    beforeDestroy () {
    },
    methods: {
        inCharts () {
            const myChart = echarts.init(document.getElementById('token2'));
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
            let urlImg = null
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
                            borderWidth: 5,
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
                            borderWidth: 10
                        }
                    }
                })
            }
            const seriesOption = [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: ['60%', '70%'],
                hoverAnimation: true,
                labelLayout: {
                    hideOverlap: false
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outer',
                            alignTo: 'labelLine',
                            formatter: function (params) {
                                let percent = 0
                                let total = 0
                                for (let i = 0; i < trafficWay.length; i++) {
                                    total += trafficWay[i].value
                                }
                                percent = ((params.value / total) * 100).toFixed(0) + '%'
                                if (params.name !== '') {
                                    if (params.name == 'Miner') {
                                        urlImg = '{c|}'
                                    } else if (params.name == 'Artist & Creator') {
                                        urlImg = '{d|}'
                                    } else {
                                        urlImg = '{e|}'
                                    }
                                    return `${urlImg}\n\n{a|${params.name}}\n\n{b|${percent}}`
                                } else {
                                    return ''
                                }
                            },
                            rich: {
                                a: {
                                    fontSize: 10,
                                    fontFamily: 'AlibabaSansRegular',
                                    color: '#fff'
                                },
                                b: {
                                    fontSize: 20,
                                    fontFamily: 'UnboundedMedium',
                                    color: '#00efa9'
                                },
                                c: {
                                    width: 30,
                                    height: 30,
                                    align: 'right',
                                    backgroundColor: {   //重点在这
                                        image: IconBad
                                    }
                                },
                                d: {
                                    width: 30,
                                    height: 30,
                                    align: 'left',
                                    backgroundColor: {   //重点在这
                                        image: IconBad2
                                    }
                                },
                                e: {
                                    width: 30,
                                    height: 30,
                                    align: 'left',
                                    backgroundColor: {   //重点在这
                                        image: IconBad3
                                    }
                                }
                            }
                        },
                        labelLine: {
                            length: 10,
                            length2: 10,
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
                            borderWidth: 25,
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
                    text: `{a|${titleToken}}\n{b|${titleNum}}\n{c|${titleDW}}`,
                    top: '40%',
                    textAlign: "center",
                    left: "50%",
                    textStyle: {
                        rich: {
                            a: {
                                fontSize: 14,
                                fontFamily: 'AlibabaSansBold',
                                color: '#00a796',

                            },
                            b: {
                                fontSize: 20,
                                fontFamily: 'UnboundedMedium',
                                color: '#fff'
                            },
                            c: {
                                fontSize: 14,
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
            myChart.setOption(option);
        },
        inCharts2 () {
            const myChart = echarts.init(document.getElementById('miningEcharts'));
            const option = {
                grid: {
                    left: '15%',
                    top: '10%',
                    bottom: '10%',
                    right: '5%'
                },
                title: {
                    text: `T\nO\nT\nA\nL\n\nS\nU\nP\nP\nL\nY`,
                    top: '20%',
                    textAlign: "middle",
                    left: "0%",
                    textStyle: {
                        fontSize: 12,
                        fontFamily: 'AlibabaSansLight',
                        color: '#4ee0cf'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#36363e',
                            type: 'solid',
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#303039',
                            tyoe: 'solid',
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    name: 'B',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#303039',
                            tyoe: 'solid',
                            width: '1'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#36363e',
                            type: 'solid',
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#4ee0cf',
                        }
                    },
                },
                series: [
                    {
                        data: [120, 500, 1330, 1330, 1330, 1330, 1330],
                        type: 'line',
                        smooth: true, // 折线弧度
                        itemStyle: {
                            normal: {
                                color: '#0b9595',
                                lineStyle: {
                                    color: '#0b9595',
                                    width: 2,
                                }
                            }
                        },
                    }
                ]
            }
            myChart.setOption(option);
        },
    }
}
</script>

<style lang="sass" scoped>
.banner, .banner2
    position: relative

.banner
    & .aboutContent
        padding: 0.3rem 0
        font-size: .3rem
        color: rgb(107,108,151)
        font-family: 'AlibabaSansRegular'
    & .title3
        width: 100%
        color: #fff
        & h3
            font-family: 'AvenirRoman'
            font-weight: normal
            font-size: 0.6rem
        & img
            width: 66%
    & .MarkersBlue
        color: rgb(24,220,255)
        font-size: .3rem
        font-family: 'AlibabaSansMedium'
    & .bannertext
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
        width: 90%

.bannerText2
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
    width: 100%
    color: #fff
    font-family: 'PoppinsMedium'

.bannerText2 h4, .item h4, .coreTopList h4
    font-size: .4rem
    font-family: PoppinsExtraLight

.bannerText2 p, .item p, .coreTopList p
    font-size: .3rem
    color: #dddddd
    font-family: 'AlibabaSansRegular'

.bannerText2 > img
    width: 55%

.bannerText2 ul
    margin-top: 3%
    display: flex
    justify-content: space-around

.bannerText2 li
    overflow: hidden
    display: flex
    align-items: center
    justify-content: space-between
    margin-right: .5rem
    padding: .25rem 0.6rem
    width: 40%
    height: auto
    border: 1px solid #635c84
    border-radius: 10px
    font-size: 0.6rem
    font-family: AvenirRoman

.bannerText2  li  img
    width: 25%

.title2
    color: #fff
    font-family: BlackItalic
    font-size: .6rem
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin-bottom: 0.6rem
    margin-top: 0.6rem

.box
    padding: 0 5%
    box-sizing: border-box
.content
    display: block
    padding: 0 5%
    background-image: url(~@/assets/images/vaultbg.png)
    background-repeat: no-repeat
    background-size: 100% 100%

    .tokendis2
        position: relative
        background-repeat: no-repeat
        background-size: cover
        #token2
            width: 100%
            height: 7rem
    .listText
        margin-top: 0.5rem
        & .title
            display: flex
            align-items: center

            .text
                p
                    font-family: AlibabaSansBold

    & .Odyssey
        ul
            display: flex
            justify-content: space-around
            flex-wrap: wrap
            color: #fff
            li
                width: calc( 50% - 5% )
                margin-bottom: .5rem
                position: relative
                & .text
                    width: 100%
                    position: absolute
                    left: 42%
                    top: 60%
                    transform: translate(-50%,-50%)
                    text-align: center
                    & h3
                        font-size: .3rem
                        font-family: MontserratRegular
                        font-weight: normal

                    & p
                        margin-top: 0.1rem
                        font-size: 0.2rem
                        font-family: AlibabaSansRegular
    & .listText
        & .title
            display: flex
            align-items: center
            margin-bottom: 0.3rem
            img
                width: 10%
                height: 100%
            & .text
                margin-left: 2%
                h3
                    font-size: .4rem
                    color: #00f0aa
                    font-family: 'UnboundedMedium'
                p
                    font-size: .4rem
                    color: #fff
                    font-family: 'AlibabaSansBold'
        & p
            font-size: 0.3rem
            font-family: 'AlibabaSansRegular'
            color: #8b8cba

.listItem
    // padding-bottom: 10%
    color: #fff

    #miningEcharts
        width: 100%
        height: 7rem
        margin-top: 0.5rem

        & h4
            font-family: 'UnboundedMedium'
            font-size: .5rem
            margin-bottom: 1rem

        & p
            font-family: 'AlibabaSansRegular'
            font-size: .375rem
            line-height: 1rem
            margin-bottom: 0.5rem

        & span
            font-family: 'AlibabaSansBold'
            font-size: .45rem
            color: #00f0aa

        & img
            width: 60%

        &Text
            position: relative
            padding-left: 0.8rem
            margin-bottom: 0.5rem

        &Text h5
            font-family: 'UnboundedMedium'
            font-size: .5rem
            margin-bottom: 0.5rem

        &Text h5:after
            content: ''
            display: block
            position: absolute
            left: 0
            top: 5px
            width: 14px
            height: .5rem
            border-radius: 20px
            background-color: #9fe4ec

.miningList
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    color: #fff

    & li
        text-align: center
        width: 40%
        margin: 5%
        background-image: url(~@/assets/images/19.png)
        background-repeat: no-repeat
        background-size: 100% 100%

        & h4
            margin: 0
            font-size: .6rem

        & h4 span
            display: block
            color: #fff
            font-size: .35rem

        & p
            margin: 0
            font-size: .35rem
            line-height: 0.35rem
            font-family: 'AlibabaSansBold'
            color: #32998e
.Machine
    & .MachineItem
        margin-bottom: 15px
        display: flex
        justify-content: space-between
        border: 1px solid #fff
        width: 100%
        color: #fff
        padding: 5%
        box-sizing: border-box
        border-radius: 20px
        .left , .right
            width: 45%
        .left
            width: 45%
            display: flex
            flex-direction: column
            justify-content: space-between
            h3
                font-size: .7rem
                font-family: 'BlackItalic'
            h4
                font-size: .7rem
                font-family: 'AlibabaSansBold'
                span
                    font-size: .35rem
                    font-weight: normal
                    opacity: 0.4
                    font-family: 'BlackItalic'
            ul
                color: #8687b4
                font-size: .4rem
                font-family: MontserratRegular
        & .MontserratBold
            border-radius: 60px
            margin: 5% 0 0 0
            font-family: 'MontserratBold'
            width: 100%
            background-color: #18dcff
            color: #000
            // padding: 5px
            font-size: .375rem
            & img
                width: 20%

.iconList
    display: flex
    flex-wrap: wrap
    &-item
        margin-right: 2%
        background: #19193d
        padding: 4%
        box-sizing: border-box
        border-radius: 13px
        width: 48%
        display: flex
        align-items: center
        justify-content: center
        margin-bottom: 0.6rem
</style>
