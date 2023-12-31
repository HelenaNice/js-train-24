console.log("Завдання: 3 ==============================");

// Створюємо функцію task3, в якій буде виконуватися завдання
function task3() {
  // Створюємо функцію promise1, яка створює і повертає новий проміс
  function promise1() {
    return new Promise((resolve) => {  // Метод new Promise приймає в якості параметра функцію (executor), яка має два параметри: resolve і reject.
      setTimeout(() => {  // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 1 секунду
        resolve("Проміс 1 виконано");  // Викликаємо resolve з рядком 'Проміс 1 виконано', що означає успішне вирішення проміса
      }, 1000);
    });
  }
  
  // Створюємо функцію promise2, яка створює і повертає новий проміс, який відхиляється
  function promise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Проміс 2 відхилено");  // Викликаємо reject з рядком 'Проміс 2 відхилено', що означає відхилення проміса
      }, 2000);
    });
  }
  // Використовуємо Promise.allSettled який приймає масив промісів і повертає новий проміс, який вирішується, коли всі проміси вирішено або відхилено
   Promise.allSettled([promise1(), promise2()])
    .then((results) => {
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          console.log(`Проміс ${index + 1}: ${result.value}`);
        } else if (result.status === "rejected") {
          console.error(`Проміс ${index + 1}: ${result.reason}`);
        }
      });
    })
    .finally(() => {
      console.log("Завдання 3 завершено");
    });
}
  // Він повертає масив об'єктів, кожний з яких відображає стан кожного проміса
  // Функція then викликається, коли проміс вирішено
  // Вона приймає результати промісів і обробляє їх
  // Для кожного результату виводимо статус проміса
  // Функція finally викликається після того, як проміс вирішено або відхилено
  // Вона використовується для виконання дій, які повинні виконуватися незалежно від того, чи було проміс вирішено чи відхилено
  // В нашому випадку ми просто виводимо повідомлення, "Завдання 3 завершено"


// Викликаємо функцію task3
task3();
