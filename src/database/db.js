// Importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose();

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

// Utilizar o objeto de banco de dados para nossa operações
db.serialize(() => {

    // Criar uma tabela
    /*db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);*/

    // Deletar a tabela
    //db.run(`DROP TABLE IF EXISTS places`);



    // Inserir dados
    /*const query = `INSERT INTO places (image, name, address, address2, state, city, items) VALUES (?, ?, ?, ?, ?, ?, ?);`

    const values =[
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G"
    ];

    function afterInsertData(err) {
        if(err) {
            return console.log(err);
        }
        
        console.log("Cadastrado com sucesso!");
        console.log(this);
    }

    //db.run(query, values, afterInsertData);*/



    // Consultar dados da tabela
    /*db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err);
        }
    
        console.log("Aqui estão seus registros: ");
        console.log(rows);
    });*/


    // Deletar um dado da tabela
    /*db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("Registro deletado com sucesso!");
    });*/

});
