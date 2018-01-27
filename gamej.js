

var Choice = prompt('сделайте свой выбор', '');

    if (Choice=="камень") {
        var a = Math.round(Math.random() * 10);
            if (a <= 3) {
            alert ('Выбор компьютера Камень и НИЧЬЯ');
        }   else if (a > 3 && a < 7) {
            alert ('Выбор компьютера Ножницы и вы выиграли');
        }   else if (a >= 7) {
            alert ('Выбор компьютера бумага и вы проиграли');
        }
    }

    else if (Choice=="ножницы") {
        var a = Math.round(Math.random() * 10);
            if (a <= 3) {
            alert ('Выбор компьютера Камень и вы проиграли');
        }   else if (a > 3 && a < 7) {
            alert ('Выбор компьютера Ножницы и НИЧЬЯ');
        }   else if (a >= 7) {
            alert ('Выбор компьютера бумага и вы выиграли');
        }
    }

    else if (Choice=="бумага") {
        var a = Math.round(Math.random() * 10);
            if (a <= 3) {
            alert ('Выбор компьютера Камень и вы выиграли');
        }   else if (a > 3 && a < 7) {
            alert ('Выбор компьютера Ножницы и проиграли');
        }   else if (a >= 7) {
            alert ('Выбор компьютера бумага и НИЧЬЯ');
        }
    }
    else if (Choice==null) {
            alert ('Игра отменена');
    } 
    
    else {
           alert ('некорректно');
    }
    

