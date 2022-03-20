<template>
    <ul>
        <transition-group tag="ul" name="list-data">
            <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
        </transition-group>
    </ul>
    <div>
        <input type="text" ref="userNameInput"/>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            users:['Raj', 'Aksha', 'Sharm'],
        };
    },
    methods:{
        addUser(){
            const enteredUserName = this.$refs.userNameInput.value;
            this.users.unshift(enteredUserName);
        },
        removeUser(user){
            this.users = this.users.filter(usr => usr !== user);
        },
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

li:last-child {
    margin-bottom: 1rem;
}

.list-data-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.list-data-enter-to, .list-data-leave-from {
    opacity: 1;
    transform: translateX(0); 
}

.list-data-enter-active {
    transition: all 1s ease-out;
}

.list-data-leave-to {
    opacity: 1;
    transform: translateX(30px); 
}

.list-data-leave-active {
    transition: all 1s ease-in;
    position: absolute;
}

.list-data-move {
    transition: transform 0.8s ease;
}
</style>
