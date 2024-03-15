<template>
  <div class="TestTwoEdit">
    <div>
      修改员工
    </div>
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
      class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="员工姓名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="员工性别">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio value="男">男</el-radio>
          <el-radio value="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="员工年龄" prop="age">
        <el-input v-model="ruleForm.age" />
      </el-form-item>
      <el-form-item label="员工薪资" prop="money">
        <el-input v-model="ruleForm.money" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useAppStore } from '@/stores'
import { useRoute } from "vue-router";
const route = useRoute();
interface RuleForm {
  name: string
  sex: string
  age: string
  money: string
}
const store = useAppStore()
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
let obj: any = reactive({})
if (route.query?.id) {
  let data = JSON.parse(localStorage.getItem("app") || "")
  console.log("data", data);

  obj = data.find((f: { id: string | string[]; }) => f.id === route.query?.id) || {}
}

const ruleForm = reactive<RuleForm>(route.query?.id ? {
  name: obj.name,
  sex: obj.sex,
  age: obj.age,
  money: obj.money
} : {
  name: '',
  sex: '男',
  age: '',
  money: ''
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: '请输入员工姓名', trigger: 'blur' },
  ],
  age: [
    { required: true, message: '请输入员工年龄', trigger: 'blur' },
  ],
  money: [
    { required: true, message: '请输入员工薪资', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      // 编辑
      if (route.query?.id) {
        interface dataModle {
          id: string
          name: string
          sex: string
          age: string
          money: string
        }
        let data = JSON.parse(localStorage.getItem("app") || "") as dataModle[]
        data.forEach((element) => {
          if (element.id === route.query?.id) {
            element.name = ruleForm.name
            element.sex = ruleForm.sex
            element.age = ruleForm.age
            element.money = ruleForm.money
          }
        });
        localStorage.setItem("app", JSON.stringify(data))
        return
      }
      // 新增
      let curr = JSON.parse(localStorage.getItem("app") || "")
      let item = {
        id: Math.floor(Math.random() * Math.floor(1000)) + "",
        ...ruleForm
      }
      localStorage.setItem("app", JSON.stringify([item, ...curr]))
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>
<style lang="scss" scoped>
.TestTwoEdit {
  padding: 16px 16px 0;
}
</style>