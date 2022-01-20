const a = '1';

if (a == 1) {
    console.log('if working!')
}

switch (a) {
    case 1:
        console.log('case working!!!')
}



const age = 0;

switch (age) {
    case 1:
        console.log('wow');
        break;
    case 40:
        console.log('Welcome');
        break;
    case 20:
        console.log('Eee boy');
        break;
    case 30:
        console.log('Awesome')
        break;
    default:
        console.log('Sad but true!')
}
//------------------------------------------------------------------------------------------

//Напишите if..else, соответствующий следующему switch:

switch (browser) {
    case 'Edge':
        alert("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browsers too');
        break;

    default:
        alert('We hope that this page looks ok!');
}

//Переписываю . Во время написание кода начало приходить понимание автора. А именно 
//Показать лаконичность кода с использованием switch/case. 

if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome') {
    alert('Okay we support these browsers too');
} else if (browser == 'Firefox') {
    alert('Okay we support these browsers too');
} else if (browser == 'Safari') {
    alert('Okay we support these browsers too');
} else if (browser == 'Safari') {
    alert('Okay we support these browsers too');
} else if (browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

//Ответ с лерна лаконичнее, не подумал про логический оператор или (||)
if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'
   || browser == 'Firefox'
   || browser == 'Safari'
   || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }

//------------------------------------------------------------------------------------------

//Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
    alert('Вы ввели число 0');
}

if (number === 1) {
    alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
}

//Переписываю )))

switch(number){
    case 0: 
        alert('Вы ввели число 0');
    break;
    case 1:
        alert('Вы ввели число 1'); 
    break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
    break;
}
