<template>
  <div class="TestEight">
    <div style="padding: 20px 0;">
      <el-button  @click="changeLocale()">{{ bool ? "切换为中文" : "切换为英文" }}</el-button>
    </div>
    <el-button type="primary">{{ $t("translate.add") }}</el-button>
    <el-button type="primary">{{ $t("translate.modify") }}</el-button>
    <el-button type="primary">{{ $t("translate.delete") }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
let bool = ref(false)
const { locale } = useI18n();
// 切换语言
const changeLocale = () => {
  bool.value = !bool.value
  locale.value = bool.value ? "en" : "zh";
}
</script>
<style lang="scss" scoped>
.TestEight {
  padding: 16px 16px 0;
}
</style>