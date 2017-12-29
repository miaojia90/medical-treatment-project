<template>
    <section class="userInfo">
        <div class="weui-cells__title">建立个人健康档案，可提高就诊效率与自我健康管理</div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access" :to="{ name: 'userInfo', params: { userId: 123 }}">
                <div class="weui-cell__bd">
                    <p>身高</p>
                </div>
                <div class="weui-cell__ft">未填写</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access" :to="{ name: 'userInfo', params: { userId: 123 }}">
                <div class="weui-cell__bd">
                    <p>体重</p>
                </div>
                <div class="weui-cell__ft">未填写</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access" :to="{ name: 'userInfo', params: { userId: 123 }}">
                <div class="weui-cell__bd">
                    <p>血型</p>
                </div>
                <div class="weui-cell__ft">未填写</div>
            </router-link>
        </div>
        <div class="weui-cells">
            <router-link class="weui-cell weui-cell_access" :to="{ name: 'userInfo', params: { userId: 123 }}">
                <div class="weui-cell__bd">
                    <p>抽烟情况</p>
                </div>
                <div class="weui-cell__ft">未填写</div>
            </router-link>
            <router-link class="weui-cell weui-cell_access" :to="{ name: 'userInfo', params: { userId: 123 }}">
                <div class="weui-cell__bd">
                    <p>喝酒情况</p>
                </div>
                <div class="weui-cell__ft">未填写</div>
            </router-link>
        </div>
        <div class="operate-box">
            <a class="active">保存</a>
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