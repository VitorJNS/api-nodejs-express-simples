// const http = require("http");

// const port = 8080;

// const server = http.createServer((req, res) => {
//   if (req.url == "/home") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>home page</h1>");
//   }

//   if (req.url == "/users") {
//     const users = [
//       {
//         name: "Vitor",
//         email: "vitor.gmails",
//       },
//       {
//         name: "Virtus",
//         email: "virtus.gmails",
//       },
//     ];

//     res.writeHead(200, {"Content-Type": "aplication.json"})
//     res.end(JSON.stringify(users))
//   }
// });

// server.listen(port, () => console.log(`Server rodando na porta ${port}`));
