 
while (true) {
    var сhoice = prompt('сделайте свой выбор', '');

    if (сhoice==="камень") {
        var a = Math.round(Math.random() * 10);
            if (a <= 3) {
            alert ('Выбор компьютера Камень и НИЧЬЯ');
        }   else if (a > 3 && a < 7) {
            alert ('Выбор компьютера Ножницы и вы выиграли');
        }   else if (a >= 7) {
            alert ('Выбор компьютера бумага и вы проиграли');
        }
    }

    else if (сhoice==="ножницы") {
        var a = Math.round(Math.random() * 10);
            if (a <= 3) {
            alert ('Выбор компьютера Камень и вы проиграли');
        }   else if (a > 3 && a < 7) {
            alert ('Выбор компьютера Ножницы и НИЧЬЯ');
        }   else if (a >= 7) {
            alert ('Выбор компьютера бумага и вы выиграли');
        }
    }

    else if (сhoice==="бумага") {
        var a = Math.round(Math.random() * 10);
            if (a <= 3) {
            alert ('Выбор компьютера Камень и вы выиграли');
        }   else if (a > 3 && a < 7) {
            alert ('Выбор компьютера Ножницы и проиграли');
        }   else if (a >= 7) {
            alert ('Выбор компьютера бумага и НИЧЬЯ');
        }
    }
    else if (сhoice==null) {
        break; 
        alert ('Игра отменена');
    }
    else {
           alert ('некорректно');
    }

    
} 


