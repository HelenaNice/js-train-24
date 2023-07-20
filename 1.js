console.log("Завдання: 1 ==============================");

// Функція task1 не приймає жодних аргументів
function task1() {
  /**
   * Функція `getData` симулює отримання даних з асинхронного джерела,такого як запит до бази даних або API.
   *
   *  data - вхідні дані.
   *  timeout - час в мілісекундах, який витрачається на отримання даних,за замовчуванням 2000мс.
   */
  function getData(data, timeout = 2000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Object.keys(data).length !== 0) {
          resolve(data); // Об'єкт не є пустим, виконуємо resolve з даними
        } else {
          reject(new Error("Об'єкт пустий")); // Об'єкт пустий, виконуємо reject з помилкою
        }
      }, timeout);
    });
  }

  const inputData = { name: "John", age: 30, city: "New York" };
  const timeoutDuration = 2000;

  getData(inputData, timeoutDuration)
    .then((result) => {
      console.log("Результат:", result);
    })
    .catch((error) => {
      console.error("Помилка:", error.message);
    })
    .finally(() => {
      console.log("Завдання 1 завершено");
    });
}

// Викликаємо функцію task1
task1();
