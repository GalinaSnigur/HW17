/**
 * Created by sergeygalchenko on 13.07.17.
 */
"use strict";

$(document).ready(function() {
    $('#ajax').on('click', postAjax);

    function postAjax() {
        $.ajax({
            type: "POST",
            url: "http://localhost:63342/",
            data:{content: "Buy coffee", isDone: "true"}
        }).done(function (msg) {
            alert("Data saved" + msg);
        }).fail(function (msg) {
            alert("Error" + msg);
        });
    };
});