"use strict";

var tasks = [];

var defaultTask = {
    content: 'No_content',
    isDone: false
};


$(document).ready(function () {

    $('#addTask').on('click', function () {
        var taskValue = $('#task').val();
            // $('#task').val('');

            var myTask = Object.create(defaultTask);
            myTask.content = taskValue;
            myTask.isDone = defaultTask.isDone;
            tasks.push(myTask); // add new task to array

            createElement(taskValue, tasks.length - 1);

    })
});


function createElement(value, index) {
    var myElem = document.createElement('div');
    myElem.innerHTML = value;
    myElem.setAttribute('data-index', index);
    myElem.onclick = isTaskDone;
    $('#taskContainer').append(myElem);
    saveTasks();
}


function isTaskDone() {
    var index = $(this).data('index');

    $(this).addClass('strike');
    tasks[index].isDone = true;
    saveTasks();
}

//save tasks to localStorage
function saveTasks() {
    var str = JSON.stringify(tasks);
    localStorage.setItem("tasks", str);
   
}

//get tasks from localStorage
function getTasks() {
    var str = localStorage.getItem("tasks");
    tasks = JSON.parse(str);
    if (!tasks){
        tasks = [];
    }
}

//List Tasks
function listTasks() {
    var html = "";
    for (var i in tasks) {

        var work = tasks[i].content;
        var state = tasks[i].isDone;
        html += "<b> Задача: </b>" + work + " " + "<b> состояние: </b>" + state + "<br>";

    }
    $("#taskContainer").html(html);
}

//Initialize todo app



getTasks();
listTasks();






    