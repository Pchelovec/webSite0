/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//срабатывает при загрузке web page
$(document).ready(function () {
    console.log("ready!");

    //показать alert по клику кнопки с id
    $("#openDBBestDialog").click(function () {
        alert("Я работал в DBBest!");
    });
    
    //показать alert по клику кнопки с id
    $("#openGlovoDialog").click(function () {
        alert("Я работал в Глово!");
    });

    //поочередно меняет состояния анимации если класс player(картинка) были кликнуты
    $(".player").click(function () {
        if (this.style.animationPlayState == 'running') {
            this.style.animationPlayState = 'paused';
        } else {
            this.style.animationPlayState = 'running';
        }
    });


});

