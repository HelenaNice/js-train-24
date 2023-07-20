console.log("Завдання: 5 ==============================");

// Створюємо функцію task5, яка буде використовувати проміси.
function task5() {
  // Створюємо змінну counter яка буде лічильником та присвоюємо значення 0
  let counter = 0;

  // Створюємо проміс з іменем intervalPromise.
  const intervalPromise = new Promise((resolve, reject) => {
    // Використовуємо функцію setInterval, щоб імітувати асинхронну операцію яка повторюється кожну секунду
    const intervalId = setInterval(() => {
      counter += 1;
      console.log(`Значення лічильника: ${counter}`);

      // Коли лічильник досягає 5, використовуємо clearInterval та викликаємо resolve зі значенням лічильника.
      if (counter === 5) {
        clearInterval(intervalId);
        resolve(counter);
      }

      // Якщо лічильник більше 10, викликаємо reject з помилкою.
      if (counter > 10) {
        clearInterval(intervalId);
        reject(new Error("Лічильник перевищив 10"));
      }
    }, 1000);
  });

  // Використовуємо .then метод для отримання значення, яке було передане у функцію resolve() в нашому промісі, та виводимо його в консоль.
  intervalPromise.then((result) => {
    console.log(`Проміс виконано зі значенням: ${result}`);
  });

  // Використовуємо .catch метод для обробки випадків, коли проміс переходить в стан "rejected". Та виводимо в консоль помилку.
  intervalPromise.catch((error) => {
    console.error("Помилка:", error.message);
  });

  // Використовуємо .finally метод для виконання дій незалежно від того, в якому стані завершився наш проміс, та виводимо повідомлення "Завершення лічильника"
  intervalPromise.finally(() => {
    console.log("Завершення лічильника");
  });
}


// Викликаємо функцію task5
task5();
