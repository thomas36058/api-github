<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="content">
        <h1>API Rest Github</h1>

        <div class="formulario">
            <input type="text" name="usuario">
            <button>Procurar</button>
        </div>

        <div class="resultado">
            <h2>Usuário</h2>

            <img class="imagem" src="" alt="">

            <p class="nome"></p>

            <p class="login"></p>

            <a class="url" href="">Link</a>

            <div class="d-flex">
                <p>Número de repositórios: </p>
                <p class="num-repos"></p>
            </div>

            <div class="d-flex">
                <p>Seguidores: </p>
                <p class="seguidores"></p>
            </div>
        </div>

        <div class="repos">
            <h2>Repositórios</h2>
        </div>

        <p class="erro"></p>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="main.js"></script>
</body>
</html>