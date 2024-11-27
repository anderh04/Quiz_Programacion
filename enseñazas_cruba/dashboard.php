<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$host = 'localhost';
$user = 'root';
$password = 'informatica';
$database = 'preguntas';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$sql = "SELECT nombre, apellido, carrera, puntuacion, fecha FROM resultados ORDER BY carrera, puntuacion DESC";
$result = $conn->query($sql);

$carreras = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $carrera = $row['carrera'];
        $carreras[$carrera][] = $row;
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard de Resultados</title>
    <link rel="stylesheet" href="dashboard.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
    <div class="container">
        <header>
            <img src="nestjs.svg" alt="Logo" class="logo">
            <h1>Dashboard de Resultados</h1>
            <nav>
                <ul>
                    <li><a href="dashboard.php"><i class="fas fa-home"></i> Inicio</a></li>
                    <li><a href="logout.php"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a></li>
                </ul>
            </nav>
            <?php if (!empty($user['foto_perfil'])): ?>
            <div class="profile-picture">
                <img src="imagenes/<?php echo htmlspecialchars($user['foto_perfil']); ?>" alt="Foto de perfil"
                    class="profile-img">
            </div>
            <div class="profile-info">
                <h2><?php echo htmlspecialchars($user['nombre']) . ' ' . htmlspecialchars($user['apellido']); ?></h2>
                <p>Rol: <?php echo htmlspecialchars($user['rol']); ?></p>
            </div>
            <?php else: ?>
            <p>No se ha establecido una foto de perfil.</p>
            <?php endif; ?>
        </header>

        <main>
            <?php if (!empty($carreras)) { ?>
            <?php foreach ($carreras as $carrera => $resultados) { ?>
            <section class="carrera-section">
                <h2>Carrera: <?php echo htmlspecialchars($carrera); ?></h2>
                <div class="cards-container">
                    <?php foreach ($resultados as $row) { ?>
                    <div class="card">
                        <img src="per.png" alt="Icono">
                        <div class="card-content">
                            <h3>
                                <?php echo htmlspecialchars($row['nombre']) . ' ' . htmlspecialchars($row['apellido']); ?>
                            </h3>
                            <p><span class="highlight">Carrera:</span> <?php echo htmlspecialchars($row['carrera']); ?>
                            </p>
                            <p><span class="highlight">Puntuación:</span>
                                <?php echo htmlspecialchars($row['puntuacion']); ?></p>
                            <p><span class="highlight">Fecha y Hora:</span>
                                <?php echo htmlspecialchars($row['fecha']); ?></p>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </section>
            <?php } ?>
            <?php } else { ?>
            <p>No hay resultados disponibles</p>
            <?php } ?>
        </main>
    </div>

    <?php $conn->close(); ?>
</body>

</html>