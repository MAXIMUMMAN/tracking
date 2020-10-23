<template>
    <div class="container-login">
        <div class="container-login__header"></div>

        <div class="container-login-form">
            <div class="errors-auth"
                 v-show="errors">
                Не введены логин/пароль
            </div>
            <form method="POST"
                  v-on:submit.prevent="onSubmit()">
                <label for="login"></label>
                <input type="text"
                       name="login"
                       id="login"
                       placeholder="Логин"
                       v-model="login">

                <label for="password"></label>
                <input type="password"
                       name="password"
                       id="password"
                       placeholder="Пароль"
                       v-model="password">

                <button type="submit">авторизоваться</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login: '',
                password: '',
                errors: false
            }
        },
        methods: {
            onSubmit() {
                if (!this.login.trim() && !this.password.trim()) {
                    this.errors = !this.errors;
                }else {
                    this.errors = false;
                    console.log('auth...')
                }
            }
        }
    }
</script>

<style lang="scss">
    body {
        background-color: $supporting-reaction;
    }
</style>