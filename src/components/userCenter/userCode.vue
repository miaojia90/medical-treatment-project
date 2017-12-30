<template>
    <section class="user-code">
        <div class="user-code-box">
          <p class="user-name">{{userCenterInfo.userName}}</p>
          <p class="desc"><span>就诊卡号：</span><span>{{userCenterInfo.outpatientNumber}}</span></p>
          <div class="line"></div>
          <div id="qrCode" class="qr-code" ref="qrCode">
                <qriously :value="userCenterInfo.outpatientNumber?userCenterInfo.outpatientNumber:''" :size="qriouslySize" class="qriously-small" />
          </div>
         <div class="desc center">出示就诊二维码给医务人员</div>
         <div class="operate-close-box">
             <a @click="closeBigCodeFun">关闭</a>
         </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            qriouslySize:0
        }
    },
    props: ['userCenterInfo'],
    methods: {
        closeBigCodeFun(){
            this.$emit('eventCallBack', null);
        }
    },
    mounted() {
        //生成二维码
        let qrCodeH = this.$refs.qrCode.offsetHeight-3;
        this.qriouslySize=qrCodeH;
    },
    components: {}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$r_750:640/750/2/32;
@function rem($px) {
    @return $px * $r_750 *1rem;
}
.user-code{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background-color: #FFF;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;   
    .user-code-box{
        width:rem(506);
        .user-name{
            color:#2B2B2B;
            font-size: rem(48);
        }
        .desc{
            color:#888888;
            font-size: rem(30);
            padding: rem(42) 0;
            &.center{
                text-align: center;
            }
        }
        .line{
            padding-top:rem(50);
            display: block;
            border-top:1px solid #CCC;
        }
        .qr-code{
            display:block;
            width:rem(506);
            height: rem(506);
        }
    }
}
</style>