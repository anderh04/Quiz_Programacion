<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['nombre']) && !empty($data['apellido']) && !empty($data['carrera']) && isset($data['puntuacion'])) {
    $nombre = $data['nombre'];
    $apellido = $data['apellido'];
    $carrera = $data['carrera'];
    $puntuacion = $data['puntuacion'];

    $conn = new mysqli("localhost", "root", "informatica", "preguntas");

    if ($conn->connect_error) {
        echo json_encode(['success' => false, 'message' => 'Error de conexión a la base de datos']);
        exit();
    }

    $stmt = $conn->prepare("INSERT INTO resultados (nombre, apellido, carrera, puntuacion) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("sssi", $nombre, $apellido, $carrera, $puntuacion);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Datos guardados exitosamente']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al guardar los datos: ' . $conn->error]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Datos incompletos o inválidos']);
}
?>