<template>
  <div class="aboutTestOne">
    <div class="head">
      <span class="font" style="padding-right: 3px;">#云效最新动态</span>
      <el-divider direction="vertical" />
      <el-button class="font" link type="primary">查看更多</el-button>
      <el-icon class="closeBox">
        <Close @click="router.go(-1)" />
      </el-icon>
    </div>
    <div class="listBox" v-for="(item, index) in dataArr" :key="item.id">
      <div class="titleBox">{{ item.title }}</div>
      <div class="descBox">
        {{ item.desc }}
        <span :id="'posiPop' + index" class="posBox"></span>
        <div class="moreText" :class="item?.more"><span>...</span>了解更多</div>
      </div>
      <el-divider />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Close } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();

let dataArr = ref([
  {
    id: 1231232,
    more: [],
    title: "12月云效专家系列专家课开播啦！",
    desc: "我们邀请了3位经验丰富的专家，为你分享在需求管理、代码评审、云原生持续交付上的效能提升实践和落地。"
  },
  {
    id: 5345345,
    more: [],
    title: "项目协作支持需求评审",
    desc: "在需求交付过程中，可通过评审提升需求质量。可设置评审的类型、内容、节点，让评审更符合协作场景。"
  },
  {
    id: 1267657,
    more: [],
    title: "支持项目与代码库、流水线关联",
    desc: "方便在项目内整体管理需求、代码、流水线。"
  },
  {
    id: 8324233,
    more: [],
    title: "流水线支持接入arm 机器作为私有构建机",
    desc: "流水线支持接入Linux arm架构机器作为私有构建机，满足arm架构构建场景。"
  },
  {
    id: 1267657,
    more: [],
    title: "代码管理新增13个代码检测规则包",
    desc: "支持更多语言和常见框架的代码检测规则。"
  },
])

onMounted(() => {
  function getChildPosition(item: any, index: number, params: string) {
    const childElement = document.getElementById(params)
    const offsetTop = childElement?.offsetTop || 0;
    console.log('offsetTop:' + params, offsetTop);
    const offsetLeft = childElement?.offsetLeft || 0;
    console.log('offsetLeft:' + params, offsetLeft);
    if (offsetTop > 42) {
      item.more = ['moreLines']
    }
    // 父元素minheiget 42
    if (offsetTop < 42) {
      item.more = ['moreSpanHide']
    }
    // 48
    let screenWidth = window.screen.width
    let otherWid = 16 + 48 + 8 // 右边距16; "了解更多"文本宽=>48; "..."文本宽=>8
    console.log("对比" + params, screenWidth - otherWid);
    if ((screenWidth - otherWid) < (offsetLeft + 16)) {
      item.more = ['moreLines', 'moreSpanShow']
    }
  }
  dataArr.value.forEach((item, index) => {
    getChildPosition(item, index, 'posiPop' + index)
  })
})


</script>
<style lang="scss" scoped>
.posBox {
  display: inline-block;
  width: 1px;
  height: 1px;
  opacity: 1;
  overflow: hidden;
}

.moreLines {
  position: absolute;
  right: 0;
  top: 24px;
}

.moreSpanHide {
  span {
    display: none;
  }
}

.moreSpanShow {
  span {
    display: inline-block;
  }
}

.aboutTestOne {
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

.listBox {
  display: flex;
  flex-direction: column;

  .titleBox {
    font-size: 14px;
    color: black;
    font-weight: bold;
    padding-bottom: 10px;
  }

  .descBox {
    position: relative;
    max-height: 42px;
    overflow: hidden;
    font-size: 14px;
    color: #666;
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

.widthBox {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>