<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../objects/user.php';

$database = new \Database\Database();
$db = $database->getConnection();

$user = new User($db);

$stmt = $user->read();
$num = $stmt->rowCount();

if ($num > 0) {
    // массив пользователей
    $user_arr = [];
    $user_arr["records"] = [];

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // извлекаем строку
        extract($row);

        $user_item = [
            'id' => $id,
            "login" => $login,
            "password" => $password,
            "name" => $name,
            "surname" => $surname,
            "created_at" => $created_at,
            "updated_at" => $updated_at
        ];

        array_push($user_arr["records"], $user_item);
    }

    // отправляем ответ 200 - ОК
    http_response_code(200);

    // выводим в JSON
    echo json_encode($user_arr);
}