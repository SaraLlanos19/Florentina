<?php
// Datos de conexión
$servidor   = "localhost";
$usuario    = "root";
$contrasena = "";
$base_datos = "formulario_contactanos";

// Conexión a la base de datos
$conn = new mysqli($servidor, $usuario, $contrasena, $base_datos);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario (y limpiar caracteres especiales)
$nombre   = $conn->real_escape_string($_POST['nombre'] ?? '');
$apellido = $conn->real_escape_string($_POST['apellido'] ?? '');
$correo   = $conn->real_escape_string($_POST['correo'] ?? '');
$telefono = $conn->real_escape_string($_POST['telefono'] ?? '');
$comentario = $conn->real_escape_string($_POST['comentario'] ?? '');

// Insertar en la base de datos
$sql = "INSERT INTO contactos (nombre, apellido, correo_electronico, telefono, comentario)
        VALUES ('$nombre', '$apellido', '$correo', '$telefono', '$comentario')";

if ($conn->query($sql) === TRUE) {
    // Redirigir (ajusta la ruta si es necesario)
    header("Location: ../contactanos.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
