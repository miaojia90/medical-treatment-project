<template>
    <section class="user-edit">
        <!-- 错误提示区域 -->
        <div class="head-prompt-msg" v-if="showPrompt">
            <p>{{promptMsg}}</p>
        </div>
        <!-- 填写手机号码 -->
        <div class="add-phone" v-if="false">
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
        <!-- 修改手机号码 -->
        <div class="edit-phone">
            <div class="weui-cells" :class="[showPrompt==true?'no-margin':'']">
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__hd">
                        <label class="weui-label">{{contactPhoneLbl}}</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="tel" placeholder="请输入手机号" v-focus autofocus="autofocus" maxlength="11" v-model="contactPhone">
                    </div>
                    <div class="input-close" @click="clearInput"></div>
                </div>
            </div>
            <div class="operate-box">
                <a :class="btnActive" @click="updataTelPhone">保存</a>
            </div>
        </div>
    </section>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { focus } from 'components/common/mixin';
export default {
    data() {
        return {
            showPrompt: false,
            promptMsg: '请输入正确的手机号码',
            contactPhone: '',
            btnActive: '',
            contactPhoneLbl: null
        }
    },
    computed: {
        ...mapState([
            'userCenterInfo',
            'userUpdate'
        ])
    },
    mixins: [focus],
    methods: {
        clearInput() {
            this.contactPhone = "";
            this.btnActive = "";
            this.showPrompt = false;
        },
        async updataTelPhone() {
            if (this.btnActive == "active" && this.showPrompt == false && this.contactPhone.length == 11) {
                //发送请求更改数据
                let args = {
                    "userId":this.$route.params.userId,
                    "parameters":{
                        "emergencyContact":{
                            "completePhone":this.contactPhone
                        }
                    }
                };
                await this.updateUserInfo(args);
            }
        },
        async getUserCenterData() {
            let userId = this.$route.params.userId;
            await this.getUserCenterInfo(userId);
        },
        ...mapActions([
            'updateUserInfo'
        ])
    },
    mounted() {
         this.contactPhoneLbl=this.userCenterInfo.emergencyContact.contactPhone;
    },
    watch: {
        userUpdate(value) {
            if (!value) {
                return;
            }else{
                //判断成功 重新请求一下数据
                if(value.resultState==1){
                   this.getUserCenterData();
                }
            }
        },
        contactPhone(value) {
            this.showPrompt = false;
            this.contactPhoneLbl=this.userCenterInfo.emergencyContact.contactPhone;
            if (!value) {
                return;
            } else {
                if (value.length < 11) {
                    return;
                }
            }
            var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (!myreg.test(this.contactPhone)) {
                this.showPrompt = true;
            } else {
                if (this.userCenterInfo.emergencyContact.completePhone == this.contactPhone) {
                    this.contactPhoneLbl = this.contactPhone;
                }else{
                    this.btnActive = "active";
                }
            }
        }
    },
    components: {}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$r_750:640/750/2/32;
@function rem($px) {
    @return $px * $r_750 *1rem;
}

.head-prompt-msg {
    background: #DC143C;
    color: #FFF;
    padding: rem(34) rem(44);
    font-size: rem(30);
    text-align: center;
}

.edit-phone {
    .weui-label {
        border-right: 1px solid #e5e5e5;
        margin-right: rem(20);
    }
    .weui-cells {
        &.no-margin {
            margin-top: 0;
        }
    }
    .input-close {
        position: absolute;
        width: rem(30);
        height: rem(30);
        right: rem(42);
        background: url(../../assets/images/close.png) no-repeat;
        background-size: 100% 100%;
    }
}
</style>