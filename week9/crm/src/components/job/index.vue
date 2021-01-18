<template>
  <el-table :data="tableData" style="width: 100%" stripe border height="100%">
    <el-table-column label="编号" width="180" align="center" type="index" :index="indexMethod"></el-table-column>
    <el-table-column prop="name" label="职务" width="120" align="center"></el-table-column>
    <el-table-column prop="desc" label="描述" align="center" width="200">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>描述: {{ scope.row.desc }}</p>
          <div slot="reference" class="name-wrapper">
            <!-- <el-tag size="medium">{{ scope.row.desc }}</el-tag> -->
            {{ scope.row.desc }}
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="权限" align="center">
      <template slot-scope="scope">{{scope.row.power|trans}}</template>
    </el-table-column>
    <el-table-column label="操作" width="200" align="center">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
// @ is an alias to c
import { delJobList } from "@/api/index.js";

export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("changejobList");
  },
  computed: {
    tableData() {
      return this.$store.state.jobList;
    }
  },
  components: {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      // this.$router.push('/org/addDepartment')
      //跳转时  要带上id  根据id 那数据
      this.$router.push({ path: "/org/addJob", query: { id: row.id } });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //点击确定按钮
          //调用api中的delDpList方法
          deljobList(row.id).then(data => {
            if (data.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              //后台删除
              this.$store.dispatch("changejobList");
              //前台删除
              // let newData = this.tableData.filter(item=>{
              //   item.id != row.id
              // })
              // this.$store.commit('changeDpList',{data:newData})
            } else {
              this.$message({
                type: "error",
                message: "删除失败!"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    indexMethod(index) {
      return index + 1;
    }
  }
};
</script>
<style lang="less">
</style>
