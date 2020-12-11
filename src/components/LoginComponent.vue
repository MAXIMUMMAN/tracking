<template>
      <div class="container-login">
        <div class="container-login__header"></div>

        <div class="container-login-form">
            <div class="errors-auth"
                 v-show="errors">
                Не введены логин/пароль
            </div>
            <div id="errors"></div>
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

                <button type="submit"
                        :disabled="!login.length || !password.length">авторизоваться</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                login: '',
                password: '',
                errors: false
            }
        },
        methods: {
            ...mapActions([
                'AUTHORIZATION'
            ]),
            onSubmit() {
                var data = {
                    "login": this.login,
                    "password": this.password
                };
                this.AUTHORIZATION(data)
            }
        }
    }
</script>

<style lang="scss">
    body {
        background-color: $supporting-reaction;
    }
    .errors-auth {
        background-color: $errors;
    }
</style>