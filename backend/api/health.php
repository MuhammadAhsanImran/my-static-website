<?php

header("Content-Type: application/json");

require_once "../config/db.php";

try {
    $stmt = $pdo->query("SELECT 1");

    echo json_encode([
        "success" => true,
        "status" => "healthy",
        "database" => "connected"
    ]);

} catch (PDOException $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "status" => "unhealthy",
        "database" => "disconnected"
    ]);
}