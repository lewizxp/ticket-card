document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");

    button.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o reload da página

        // Captura os valores dos inputs
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const github = document.getElementById("github").value;
        const fileInput = document.getElementById("fileInput");
        
        if (!nome || !email || !github) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        let imageURL = "./assets/images/default-avatar.png"; // Imagem padrão

        // Verifica se uma imagem foi enviada
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            if (file.size > 500 * 1024) { // Verifica se o arquivo tem menos de 500KB
                alert("A imagem deve ter no máximo 500KB!");
                return;
            }
            imageURL = URL.createObjectURL(file);
        