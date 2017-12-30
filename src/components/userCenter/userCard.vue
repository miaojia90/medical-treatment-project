<template>
    <section class="user-card">
        <div class="card-box weui-flex">
            <div class="content-box weui-flex__item">
                <div class="userName"><span>{{userCenterInfo.userName}}</span><span class="mark">{{userCenterInfo.typeDesc}}</span></div>
                <div class="code"><span>就诊卡号:</span><span class="code-value">{{userCenterInfo.outpatientNumber}}</span></div>
                <div class="change">
                    <span>切换就诊人</span>
                </div>
            </div>
            <div class="code-box weui-flex__item" @click="showBigCodeFun">
                <div id="qrCode" class="qr-code" ref="qrCode">
                    <qriously :value="userCenterInfo.outpatientNumber" :size="qriouslySize" class="qriously-small" />
                </div>
                <div class="desc">点击出示就诊二维码</div>
            </div>
        </div>
        <transition name="fade">
        <UserCode v-if="showBigCode" @eventCallBack="eventCallBack" :userCenterInfo="userCenterInfo"></UserCode>
        </transition>
    </section>
</template>
<script>
import UserCode from './userCode';
export default {
    data() {
        return {
           showBigCode:false,
           qriouslySize:100
        }
    },
    props: ['userCenterInfo'],
    methods: {
        showBigCodeFun(){
            this.showBigCode=true;
        },
        eventCallBack(){
            this.showBigCode=false;
        }
    },
    mounted() {
        //生成二维码
        let qrCodeH = this.$refs.qrCode.offsetHeight-3;
        this.qriouslySize=qrCodeH;
    },
    components: {UserCode}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$r_750:640/750/2/32;
@function rem($px) {
    @return $px * $r_750 *1rem;
}


/*用户卡片样式*/
.user-card {
    color: #FFF;
    .content-box {
        font-size: rem(36);
        position: relative;
        .userName {
            display: flex;
            align-items: center;
            .mark {
                display: inline-block;
                font-size: rem(22);
                background: rgba(255, 255, 255, 0.1);
                border-radius: rem(4);
                margin-left: rem(20);
                padding: rem(10) rem(10) rem(5) rem(10);
            }
        }
        .code {
            font-size: rem(30);
            margin-top: rem(15);
            color: rgba(255, 255, 255, 0.8);
            .code-value {
                margin-left: rem(20);
            }
        }
    }
    .code-box {
        overflow: hidden;
        .desc {
            float: right;
            font-size: rem(26);
            color: rgba(255, 255, 255, 0.8);
            padding-top: rem(16);
        }
        .qr-code {
            float: right;
            width: rem(250);
            height: rem(250);
            background: #FFF;
            border-radius: rem(14);
        }
    }
    .card-box {
        margin: rem(32) rem(30);
        padding: rem(30);
        border-radius: rem(14);
        @extend .gradient-to-top;
    }
    .change {
        border: 1px solid #FFF;
        border-radius: rem(10);
        font-size: rem(20);
        padding: rem(10) rem(10);
        position: absolute;
        bottom: 0;
        &:before {
            content: '';
            display: inline-block;
            width: rem(28);
            height: rem(28);
            vertical-align: middle;
            margin-top: rem(-4);
            margin-right: rem(5);
            background: url(../../assets/images/change.png);
            background-size: 100% 100%;
        }
    }
    .gradient-to-top {
        background-image: -webkit-linear-gradient(to top, #4343E8, #164DBA);
        background-image: linear-gradient(to top, #4343E8, #164DBA);
    }
}
/*过渡动画*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>