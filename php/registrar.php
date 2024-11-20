<?php 
include 'conexion.php';

// Recibir los datos del formulario y almacenarlos en las variables
$nombre = $_POST["Nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

// Verificar si el correo ya existe en la base de datos para evitar duplicados
$verificar_correo = mysqli_query($conexion, "SELECT * FROM Contactos WHERE correo = '$correo'");

if (mysqli_num_rows($verificar_correo) > 0) {
    echo '<script>    
         alert("El correo ya existe en la base de datos");
         window.history.go(-1);
        </script>';  
    exit;
}

// Insertar campos
$insertar = "INSERT INTO Contactos (Nombre, telefono, correo, mensaje) VALUES ('$nombre', '$telefono', '$correo', '$mensaje')";

// Ejecutar consulta
$resultado = mysqli_query($conexion, $insertar);
if (!$resultado) {
    echo '<script> 
            alert("Error al registrar los datos");
            window.history.go(-1);
        </script>';
} else {
    echo '<script> 
            alert("Registro efectuado correctamente");
            window.history.go(-1);
        </script>';   
}

// Cerrar la conexión
mysqli_close($conexion);