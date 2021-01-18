<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="myform">
    <el-form-item label="部门名称" prop="name">
      <el-input v-model="form.name" style="width:400px"></el-input>
    </el-form-item>
    <el-form-item label="部门描述" prop="desc">
      <el-input type="textarea" rows="8" v-model="form.desc" style="width:400px"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="$router.back()">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { addDpList,updateDpList } from "@/api/index.js";
export default {
  data() {
    return {
      form: {
        name: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  created() {
      let id = this.$route.query.id;
      let obj = this.$store.state.departmentList.filter(item=>item.id == id)[0];
      console.log(obj);
      this.form = obj ? obj : this.form;
  },
  methods: {
    onSubmit() {
      console.log(this.form);
      this.$refs.form.validate(flag => {
        //flag 是 true 代表刚才的验证规则都通过了
        console.log(flag);
        if (flag) {
          let id = this.$route.query.id;
          this.form.departmentId = id;//后台要求的参数
          (id ? updateDpList:addDpList)(this.form).then(data => {
            if (data.code == 0) {
              // 新增成功
              this.$confirm((id ? "更新":"添加")+'成功!', "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "success"
              }).then(
                () => {
                  this.$router.push("/org/department");
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
