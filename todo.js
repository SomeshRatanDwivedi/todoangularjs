const app=angular.module('todoModule', []);

app.controller('todoController', main);

function main(){
    this.todos=[]
    this.editIndex=-1;
    this.editText=''
    this.addTodo=()=>{
        this.todos.push(this.todoText)
        this.todoText='';
    }
    this.deleteTodo=(index)=>{
        this.todos=this.todos.filter((todo, ind)=>ind!==index);
    }
    this.editTodo=(index, text)=>{
        this.editIndex=index;
        this.editText=text
    }
    this.saveChanges=()=>{
        this.todos = this.todos.map((todo, ind) => ind !== this.editIndex?todo:this.editText);
        this.editIndex=-1;

    }
}