<template>
  <el-card>
    <el-form>
      <el-form-item>
        <el-select v-model="scoreType" placeholder="请选择酒类">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" style="margin-left: 15px" @click="getEvaluate">查询</el-button>
        <el-button type="success" style="margin-left: 45px" @click="addPage">新增</el-button>
      </el-form-item>
      <el-form-item>
        <el-table
          :data="tableData"
          @row-dblclick="getRow"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="number"
            label="编号"
            align="center"
          />
          <el-table-column
            prop="name"
            align="center"
            label="名称"
          />
          <el-table-column
            prop="location"
            align="center"
            label="产区"
          />
          <el-table-column
            prop="year"
            align="center"
            label="年份"
          />
          <el-table-column
            prop="breed"
            align="center"
            label="品种"
          />
          <el-table-column
            prop="temperature"
            align="center"
            label="侍酒温度"
          />
          <el-table-column
            prop="type"
            align="center"
            label="类型"
          />
          <el-table-column
            prop="color"
            align="center"
            label="颜色"
          />
          <el-table-column
            prop="overBarrel"
            align="center"
            label="是否过桶"
          />
          <el-table-column
            prop="odor"
            align="center"
            label="气味"
          />
          <el-table-column
            prop="acidity"
            align="center"
            label="酸度"
          />
          <el-table-column
            prop="tannins"
            align="center"
            label="单宁"
          />
          <el-table-column
            prop="wineBody"
            align="center"
            label="酒体"
          />
          <el-table-column
            prop="time"
            align="center"
            label="时间"
          />
          <el-table-column
            prop="score"
            align="center"
            label="最终评分"
          />
        </el-table>
      </el-form-item>
    </el-form>

    <el-dialog
      title="添加"
      :visible.sync="addWineDia"
      width="30%"
      :before-close="handleClose">
      <el-form>
        <el-form-item label="编号">
          <el-input v-model="addWineForm.number" style="width: 40%" />
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="addWineForm.name" style="width: 40%" />
        </el-form-item>
        <el-form-item label="产区">
          <el-input v-model="addWineForm.location" style="width: 40%" />
        </el-form-item>
        <el-form-item label="年份">
          <el-input v-model="addWineForm.year" style="width: 40%" />
        </el-form-item>
        <el-form-item label="品种">
          <el-input v-model="addWineForm.breed" style="width: 40%" />
        </el-form-item>
        <el-form-item label="温度">
          <el-input v-model="addWineForm.temperature" style="width: 40%" />
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="addWineForm.type" style="width: 40%" />
        </el-form-item>
        <el-form-item label="颜色">
          <el-input v-model="addWineForm.color" style="width: 40%" />
        </el-form-item>
        <el-form-item label="过桶">
          <el-input v-model="addWineForm.overBarrel" style="width: 40%" />
        </el-form-item>
        <el-form-item label="气味">
          <el-input v-model="addWineForm.odor" style="width: 40%" />
        </el-form-item>
        <el-form-item label="酸度">
          <el-input v-model="addWineForm.acidity" style="width: 40%" />
        </el-form-item>
        <el-form-item label="单宁">
          <el-input v-model="addWineForm.tannins" style="width: 40%" />
        </el-form-item>
        <el-form-item label="酒体">
          <el-input v-model="addWineForm.wineBody" style="width: 40%" />
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="addWineForm.time" style="width: 40%" />
        </el-form-item>
        <el-form-item label="得分">
          <el-input v-model="addWineForm.score" style="width: 40%" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addWineDia = false">取 消</el-button>
        <el-button type="primary" @click="addEvaluate">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="修改"
      :visible.sync="modifyWineDia"
      width="30%"
      :before-close="handleClose">
      <el-form>
        <el-form-item label="编号">
          <el-input v-model="modifyWineForm.number" style="width: 40%" />
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="modifyWineForm.name" style="width: 40%" />
        </el-form-item>
        <el-form-item label="产区">
          <el-input v-model="modifyWineForm.location" style="width: 40%" />
        </el-form-item>
        <el-form-item label="年份">
          <el-input v-model="modifyWineForm.year" style="width: 40%" />
        </el-form-item>
        <el-form-item label="品种">
          <el-input v-model="modifyWineForm.breed" style="width: 40%" />
        </el-form-item>
        <el-form-item label="温度">
          <el-input v-model="modifyWineForm.temperature" style="width: 40%" />
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="modifyWineForm.type" style="width: 40%" />
        </el-form-item>
        <el-form-item label="颜色">
          <el-input v-model="modifyWineForm.color" style="width: 40%" />
        </el-form-item>
        <el-form-item label="过桶">
          <el-input v-model="modifyWineForm.overBarrel" style="width: 40%" />
        </el-form-item>
        <el-form-item label="气味">
          <el-input v-model="modifyWineForm.odor" style="width: 40%" />
        </el-form-item>
        <el-form-item label="酸度">
          <el-input v-model="modifyWineForm.acidity" style="width: 40%" />
        </el-form-item>
        <el-form-item label="单宁">
          <el-input v-model="modifyWineForm.tannins" style="width: 40%" />
        </el-form-item>
        <el-form-item label="酒体">
          <el-input v-model="modifyWineForm.wineBody" style="width: 40%" />
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="modifyWineForm.time" style="width: 40%" />
        </el-form-item>
        <el-form-item label="得分">
          <el-input v-model="modifyWineForm.score" style="width: 40%" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyWineDia = false">取 消</el-button>
        <el-button type="primary" @click="modifyEvaluate">确 定</el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      tableData: [],
      options: [
        {
          value: 1,
          label: '红酒'
        }
      ],
      scoreType: 1,
      addWineDia: false,
      modifyWineDia: false,
      addWineForm: {
        number: '',
        name: '',
        location: '',
        year: '',
        breed: '',
        temperature: '',
        type: '',
        color: '',
        overBarrel: '',
        odor: '',
        acidity: '',
        tannins: '',
        wineBody: '',
        time: '',
        score: ''
      },
      modifyWineForm: {}
    }
  },
  mounted() {
    this.getEvaluate()
  },
  methods: {
    getEvaluate() {
      if (this.scoreType === 1) {
        this.$store.dispatch('getForm').then(response => {
          if (response.code === 200) {
            this.tableData = response.data.form
          }
        }).catch(e => {
          console.log(e)
        })
      }
    },
    handleClose() {
      this.addWineDia = false
      this.modifyWineDia = false
    },
    addPage() {
      this.addWineDia = true
    },
    getRow(row) {
      this.modifyWineForm = row
      this.modifyWineDia = true
    },
    modifyEvaluate() {
      if (this.scoreType === 1) {
        this.$store.dispatch('modifyForm', this.modifyWineForm).then(response => {
          if (response.code === 200) {
            this.modifyWineDia = false
            this.$message.success('修改成功')
          } else {
            this.$message.error('修改失败')
          }
        }).catch(e => {
          console.log(e)
          this.$message.error('修改失败')
        })
      }
    },
    addEvaluate() {
      if (this.scoreType === 1) {
        this.$store.dispatch('addForm', this.addWineForm).then(response => {
          if (response.code === 200) {
            this.addWineDia = false
            this.$message.success('添加成功')
          } else {
            this.$message.error('添加失败')
          }
        }).catch(e => {
          console.log(e)
          this.$message.error('添加失败')
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
