const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.i1rzeui.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Erro ao se conectar com banco: ", error);
      }

      return console.log("Conexao ao banco realizada com sucesso");
    }
  );
};

module.exports = connectToDataBase;