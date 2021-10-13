db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });
db.produtos.find({ $text: { $search: "frango hamburguer" } }, { nome: 1, descricao: 1 }).count();