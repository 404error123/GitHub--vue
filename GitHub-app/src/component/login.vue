<template>
	<el-form ref="form" :model="form" label-position="top" :rules="rules" :status-icon="isIcon">
		<h2>Sign in to GitHub</h2>
		<el-form-item label="用户名" prop="name">
			<el-input v-model="form.name" placeholder="请填写：404error123" clearable></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="pwd">
			<el-input type="password" v-model="form.pwd" placeholder="请填写：123456" clearable></el-input>
		</el-form-item>
		<el-form-item class="submit-bnt">
			<el-button type="primary" @click="onSubmit('form')">登录</el-button>
		</el-form-item>
	</el-form>
</template>

<script>

var tip;

export default {
	data() {
		return {
			form: {
				name: '',
				pwd: ''
			},
			rules: {
				name : {  required: true, message: '请输入用户名', trigger: 'blur' },
				pwd : {  required: true, message: '请输入密码', trigger: 'blur' }		
			},
			isIcon: true
		}
	},
	methods: {
		onSubmit(form) {
			tip && tip.close();
			this.$refs[form].validate().then(() => {
				this.$axios.post('http://127.0.0.1:5000/login', {
					name: this.form.name,
					pwd: this.form.pwd
				}).then((res) => {
					var isTrue = res.data.err_code === 0;
					if(isTrue) {
						var user = JSON.parse(res.data.data);
						this.$store.commit('setLogin', user)
						this.$router.push({ path: '/' })
					} else {
						tip = this.$notify.error({
							title: '错误',
							message: '用户名或密码错误',
							duration: 0
						});
					}
				})
			}).catch((error) => {
				console.log(error);
			})
		}
	},
	created() {
		this.$store.commit('signOut');		
	}
};
</script>

<style>
	.el-form {
		width: 400px;
		padding: 50px;
		margin: 80px auto;
		border: 1px solid #eee;
		color: #586069;
	}
	.el-form h2 {
		text-align: center;
		margin-bottom: 20px;
		font-weight: normal;
	}
	.el-form .submit-bnt {
		margin-top: 60px;
	}
	.el-form .submit-bnt button {
		width: 100%;
	}	
</style>
