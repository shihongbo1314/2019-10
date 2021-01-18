<template>
  <el-form ref="form" :model="form" label-width="80px" class="myform">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio-group v-model="form.sex">
        <el-radio label="0">男</el-radio>
        <el-radio label="1">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="电话" prop="phone">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="部门">
      <el-select v-model="form.dpartmentId" placeholder="请选择部门">
        <el-option
          v-for="item in departmentList"
          :label="item.name"
          :key="item.id"
          :value="item.id"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="职务">
      <el-select v-model="form.jobId" placeholder="请选择职务">
        <el-option v-for="item in jobList" :label="item.name" :key="item.id" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="自我介绍">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="$router.back()">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { updateuserList, adduserList, getjobList } from "@/api/index.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        sex: "",
        email: "",
        phone: "",
        dpartmentId: 2,
        jobId: 2,
        desc: ""
      }
    };
  },
  computed: {
    // departmentList() {
    //   return this.$store.state.departmentList;
    // },
    // jobList() {
    //   return  this.$store.state.jobList;
    // }
    ...mapState(["jobList", "departmentList"])
  },
  created() {
    this.$store.dispatch("changejobList");
    //在这调用action中的方法,该方法调用接口  获取数据  成功后调用
    //mutations中的对应方法    然后把state中的数据修改
    //state 中的数据修改之后, 触发组件的视图更新
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.$refs.form.validate(flag => {
        //flag 是 true 代表刚才的验证规则都通过了
        console.log(flag);
        if (flag) {
          let id = this.$route.query.id;
          this.form.userId = id; //后台要求的参数
          (id ? updateuserList : adduserList)(this.form).then(data => {
            if (data.code == 0) {
              // 新增成功
              this.$confirm((id ? "更新" : "添加") + "成功!", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "success"
              }).then(
                () => {
                  this.$router.push("/org/user");
                },
                () => {}
              );
            } else {
              this.$message.error("添加失败");
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less">
.myform {
  text-align: left;
  background: #fff;
  padding: 20px;
  height: 100%;
}
</style>

