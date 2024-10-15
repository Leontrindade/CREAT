document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      genero: document.querySelector('input[name="genero"]:checked').value,
      pais: document.getElementById("pais").value,
    };

    console.log("Dados:", formData);

    fetch("http://localhost:5500/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Ocorreu um erro ao realizar o cadastro.");
        

        document.addEventListener('DOMContentLoaded', () => {

          const form = document.querySelector('contentForm');
      
          form.addEventListener('submit', async(event) => {
              event.preventDefault();
      
              //VALUE == VALOR
      
              // pegue valor do campo com id nome e armazena na variável name
              const nameValue = document.getElementById('name').value;
      
              const emailValue = document.getElementById('email').value;
      
              const phoneValue = document.getElementById('phone').value;
      
              const messageValue = document.getElementById('message').value;
      
      
              const formData = {
                  name: nameValue,
                  email:emailValue,
                  phone:phoneValue,
                  message:messageValue
              };
      
              const response = await fetch('http://localhost:5500/cadastro', {
      
                  method: 'POST',
                  headers:{
                      'Content-Type':'application/json',
                  },
                  body: JSON.stringify.apply(formData)
      
      
              });
      
      
      
              console.log('Dados Coletados', formData);
      
      
          });
      })

      });
  });
