<?php
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "portifolio_formulario";

// Conexão com o banco
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica conexão
if ($conn->connect_error) {
  die("Erro na conexão: " . $conn->connect_error);
}

// Verifica se os campos foram enviados
if (
  isset($_POST['meu_nome']) &&
  isset($_POST['meu_email']) &&
  isset($_POST['meu_telefone']) &&
  isset($_POST['mensagem'])
) {
  // Limpa os dados
  $nome = trim($_POST['meu_nome']);
  $email = trim($_POST['meu_email']);
  $telefone = trim($_POST['meu_telefone']);
  $mensagem = trim($_POST['mensagem']);

  // Verifica se o e-mail já está cadastrado
  $email_check_query = "SELECT * FROM contatos WHERE email = ?";
  $stmt_email = $conn->prepare($email_check_query);
  $stmt_email->bind_param("s", $email);
  $stmt_email->execute();
  $result_email = $stmt_email->get_result();

  if ($result_email->num_rows > 0) {
    echo "<script>alert('Erro: Este e-mail já está cadastrado.'); window.location.href='index.html';</script>";
    exit;
  }

  // Verifica se o telefone já está cadastrado
  $telefone_check_query = "SELECT * FROM contatos WHERE telefone = ?";
  $stmt_telefone = $conn->prepare($telefone_check_query);
  $stmt_telefone->bind_param("s", $telefone);
  $stmt_telefone->execute();
  $result_telefone = $stmt_telefone->get_result();

  if ($result_telefone->num_rows > 0) {
    echo "<script>alert('Erro: Este número de telefone já está cadastrado.'); window.location.href='index.html';</script>";
    exit;
  }

  // Prepara a query (sem passar o ID, pois é auto_increment)
  $stmt = $conn->prepare("INSERT INTO contatos (nome, email, telefone, mensagem) VALUES (?, ?, ?, ?)");
  $stmt->bind_param("ssss", $nome, $email, $telefone, $mensagem);

  // Executa e verifica
  if ($stmt->execute()) {
    echo "<script>alert('Mensagem enviada com sucesso! 🚀'); window.location.href='index.html';</script>";
  } else {
    echo "Erro ao enviar: " . $stmt->error;
  }

  $stmt->close();
  $stmt_email->close();
  $stmt_telefone->close();
} else {
  echo "Todos os campos são obrigatórios.";
}

$conn->close();
?>
