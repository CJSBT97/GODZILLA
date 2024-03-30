<template>
    <div>
        <!-- banner -->
        <div class="banner">
            <img src="@/assets/images/banner3.png">
            <div class="bannerText marginBox">
                <img src="@/assets/images/GODZILLA.png">
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

        <!-- 总体内容加上了背景图 -->
        <div class="content marginBox">
            <div class="item UpDownBox flexCenter">
                <div class="itemText">
                    <h3>LLM</h3>
                    <h4>Decentralized Training of LLM ( Large Language Model ) <br> Multimodal LLM</h4>
                    <p>At the heart of Godzilla is our commitment to decentralization, not just in data generation and
                        distribution but also in large-scale model training. By using a network of distributed GPU devices,
                        we’re able to train complex LLM and Multimodal LLM in a decentralized way. This approach ensures
                        that no singular entity holds control over the model’s development, resulting in AI that’s robust,
                        versatile, and free from central biases.</p>
                </div>
                <img src="@/assets/images/LLM.png">
            </div>
            <div class="item UpDownBox flexCenter">
                <img src="@/assets/images/DAS.png">
                <div class="rightText">
                    <h3>DAS</h3>
                    <h4>Decentralized Training of LLM ( Large Language Model ) <br> Multimodal LLM</h4>
                    <p>Godzilla’s innovative architecture leverages Data Availability Sampling (DAS) to generate abundant
                        and varied data across the network. DAS allows secure scaling with user growth, enabling direct
                        verification and contribution from anyone operating a light node. This method sidesteps traditional
                        data control held by centralized entities, leading to more diverse and fair outcomes in model
                        training.</p>
                </div>
            </div>
            <div class="item UpDownBox flexCenter">
                <div class="itemText">
                    <h3>LLM</h3>
                    <h4>A Key to Democratized Technologies</h4>
                    <p>Depin, standing for “Decentralized Physical Infrastructure Networks”, serves as a cornerstone in
                        Godzilla’s revolutionary approach. Depin connects physical hardware devices, especially GPU
                        computing devices, in a decentralized network supported by cryptocurrency-based rewards. This
                        connection between the physical and digital realms democratizes access to essential resources,
                        allowing anyone with a GPU device to contribute to and benefit from the network.</p>
                </div>
                <img src="@/assets/images/Depin.png">
            </div>
            <div class="Core UpDownBox">
                <h3>Core Features</h3>
                <ul class="coreTopList">
                    <li>
                        <h4>Low Gas Fees</h4>
                        <p>Godzilla’s infrastructure stands as a testament to efficiency. We deliver high-speed performance
                            at a fraction of the cost of monolithic L2s by leveraging modular data availability.</p>
                    </li>
                    <li>
                        <h4>Developer-Friendly</h4>
                        <p>Our multi-modular approach offers developers the flexibility to leverage Godzilla’s private
                            identity tools across chains and in web2 environments, including mobile apps. Our SDKs and proof
                            keys offer developer-friendly solutions for integrating on-chain identity.</p>
                    </li>
                    <li>
                        <h4>Build Whatever You Imagine</h4>
                        <p>With Godzilla, you’re empowered to create. Quickly deploy and launch a blockchain or transform
                            virtually any VM into your own sovereign chain. Deploying a customizable blockchain becomes as
                            seamless as crafting a smart contract.</p>
                    </li>
                    <li>
                        <h4>Permissionless Entry</h4>
                        <p>Godzilla embodies the true spirit of decentralization by promoting a permissionless entry. We
                            believe that everyone should have the opportunity to contribute and benefit from the network,
                            fostering an environment that mirrors the diverse, dynamic, and decentralized world around us.
                        </p>
                    </li>
                    <li>
                        <h4>A Growing Ecosystem</h4>
                        <p>From DeFi to gaming to social platforms, applications deploying on Godzilla are designed to
                            deliver superior experiences and value to real users. We’re committed to exploring and nurturing
                            new, valuable use cases to address the pain points faced by real users.</p>
                    </li>
                </ul>
            </div>
            <div class="MontserratBold UpDownBox">
                <h2>Mint To Democratizing AI</h2>
                <a href="#">
                    <span>Discover</span>
                    <img src="@/assets/images/jt.png"
                         alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// import { stake, getTransctions, getPendingReward, userStaked, userSBTID, SBTUrl } from '@/utils/contract'
// import { mapGetters, mapState } from 'vuex'

export default {
    name: 'VaultPage',
    components: {

    },
    computed: {
    },
    data () {
        return {
            vueEcharts: null
        }
    },
    watch: {
    },
    mounted () {
    },
    destroyed () {
    },
    methods: {
    }
}
</script>
<style src="@/style/valut.css" scoped>
</style>
