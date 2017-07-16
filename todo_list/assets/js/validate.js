"use strict";

$(document).ready(function () {
        $('#toDoForm').validate({
            rules: {
                toDo: {
                    required: true, //поле обязательно для заполнения
                    minlength: 3    //в поле должно быть не меньше 3 символов
                }
            },
                messages: {
                    toDo: {
                    required: "Please enter text",
                    minlength: "B поле должно быть не меньше 3 символов"
                }
            }
        });

});
