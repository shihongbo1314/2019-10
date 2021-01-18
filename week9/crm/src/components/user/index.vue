<template>
  <div class="userBox">
    <div>
      <el-select :value="value" @change="selectChange" placeholder="请选择部门">
        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
      <el-input
        style="width:300px;margin-left:20px"
        placeholder="请输入内容"
        v-model="input4"
        @change="search"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="姓名" width="80"></el-table-column>
      <el-table-column prop="sex" label="性别" width="50">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.sex == 0 ? '男':'女'}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="department" label="部门" width="80"></el-table-column>
      <el-table-column prop="job" label="职务" width="80"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
      <el-table-column prop="phone" label="电话" width="150"></el-table-column>
      <el-table-column prop="desc" label="描述" width="150" show-overflow-tooltip>
        <!-- tooltip出现小黑框 -->
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// @ is an alias to /src
import { deluserList } from "@/api/index.js";
export default {
  name: "XXX",
  data() {
    return {
      value: "",
      input4: ""
    };
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
    },
    handleEdit(index, row) {
      this.$router.push({ path: "/org/addUser", query: { id: row.id } });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 点击了确定按钮
          // 调用 api中的  deluserList 方法
          deluserList(row.id).then(data => {
            if (data.code == 0) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              // 后台删除
              this.$store.dispatch("changeuserList");

              // 前端删除
              // let newData = this.tableData.filter(item=>{
              //   item.id != row.id
              // })
              // this.$store.commit('deluserList',{data:newData})
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
    selectChange(val) {
      this.value = val;
      this.$store.dispatch("changeuserList", {
        departmentId: val,
        search: this.input4
      });
    },
    search() {
      this.$store.dispatch("changeuserList", {
        departmentId: this.value || "0",
        search: this.input4
      });
    }
  },
  created() {
    this.$store.dispatch("changeuserList");
  },
  computed: {
    options() {
      let ary = this.$store.state.departmentList;
      return [
        {
          id: 0,
          name: "全部"
        },
        ...ary
      ];

      return this.$store.state.departmentList;
    },
    tableData() {
      return this.$store.state.userList;
    }
  },
  components: {}
};
</script>
<style lang="less">
.userBox {
  text-align: right;
  padding: 20px;
  height: 100%;
  background: #fff;
  > div:nth-child(1) {
    padding-bottom: 20px;
  }
}
</style>
