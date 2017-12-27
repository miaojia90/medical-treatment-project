<template>
    <section class="userInfo">
        <div class="weui-cells__title">个人基本信息</div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>姓名</p>
                </div>
                <div class="weui-cell__ft">秦小*</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>就诊卡</p>
                </div>
                <div class="weui-cell__ft">028364758</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>手机号</p>
                </div>
                <div class="weui-cell__ft">136*******52</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>身份证号</p>
                </div>
                <div class="weui-cell__ft">6****************2</div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>费别</p>
                </div>
                <div class="weui-cell__ft">医保</div>
            </div>
        </div>
        <div class="weui-cells__title">紧急联系人信息</div>
        <div class="weui-cells">
             <router-link class="weui-cell weui-cell_access" :to="{ name: 'userInfo', params: { userId: 123 }}">
                <div class="weui-cell__bd">
                    <p>紧急联系人</p>
                </div>
                <div class="weui-cell__ft">未填写</div>
            </router-link>
             <router-link class="weui-cell weui-cell_access" :to="{ name: 'userInfo', params: { userId: 123 }}">
                <div class="weui-cell__bd">
                    <p>关系</p>
                </div>
                <div class="weui-cell__ft">未填写</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access" :to="{ name: 'userEdit', params: { userId: 123 }}">
                <div class="weui-cell__bd">
                    <p>手机号</p>
                </div>
                <div class="weui-cell__ft">未填写</div>
            </router-link>
        </div>
        <div class="operate-box">
            <a class="white">解绑该就诊卡</a>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {},
    mounted() {
        document.title="个人信息";
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
</style>