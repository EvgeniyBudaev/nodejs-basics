const fs = require("fs");
const path = require("path");

// File system
// Создание папки
fs.mkdir(
  path.join(__dirname, "notes", err => {
    if (err) throw new Error(err);

    console.log("Папка была создана");
  })
);

// Создание файла
fs.writeFile(
  path.join(__dirname, "notes", "mynotes.txt"),
  "Hello World",
  err => {
    if (err) throw err;
    console.log("Файл был создан");
    // Добавление записи в файл
    fs.appendFile(
      path.join(__dirname, "notes", "mynotes.txt"),
      "From append file",
      err => {
        if (err) throw err;
        console.log("Файл был изменен");

        // Чтение файла
        fs.readFile(
          path.join(__dirname, "notes", "mynotes.txt"),
          "utf-8",
          (err, data) => {
            if (err) throw err;
            console.log(data);
            // console.log(Buffer.from(data).toString()) не очень элегантный способ
          }
        );
      }
    );
  }
);

// Переименовать файл
fs.rename(
  path.join(__dirname, "notes", "mynotes.txt"),
  path.join(__dirname, "notes", "notes.txt"),
  err => {
    if (err) throw err

    console.log('Файл переименован')
  }
);
