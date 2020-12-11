<?php

class User {
    // подключение и таблица
    private $conn;
    private $table_name = "users";

    // свойства объекта
    public $id;
    public $login;
    public $password;
    public $name;
    public $surname;
    public $created_at;
    public $updated_at;

    /**
     * User constructor.
     * @param $db
     */
    public function __construct($db)
    {
        $this->conn = $db;
    }

    /**
     * @return mixed
     */
    public function read()
    {
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY id";

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // выполняем запрос
        $stmt->execute();

        return $stmt;
    }

    public function auth($login, $password)
    {
        $query = "SELECT * FROM "
                . $this->table_name
                . " WHERE login = :login AND password = :password GROUP BY id LIMIT 1";

        $stmt = $this->conn->prepare($query);

        $stmt->execute(['login' => $login, 'password' => $password]);

        return $stmt;
    }
}