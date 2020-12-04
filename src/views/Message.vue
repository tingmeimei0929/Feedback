<template>
    <div class="content">
        <el-from>
            <el-from-item>
                <el-input placeholder=""></el-input>
            </el-from-item>
        </el-from>
        <h2>留言板</h2>
        <p>在这可以留下您的问题，建议或者是想说的话。</p>
        <el-input type="textarea" :rows="2" placeholder="请输入内容"  autosize v-model="textarea">
        </el-input>
        <el-upload class="upload-demo" 
                    darg 
                    action="https://jsonplaceholder.typicode.com/posts/" 
                    multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能长传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
    
<script>
export default {
    name: "Message",
    data() {
        return {
            textarea:''
        };
    }
};
</script>

<style lang="scss" scoped>
@import url('../assets/scss/main.scss');
</style>