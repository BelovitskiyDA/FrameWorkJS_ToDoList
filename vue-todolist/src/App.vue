<template>
    <div class="container">
        <h1 class="mainTitle">Daily To Do List</h1>
        <div class="form-field">
            <input class="addInput" placeholder="Add new list item" v-model="title">
            <button class="addButton" v-if="title" v-on:click="onAdd()">
                Add
            </button>
        </div>

        <div class="tasks">
            <task v-for="task in tasks"
                  v-bind:task="task">
            </task>
        </div>

        <hr/>
        <p class="counter">{{tasks.length}} item selected</p>
        <p class="clear" v-on:click="onClear()" >Clear All</p>
    </div>
</template>

<script>


import Task from "@/components/Task.vue";

export default {
  name: 'App',
  components: {
        Task
  },
  data(){
      return{
        tasks:[
        ],
          title:'',
          maxId:0
      }
  },
  methods:{
      onAdd(){
          this.tasks.push({id:++this.maxId, text: this.title, isDone : false})
          this.title=''
      },
      onClear(){
          this.tasks = [];
          this.title = '';
          this.maxId = 0;
      },
      ShowTasks(){
        console.log(this.tasks);
      }
  }
}
</script>

<style>

.container {
    min-height: 670px;
    width: 1000px;
    /*height: 100%;
    max-height: none;*/
    border-radius: 32px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 3px 0px rgba(34, 60, 80, 0.2);
    top: 50px;
    left: 100px;
    position: relative;
    /*overflow-y: scroll;*/
    /*display: inline-block;*/
    /*display: inline-flex;*/
}

.mainTitle{
    font-family: 'Rubik', sans-serif;
    font-size: 48px;
    font-weight: 800;
    color: #11175E;
    left: 200px;
    padding-top: 72px;
    display: block;
    position: relative;


}

.form-field {
    width: 600px;
    height: 58px;
    margin-top: 51px;
    left: 200px;
    position: relative;
    display: block;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 3px 0px rgba(34, 60, 80, 0.2);
    /*--mat-mdc-form-field-floating-label-scale: 1;*/
}

.addInput
{
    position: relative;
    display: inline-block;
    border:none;
    width: 462px;
    height: 18px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    padding: 20px;
    outline:none;
}

.addButton{
    width: 84px;
    height: 44px;
    left: 7px;
    position: relative;
    display: inline-block;
    background-color: #2D70FD;
    border: none;
    padding: 0;
    border-radius: 4px;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    cursor: pointer;
}

.tasks{
    /*top: 267px;*/
    margin-top: 48px;
    left: 230px;
    position: relative;
    display: inline-block;
    padding-bottom: 150px;
    /*float:bottom;*/
    /*max-height: none;*/
    /*overflow-y: auto;*/
}

hr{
    border:none;
    width: 600px;
    height: 1px;
    background-color: #EEEEEE;
    left: 210px;
    bottom: 90px;
    position: absolute;
    box-shadow: 0px 0px 3px 0px rgba(34, 60, 80, 0.2);
}

p{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: #B1BACB;
    position: absolute;
    bottom: 48px;
}

.counter{
    left: 230px;
}

.clear{
    left: 724px;
    cursor: pointer;

}


</style>
