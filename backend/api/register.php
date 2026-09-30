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

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$password = $data["password"] ?? "";

if ($name === "" || $email === "" || $password === "") {
    echo json_encode([
        "success" => false,
        "message" => "Name, email and password are required"
    ]);
    exit;
}

try {
    $check = $pdo->prepare("SELECT id FROM users WHERE email = ?");
    $check->execute([$email]);

    if ($check->fetch()) {
        echo json_encode([
            "success" => false,
            "message" => "Email already registered"
        ]);
        exit;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
    );

    $stmt->execute([$name, $email, $hashedPassword]);

    echo json_encode([
        "success" => true,
        "message" => "User registered successfully"
    ]);

} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Registration failed"
    ]);
}