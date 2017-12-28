<template>
    <section class="other-user-card">
        <div class="weui-cells__title">选择／添加需要就诊的人员</div>
        <div class="card-box weui-flex active">
            <div class="content-box  weui-flex__item">
                <div class="userName"><span>李珊珊</span><span class="mark">医保</span><span class="desc">当前就诊人</span></div>
                <div class="code"><span>就诊卡号:</span><span class="code-value">00012745</span></div>
            </div>
        </div>
        <div class="card-box  weui-flex">
            <div class="content-box  weui-flex__item">
                <div class="userName"><span>李珊珊</span><span class="mark orange">自费</span></div>
                <div class="code"><span>就诊卡号:</span><span class="code-value">00012745</span></div>
            </div>
        </div>
        <div class="card-box weui-flex">
            <div class="content-box  weui-flex__item">
                <div class="userName"><span>李珊珊</span><span class="mark blue">医保</span></div>
                <div class="code"><span>就诊卡号:</span><span class="code-value">00012745</span></div>
            </div>
        </div>
        <div class="operate-box green">
            <a>+&nbsp;&nbsp;添加就诊人</a>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {},
    mounted() {
        //生成二维码
    },
    components: {}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$r_750:640/750/2/32;
@function rem($px) {
    @return $px * $r_750 *1rem;
}





/*用户卡片样式*/

.other-user-card {
    .card-box {
        margin: 0 rem(30) rem(32) rem(30);
        padding: rem(52) rem(50);
        border-radius: rem(14);
        &.active {
            color: #FFF;
            @extend .gradient-to-top;
            .content-box {
                .code {
                    font-size: rem(30);
                    margin-top: rem(15);
                    color: rgba(255, 255, 255, 0.8);
                    .code-value {
                        margin-left: rem(20);
                    }
                }
            }
        }
        @extend .no-choose-bg;
        .content-box {
            font-size: rem(36);
            position: relative;
            .userName {
                display: flex;
                align-items: center;
                position: relative;
                .mark {
                    display: inline-block;
                    font-size: rem(22);
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: rem(4);
                    margin-left: rem(20);
                    padding: rem(10) rem(10) rem(5) rem(10);
                    &.blue{
                        color:#164DBA;
                        background: rgba(22,77,186,0.1);
                    }
                    &.orange{
                        color:#FF8940;
                        background:rgba(255,137,64,0.1);
                    }
                }
                .desc {
                    position: absolute;
                    right: 0;
                    font-size: rem(26);
                }
            }
            .code {
                font-size: rem(30);
                margin-top: rem(15);
                color:#888;
                .code-value {
                    margin-left: rem(20);
                }
            }
        }
    }
    .no-choose-bg {
        background: #FFF url(../../assets/images/mask.png) no-repeat right top;
        background-size: rem(270) rem(200);
    }
    .gradient-to-top {
        background-image: -webkit-linear-gradient(to top, #4343E8, #164DBA);
        background-image: linear-gradient(to top, #4343E8, #164DBA);
        background-size: 100% 100%;
    }
}
</style>