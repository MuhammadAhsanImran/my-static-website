<?php

header("Content-Type: application/json");

require_once "../config/db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Only POST method is allowed"
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$email = trim($data["email"] ?? "");
$password = $data["password"] ?? "";

if ($email === "" || $password === "") {
    echo json_encode([
        "success" => false,
        "message" => "Email and password are required"
    ]);
    exit;
}

try {
    $stmt = $pdo->prepare(
        "SELECT id, name, email, password FROM users WHERE email = ?"
    );

    $stmt->execute([$email]);

    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user["password"])) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid email or password"
        ]);
        exit;
    }

    echo json_encode([
        "success" => true,
        "message" => "Login successful",
        "user" => [
            "id" => $user["id"],
            "name" => $user["name"],
            "email" => $user["email"]
        ]
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Login failed"
    ]);
}