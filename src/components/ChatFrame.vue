<!-- eslint-disable no-unused-vars -->
<template>
	<div class="app">
		<h1 class="app__title" v-if="url === ''">Загрузка</h1>
		<h1 class="app__title" v-else-if="url === 'error'">Не удалось получить данные</h1>
		<iframe id="iFrame" :src="url" height="100%" width="100%" style="border: none;" v-else></iframe>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

import { user, account } from '../global';


const id = user.id;
const domain = `${account.subdomain}.amocrm.ru`
const url = ref('');

onMounted(async () => {
	try {
		const response = await axios.get('https://messages-interface-amo-app.services.mobilon.ru/key');
		console.log(response.data);
		url.value = `https://messages-interface-amo-app.services.mobilon.ru/?userId=${id}&domain=${domain}&hashedKey=${response.data.hashedKey}`;
	} catch (error) {
		url.value = 'error';
		console.error(error);
	}
})

</script>

<style scoped>
.app {
	overflow-y: hidden;
	height: 100vh;
	width: 100%;
}

.app__title {
	width: 100%;
	text-align: center;
	font-size: xx-large;
	font-weight: 600;
	margin-top: 50px;
}
</style>