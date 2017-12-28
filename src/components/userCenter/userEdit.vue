<template>
    <section class="user-edit">
        <!-- 填写手机号码 -->
        <div class="edit-phone">
            <div class="weui-cells__title">为了保障安全性，手机验证通过后才可解绑，解绑后不能再查到之前就诊相关记录，请慎重操作</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__hd">
                        <label class="weui-label">手机号码</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="tel" placeholder="请输入手机号">
                    </div>
                    <div class="weui-cell__ft">
                          <button class="weui-vcode-btn spe">获取验证码</button>
                    </div>
                </div>
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__hd">
                        <label class="weui-label">验证码</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="number" placeholder="请输入验证码">
                    </div>
                </div>
            </div>
            <div class="operate-box">
                <a>保存</a>
            </div>
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
</style>