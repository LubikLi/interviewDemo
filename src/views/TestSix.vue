<template>
  <div class="aboutTestSix">
    <div class="head font">
      写一个函数将传入的字符串进行千分位格式： 10000000000 -> 10,000,000,000<br>
     1写一个函数传入参数为字符串<br>
     2返回结果为加了千分位的字符串<br>
     3如果传入的字符串不合法，请进行提示<br>
      <el-icon class="closeBox">
        <Close @click="router.go(-1)" />
      </el-icon>
    </div>
    <el-button plain @click="open">点击这里输入数字</el-button>
    <div style="color: #409eff;padding-top: 20px;">
     输出结果： {{ resData }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Close } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();

function formatNumber(num: any) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

let resData = ref("")

import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.prompt('Please input your Number', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern: /^\d+(\.\d+)?$/,
    inputErrorMessage: '请输入数字',
  })
    .then(({ value }) => {
      resData.value = formatNumber(value)
      // ElMessage({
      //   type: 'success',
      //   message: `Your email is:${value}`,
      // })
    })
    .catch(() => {
      // ElMessage({
      //   type: 'info',
      //   message: 'Input canceled',
      // })
    })
}
</script>
<style lang="scss" scoped>

.aboutTestSix {
  padding: 16px 16px 0;
  background: url(/src/assets/top.png) no-repeat;
  background-size: 100%;
}

.moreText {
  display: inline-block;
  color: #409eff;
  font-size: 12px;
  background: white;

  span {
    color: #666;
    font-size: 12px;
  }
}

.head {
  position: relative;
  margin-bottom: 16px;
  .closeBox {
    position: absolute;
    top: 5px;
    right: 0;
  }
}

.font {
  font-size: 14px;
}

</style>