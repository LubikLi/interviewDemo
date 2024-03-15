<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-button  @click="router.push('/test1')" type="success">机试题1</el-button>
    </el-col>
    <el-col :span="6">
      <el-button  @click="router.push('/test2')"  type="primary">机试题2</el-button>
    </el-col>
    <el-col :span="6">
      <el-button  @click="router.push('/test6')"  type="danger">机试题6</el-button>
    </el-col>
    <el-col :span="6">
      <el-button  @click="router.push('/test8')" type="warning">机试题8</el-button>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>