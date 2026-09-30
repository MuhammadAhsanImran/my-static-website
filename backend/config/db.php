<?php

$host = getenv("DB_HOST") ?: "localhost";
$dbname = getenv("DB_NAME") ?: "my_static_website";
$username = getenv("DB_USER") ?: "root";
$password = getenv("DB_PASSWORD") ?: "";

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch (PDOException $e) {
    die("Database Connection Failed: " . $e->getMessage());
}