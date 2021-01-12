<template>
    <div class="content">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="message-form" >
            <el-form-item label="用户信息" prop="username" >
                <el-input v-model="ruleForm.username" class="enterDesc"></el-input>
            </el-form-item>
            <el-form-item label="商户订单号" prop="singleNumber">
                <el-input v-model="ruleForm.singleNumber" class="enterDesc" placeholder="请输入您的商户订单号"></el-input>
                <p class="prompt">1、如果您使用支付宝支付，请打开手机支付宝，点击“我的” - “订单”，即可找到商户订单号(FT开头)。</p>
                <p class="prompt">2、如果您使用微信支付，请打开手机微信，在信息流中点击“微信支付” - 找到并点击订购FT中文网的订单，即可找到商户单号。</p>
            </el-form-item>
            <el-form-item label="问题描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc" class="enterDesc"></el-input>
            </el-form-item>
            <el-form-item label="优先级">
                <el-radio-group v-model="ruleForm.priority">
                    <el-radio label="普通"></el-radio>
                    <el-radio label="紧急"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="联系方式" prop="phone">
                <el-input v-model="ruleForm.phone" class="enterDesc" placeholder="请输入您的联系方式"></el-input>
                <p class="prompt">紧急情况时FT客服会与您电话联系，请填写正确的联系方式。</p>
            </el-form-item>
            <el-form-item label="上传" prop="imgUrl">
                <el-upload  class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                            :on-success="handleAvatarSuccess">
                    <img v-if="ruleForm.imgUrl" :src="ruleForm.imgUrl">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <div class="btnModel">
                <el-button  type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
            </div>
        </el-form>
    </div>
</template>
    
<script>
export default {
    name: "Message",
    data() {
        // 验证手机号
        const checkPhone = (rule, value, callback) => {
            if (!value) {
                callback(new Error('手机号不能为空'))
            } else {
                const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
                if (reg.test(value)) {
                    callback()
                } else {
                    callback(new Error("请输入正确的手机号"))
                }
            }
        }
        return {
            ruleForm: {
                username: '',
                singleNumber: '',
                phone: '',
                desc: '',
                imgUrl: '',
                priority: ''
            },
            rules: {
                phone: [
                    {validator: checkPhone, trigger: 'blur'}
                ],
                imgUrl: [
                    {
                        required: true,
                        message: ' 请上传图片',
                        trigger: 'change'
                    }
                ]
            }
        }
    },
    methods: {
        submitForm() {
            var that = this;
            // this.ruleForm.createTime = new Date().format("yyyy-MM-dd hh:mm:ss");
            let formData = new FormData();
            formData.append('username',this.ruleForm.username)
            formData.append('singleNumber',this.ruleForm.singleNumber)
            formData.append('desc',this.ruleForm.desc)
            formData.append('priority',this.ruleForm.priority)
            formData.append('phone',this.ruleForm.phone)
            formData.append('imgUrl',this.ruleForm.imgUrl)
            this.$refs.ruleForm.validate(valid => {
                //如果通过校验开始登录
                if (valid) {
                    this.axios.post('', formData).then(res => {
                        
                    }).catch(err => {
                        
                    })
                }
            })
        },
        resetForm() {
            this.$refs.ruleForm.resetFields()
        },
        handleAvatarSuccess(res, file) {
            this.$refs.imgUrl.clearValidate(); 
            this.ruleForm.imgUrl = res.data.filepath;
            // 上传成功后，手动校验一次表单
            this.$refs.ruleForm.validateField('imgUrl');
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('../assets/scss/main.scss');
</style>