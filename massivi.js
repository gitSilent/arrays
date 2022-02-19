let styles = ["Джаз","Блюз"]; //создайте массив с элментами Джаз И Блюз
styles.push("Рок-н-ролл"); // добавьте Рок-н-ролл в конец
console.log(styles);

let mid = Math.ceil((styles.length / 2)-1);
styles[mid] = "Классика"; //замените значение в середине на Классика
console.log(styles);

console.log(styles.shift());
console.log(styles); // удалите первый элемент массива и покажите его

styles.unshift("Рэп", "Регги"); // вставьте Рэп и Регги в начало массива
console.log(styles);


console.log(Math.ceil( styles.length / 2))
styles[2] = "Классика"
console.log(styles)
//__________________________________________

//В следующих задачах вы должны вспомнить работу с циклами JavaScript

function n1 (){
    for (i=1;i<=100;i++)
    console.log(i)
    return;
}

function n2 (){
    for (i=100;i>=1;i--)
    console.log(i)
    return;
}

function n3 (){
    for (i=1;i<=100;i++){
        if (i%2 == 0){
            console.log(i)
        }
    }
    return;
}
function n4 (){
    let mas = [];
    for (i=0;i<10;i++){
        mas[i] = "x";
    }
    console.log(mas);
}

function n5 (){
    let mas = [];
    for (i=0;i<10;i++){
        mas[i] = i+1;
    }
    console.log(mas);
}

function n6 (){
    let mas = [];
    for (i=0;i<10;i++){
        mas[i] = Math.random().toFixed(2);
    }
    console.log(mas);
}

function n7 (){
    let mas = [];
    for (i=0;i<10;i++){
        mas[i] = Math.round(Math.random()*(10-1)+1);
    }
    console.log(mas);
}

function n8 (){
    let mas = [], itog = [], i = 0;
    
    for (i=0;i<10;i++)
        mas[i] = Math.round(Math.random()*Math.abs((25-(-25)))-25);
    for (i=0; i < mas.length; i++){
        if (mas[i] > 0 & mas[i] < 10){
            itog.push(mas[i]);
        }
    }
    console.log("Исходный массив: ", mas);
    console.log("Итог: ", itog);
}

function n9() {
    let mas = [15,15,5,44,15,14,51];
    for (i=0;i<mas.length;i++){
        //console.log("Проверка", mas[i]);
        if (mas[i]==5){
            console.log("Есть");
            break;
        }
    }
}


function n10(){
    let mas = [15,15,5,44,15,14,51], sum = 0;
    for (i=0;i<mas.length;i++){
        sum = sum + mas[i];
    }
    console.log(sum);
}



function n11(){
    let mas = [15,15,5,44,15,14,51], sum = 0;
    for (i=0;i<mas.length;i++){
        sum = sum + (mas[i])**2;
    }
    console.log(sum);
}


function n12(){
    let mas = [15,15,5,44,15,14,51], sredn = 0, sum = 0;
    for (i=0;i<mas.length;i++){
        sum = sum + mas[i];
    }
    sredn = sum / mas.length;
    console.log(sredn.toFixed(2));
}

// вызовите нужную функцию, соответствующую номеру задания


