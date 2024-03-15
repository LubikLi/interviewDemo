
import { defineStore } from "pinia";
let tableInitData = [
  {
    name: 'aaa',
    sex: '男',
    age: '23',
    money: '6000',
  }, {
    name: 'bbb',
    sex: '男',
    age: '26',
    money: '7000',
  }, {
    name: 'ccc',
    sex: '男',
    age: '33',
    money: '10000',
  }]
export const useAppStore = defineStore("app", {
  state: () => ({
    tableData: tableInitData,
  }),

  // 持久化配置：若仅配置 true，则全部存储
  // persist: true,
  // persist: {
  //   // 存储的 key， 默认是 defineStore 的第一个参数
  //   key: "TableData",
  //   // 存储位置，默认 localStorage
  //   storage: localStorage,
  //   // 指定内容
  //   paths: ["tableData"],
  // },
});

