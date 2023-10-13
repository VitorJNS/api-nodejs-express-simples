// const fs = require("fs");
// const path = require("path");

// // criar uma pasta
// // fs.mkdir(path.join(__dirname, "/test"), (error) => {
// //   if (error) {
// //     return console.log("error: ", error);
// //   }

// //   console.log("Pasta criada");
// // });

// // criar arquivo
// fs.writeFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "hello node!",
//   (error) => {
//     if (error) {
//       return console.log("erro: ", error);
//     }

//     console.log("Arquivo criado com sucesso");

//     // Adicionar a um arquivo
//     fs.appendFile(
//         path.join(__dirname, "/test", "test.txt"),
//         "hello world!",
//         (error) => {
//         if (error) {
//             return console.log("erro: ", error);
//         }

//         console.log("Arquivo criado com sucesso");
//         }
//     );

//     // Ler arquivos
//     fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf-8", (error, data) => {
//         if(error) {
//             return console.log("erro: ", error);
//         }

//         console.log(data);
//     })
//   }
// );

