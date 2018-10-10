/* 1. Створіть запит імені користувача: 
			Переберіть циклом while всі літери отриманої змінної.
			Якщо код символа парний - виведіть цей символ і його код в консоль за допомогою console.error,
			інакше - за допомогою console.warn. */

	let bestName = prompt("Введіть ім'я:");
	if (bestName === null) bestName = '';

	let i = 0;
	while (i < bestName.length){
		console[bestName[i].charCodeAt() % 2 ? 'warn' : 'error'](bestName[i]);
		i++;
	}


// 2. Виводьте в консоль квадрати чисел 1, 2, 3, 4..., останній квадрат повинен бути більшим за 2100.
let sqrtResult;
let k = 1;

	console.groupCollapsed('Квадрати чисел 1, 2, 3, 4...');
	do {
	 sqrtResult = Math.pow(k, 2);
	 console.log(sqrtResult);
	 k++; 
	} while (sqrtResult < 2100);
	console.groupEnd();

/* 3. Створіть змінну зі своїм іменем. 
		Виведіть в консоль в стовбчик кожну букву строки і через пробіл - номер букви в строці: */

	let myName = 'Андрій';
	for (let i=0; i < myName.length; i++){
		console.log(myName[i] + ' ' + i);
	}

/* 4. Створіть пусту строку і циклом занесіть у неї цифри від 0 до 5. 
		Виведіть строку в alert, повинно відобразитися "012345". */

	let s = '';
	for (let i = 0; i < 6; i++){
		s += i;
	}
	alert(s);

/* 5. Виведіть в консоль 10 випадкових чисел від 0 до 1. Використайте групування в консолі. */

	console.groupCollapsed('Вивід 10 випадкових чисел від 0 до 1');
		for (let i = 0; i < 10; i++){
			console.log(Math.random());
		}
	console.groupEnd();

/* 6. Створіть циклом строку з не менше 17 букв, що повторюються: "сода" (содасодасода...). Виведіть в консоль.
 Виведіть в консоль строку, в якій всі букви "с" будуть замінені на букву "в". */ 

	let str = '';
	while (str.length < 17) {
		str+= 'сода';
	}

	console.log(`Строка з не менше 17 букв, що повторюються: ${str}`);
	
	let m;
	while ((m = str.indexOf('с')) !== -1){
		str = str.substring(0, m) + 'в' + str.substr(m + 1);	
	}
	console.log(`Строка, в якій всі букви "с" будуть замінені на букву "в": ${str}`);

/* 7. Порахуйте циклом кількість букв "о" у наступному виразі:
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
	sed do eiusmod tempor incididunt ut labore et dolore. */

	let templateStr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.';
	let count = 0;

	for (let i = 0; i < templateStr.length; i++){
		if (templateStr[i] === 'o'){
			count++;
		}
	}

	console.log('Кількість літер o: ' + count);

/* 8. Створіть функцію, що видає випадкове число від 50 до 100.
	Виведіть в консоль 20 випадкових чисел за допомогою цієї функції.
	Використайте групування в консолі. */

	function getRandomMinMax(min, max) {
		let result = '';
		let i = 0;
		console.groupCollapsed('Результати виклику функції, що видає випадкове число від 50 до 100');
		while (i < 20) {
			console.log(Math.floor(Math.random() * (max - min + 1)) + min);
			i++;
		}
		console.groupEnd();
	}

	getRandomMinMax(50, 100);

/* 9.	Створіть функцію, яка повертатиме дану їй строку задом наперед. 
	За допомогою неї виведіть в консоль ваше ім'я: */

	function returnName(str){
		let result = '';
		for(let i = str.length - 1; i >= 0; i--){
			result += str[i];
		}
		return console.log(`Строка ${str} задом наперед: ${result}`);
	}

	returnName('Андрій');

/* 10.	Дано функцію, яка "з сервера" присилає дані про випадкового користувача:
	Виведіть в консоль вік Маші, наприклад: Маша: 17 років. */

	let name, age;
	function getUser(){
	  let users = ['Коля','Іра','Льоша','Маша','Грыша','Пєтя','Гоша','Аня','Свєта','Іван'];
	  let ages = ['19','21','14','18','27','22','18','21','24','31'];
	  let n = Math.floor(Math.random()*10);
	  name = users[n];
	  age = ages[n];
	}

	getUser();
	console.log(name + ': ' + age + ' років.');