<?php
// salvar_lead_botpress.php

$host = "localhost";
$dbname = "portifolio_formulario";
$username = "root"; // ou outro se estiver definido
$password = ""; // senha do seu MySQL, se tiver

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Erro na conexão: " . $conn->connect_error);
}

$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$mensagem = $_POST['mensagem'] ?? '';

$sql = "INSERT INTO leads_botpress (nome, email, telefone, mensagem) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nome, $email, $telefone, $mensagem);

if ($stmt->execute()) {
  echo "Lead salvo com sucesso!";
} else {
  echo "Erro ao salvar lead: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
