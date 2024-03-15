<template>
  <div class="aboutTestTwo">
    <div class="flRight">
      <el-button @click="handleAdd" type="primary">新增</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="员工姓名" width="180" />
      <el-table-column prop="sex" label="性别" width="180" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="money" label="月薪" />
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" @click="handleEdit(scope)" size="small">编辑</el-button>
          <el-button link type="danger" size="small" @click.prevent="deleteRow(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div></template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from "vue-router";
import { useAppStore } from '@/stores'
const router = useRouter();

const store = useAppStore()
let tableInitData = [
  {
    id: "1",
    name: 'aaa',
    sex: '男',
    age: '23',
    money: '6000',
  }, {
    id: "2",
    name: 'bbb',
    sex: '男',
    age: '26',
    money: '7000',
  }, {
    id: "3",
    name: 'ccc',
    sex: '男',
    age: '33',
    money: '10000',
  }]

let tableData = ref(tableInitData)

const storageChangeHandler = (event: any) => {
  console.log("event.newValue", event.newValue);
  if (event.key === "app") {
    tableData.value = JSON.parse(event.newValue || "") || [];
    console.log(tableData.value);
  }
};

onMounted(() => {
  localStorage.setItem("app", JSON.stringify(tableInitData))
  window.addEventListener('storage', storageChangeHandler);
});

onUnmounted(() => {
  window.removeEventListener('storage', storageChangeHandler);
});

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
  localStorage.setItem("app", JSON.stringify(tableData.value))
}

const handleEdit = (scope: any) => {
  let routeUrl = router.resolve({
    path: "/edit",
    query: { id: scope.row.id }
  });
  window.open(routeUrl.href, '_blank');
}

const handleAdd = () => {
  let routeUrl = router.resolve({
    path: "/edit",
    // query: { id: 96 }
  });
  window.open(routeUrl.href, '_blank');
}
</script>
<style lang="scss" scoped>
.aboutTestTwo {
  padding: 16px 16px 0;
}

.flRight {
  float: right;
}
</style>