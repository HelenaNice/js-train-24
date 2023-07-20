console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setTimeout та проміси.
function task7() {
  // Створюємо новий проміс.
  const promise = new Promise((resolve, reject) => {
    // Використовуємо функцію setTimeout, щоб виконати функцію тільки один раз, через 1000 мс (1 с).
    setTimeout(() => {
      // Отримуємо поточну дату та час
      const currentDate = new Date();

      // Отримуємо секунди з поточної дати
      const seconds = currentDate.getSeconds();

      // Виводимо в консоль повідомлення `Поточні секунди: ${seconds}`
      console.log(`Поточні секунди: ${seconds}`);

      // Якщо поточні секунди кратні 10, розв'язуємо проміс з рядком "Поточні секунди кратні 10!".
      if (seconds % 10 === 0) {
        resolve("Поточні секунди кратні 10!");
      }
      // Якщо поточні секунди кратні 3, відхиляємо проміс з рядком "Поточні секунди кратні 3!".
      else if (seconds % 3 === 0) {
        reject("Поточні секунди кратні 3!");
      }
      // Якщо умова не виконується, повторно викликаємо функцію task7.
      else {
        task7();
      }
    }, 1000);
  });

  // Використовуємо then для обробки зарезолвленого проміса, та виводимо в консоль `Проміс зарезолвився з значенням: ${value}`.
  promise
    .then((value) => {
      console.log(`Проміс зарезолвився з значенням: ${value}`);
    })
    // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо в консоль `Проміс відхилився з помилкою: ${error}`.
    .catch((error) => {
      console.error(`Проміс відхилився з помилкою: ${error}`);
    })
    // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо в консоль "Проміс завершено".
    .finally(() => {
      console.log("Проміс завершено");
    });
}

// Викликаємо функцію task7
task7();
