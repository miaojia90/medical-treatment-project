<template>
    <section class="userInfo">
        <div class="weui-cells__title">建立个人健康档案，可提高就诊效率与自我健康管理</div>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" >
                <div class="weui-cell__bd">
                    <p>身高</p>
                </div>
                <div class="weui-cell__ft">{{userCenterInfo.personalFile.height}}</div>
            </a>
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>体重</p>
                </div>
                <div class="weui-cell__ft">{{userCenterInfo.personalFile.weight}}</div>
            </a>
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>血型</p>
                </div>
                <div class="weui-cell__ft">{{userCenterInfo.personalFile.bloodType}}</div>
            </a>
        </div>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" >
                <div class="weui-cell__bd">
                    <p>抽烟情况</p>
                </div>
                <div class="weui-cell__ft">{{userCenterInfo.personalFile.smokingSituation}}</div>
            </a>
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>喝酒情况</p>
                </div>
                <div class="weui-cell__ft">{{userCenterInfo.personalFile.smokingSituation}}</div>
            </a>
        </div>
        <div class="operate-box">
            <a class="active">保存</a>
        </div>
    </section>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState([
            'userCenterInfo'
        ])
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