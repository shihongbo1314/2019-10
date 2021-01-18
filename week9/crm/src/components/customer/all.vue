<template>
  <div>
    <div ref="box1" style="width:400px;height:300px"></div>
  </div>
</template>
<script>
// @ is an alias to /src
import echarts from "echarts";
import option1 from './echartsOption/1.js'
export default {
  name: "add",
  data() {
    return {};
  },
  mounted() {
    this.initBox1();
  },
  methods: {
    initBox1() {
      var myChart = echarts.init(this.$ref.box1);
      // 绘制图表
      myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

      myChart.setOption(option1);
    }
  },
  components: {}
};
</script>
<style lang="less">
</style>