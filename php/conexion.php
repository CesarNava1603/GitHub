<?php
$conexion = mysqli_connect("127.0.0.1","root","Bruno.1603","appdatabase");
if (!$conexion) {
    echo 'No se pudo conectar a la base de datos';
} else {
    echo 'Conexión exitosa';
}