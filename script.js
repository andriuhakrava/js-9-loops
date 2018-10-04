/* 1. Створіть запит імені користувача: 
			Переберіть циклом while всі літери отриманої змінної.
			Якщо код символа парний - виведіть цей символ і його код в консоль за допомогою console.error,
			інакше - за допомогою console.warn. */

	let name = prompt("Введіть ім'я:");
	if (name === null) name = '';

	let i = 0;
	while (i < name.length){
		// if (name[i].charCodeAt() % 2) console.warn(name[i]);
		// else console.error(name[i]);

		console[name[i].charCodeAt() % 2 ? 'warn' : 'error'](name[i]);

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
// Виведіть в консоль строку, в якій всі букви "с" будуть замінені на букву "в". */ 

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

