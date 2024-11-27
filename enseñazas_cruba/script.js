const quizData = [
    { question: "¿Qué significa HTML?", options: ["Home Tool Markup Language", "Hyperlink Text Markup Language", "HyperText Markup Language", "HighText Machine Language"], answer: 2 },
    { question: "¿Cuál es el propósito principal de CSS?", options: ["Estilizar páginas web", "Estructurar contenido", "Gestionar bases de datos", "Crear servidores"], answer: 0 },
    { question: "¿Cuál de estos lenguajes se utiliza para el desarrollo de aplicaciones de Android?", options: ["Python", "Ruby", "C++", "Java"], answer: 3 },
    { question: "¿Qué significa SQL?", options: ["Simple Query Language", "Systematic Query Logic", "Structured Query Language", "Script Query Language"], answer: 2 },
    { question: "¿Cuál es el lenguaje de programación creado por Microsoft para aplicaciones web?", options: ["C#", "Ruby", "PHP", "JavaScript"], answer: 0 },
    { question: "¿Qué hace la palabra clave `print()` en Python?", options: ["Inicia un bucle", "Cierra el programa", "Muestra salida en consola", "Compila el código"], answer: 2 },
    { question: "¿Qué tipo de lenguaje es JavaScript?", options: ["Interpretado", "Tipado fuerte", "Compilado", "Estático"], answer: 0 },
    { question: "¿Cuál es el símbolo para declarar un comentario en HTML?", options: ["<-- -->", "/* */", "<!-- -->", "//"], answer: 2 },
    { question: "¿Qué significa `public static void main` en Java?", options: ["Punto de entrada del programa", "Definición de clase", "Función de salida", "Variable global"], answer: 0 },
    { question: "¿Qué significa la extensión `.py`?", options: ["Proyecto Python", "Código compilado", "Archivo Python", "Programa PySimpleGUI"], answer: 2 },
    { question: "¿Qué es una base de datos relacional?", options: ["Un archivo en Excel", "Una estructura no SQL", "Una colección organizada de datos vinculados mediante tablas", "Una red de servidores"], answer: 2 },
    { question: "¿Qué comando SQL se usa para crear una tabla?", options: ["CREATE TABLE", "SELECT", "INSERT", "UPDATE"], answer: 0 },
    { question: "¿Qué comando SQL se usa para eliminar una fila?", options: ["DELETE", "TRUNCATE", "ALTER", "UPDATE"], answer: 0 },
    { question: "¿Qué hace un `JOIN` en SQL?", options: ["Reordena registros", "Ejecuta consultas en paralelo", "Combina datos de dos o más tablas", "Cambia la clave principal"], answer: 2 },
    { question: "¿Qué sistema de bases de datos utiliza documentos JSON?", options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle"], answer: 2 },
    { question: "¿Qué significa IP en redes?", options: ["Internet Protocol", "Identificador Protocolo", "Interconexión Privada", "Indice Protocolo"], answer: 0 },
    { question: "¿Qué sistema operativo utiliza el kernel Linux?", options: ["Windows", "FreeBSD", "macOS", "Ubuntu"], answer: 3 },
    { question: "¿Qué herramienta es común para virtualización de sistemas?", options: ["Python", "Kubernetes", "SQL", "VMware"], answer: 3 },
    { question: "¿Qué protocolo se utiliza para enviar correos electrónicos?", options: ["SMTP", "IMAP", "FTP", "HTTP"], answer: 0 },
    { question: "¿Qué significa DNS?", options: ["Dirección Numérica Segura", "Dominio de Navegación Segura", "Sistema de Nombres de Dominio", "Directorio Nacional de Sistemas"], answer: 2 },
    { question: "¿Qué es SCRUM?", options: ["Una metodología de hardware", "Un sistema operativo", "Un marco ágil de trabajo", "Un lenguaje de programación"], answer: 2 },
    { question: "¿Qué significa UML?", options: ["Universal Map Language", "User Media Language", "Unified Modeling Language", "Undefined Model Logic"], answer: 2 },
    { question: "¿Qué tipo de prueba de software evalúa el sistema completo?", options: ["Pruebas unitarias", "Pruebas de integración", "Pruebas regresivas", "Pruebas funcionales"], answer: 3 },
    { question: "¿Qué es un caso de uso en ingeniería de software?", options: ["Una especificación técnica", "Un código de prueba", "Un módulo de datos", "Una descripción de cómo un usuario interactúa con el sistema"], answer: 3 },
    { question: "¿Qué es DevOps?", options: ["Un entorno de redes", "Un enfoque colaborativo entre desarrollo y operaciones", "Una base de datos", "Un sistema de seguridad"], answer: 1 },
    { question: "¿Qué significa AI?", options: ["Autonomous Intelligence", "Automated Intelligence", "Artificial Intelligence", "Artificial Interaction"], answer: 2 },
    { question: "¿Qué es un ataque de fuerza bruta?", options: ["Un tipo de malware", "Un ataque físico", "Un método para probar todas las combinaciones posibles", "Un tipo de virus"], answer: 2 },
    { question: "¿Qué protocolo se utiliza para conexiones seguras en la web?", options: ["FTP", "SSH", "HTTP", "HTTPS"], answer: 3 },
    { question: "¿Qué significa Machine Learning?", options: ["Lenguaje de programación", "Inteligencia empresarial", "Aprendizaje automático", "Máquinas autónomas"], answer: 2 },
    { question: "¿Qué es un firewall?", options: ["Un sistema para proteger redes", "Un navegador web", "Un lenguaje de programación", "Un protocolo de comunicación"], answer: 0 },
    { question: "¿Qué framework se usa para aplicaciones backend en JavaScript?", options: ["Vue.js", "Django", "Node.js", "React"], answer: 2 },
    { question: "¿Qué es Docker?", options: ["Una herramienta de contenedores", "Un sistema operativo", "Una base de datos", "Un lenguaje de programación"], answer: 0 },
    { question: "¿Qué significa IDE?", options: ["Internal Database Engine", "Integrated Development Environment", "Independent Data Entity", "Information Design Editor"], answer: 1 },
    { question: "¿Qué herramienta se usa para control de versiones?", options: ["Git", "Jenkins", "Docker", "Postman"], answer: 0 },
    { question: "¿Qué es Kubernetes?", options: ["Un entorno de desarrollo", "Un servidor web", "Un sistema para orquestar contenedores", "Un protocolo de red"], answer: 2 },
    { question: "¿Qué biblioteca de JavaScript se usa para crear interfaces de usuario?", options: ["Node.js", "React", "Django", "Laravel"], answer: 1 },
    { question: "¿Qué significa DOM?", options: ["Document Object Model", "Digital Operating Model", "Document Operating Module", "Data Object Management"], answer: 0 },
    { question: "¿Qué es Bootstrap?", options: ["Un framework de diseño web", "Un servidor web", "Una herramienta de compilación", "Un gestor de bases de datos"], answer: 0 },
    { question: "¿Qué atributo en HTML se usa para enlazar un archivo CSS?", options: ["href", "src", "rel", "link"], answer: 3 },
    { question: "¿Qué es JSON?", options: ["Un sistema operativo", "Una herramienta de diseño", "Un formato de datos basado en texto", "Un lenguaje de programación"], answer: 2 },
    { question: "¿Qué capa del modelo OSI se encarga de la transmisión física de datos?", options: ["Capa de enlace de datos", "Capa de red", "Capa de transporte", "Capa física"], answer: 3 },
    { question: "¿Qué protocolo se usa para transferir archivos entre computadoras?", options: ["DNS", "SMTP", "FTP", "HTTP"], answer: 2 },
    { question: "¿Qué es un paquete en redes?", options: ["Una unidad de datos que se envía por una red", "Un sistema de archivos", "Una dirección IP", "Un protocolo de seguridad"], answer: 0 },
    { question: "¿Qué herramienta permite analizar el tráfico en redes?", options: ["Wireshark", "Visual Studio", "Jira", "PuTTY"], answer: 0 },
    { question: "¿Qué significa HTTP?", options: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "Hyperlink Transfer Tool", "High Text Transfer Platform"], answer: 0 },
    { question: "¿Cuál es la complejidad de búsqueda en una lista ordenada?", options: ["O(1)", "O(n^2)", "O(log n)", "O(n)"], answer: 2 },
    { question: "¿Qué tipo de lenguaje es Python?", options: ["Lenguaje compilado", "Lenguaje de alto nivel", "Lenguaje ensamblador", "Lenguaje de bajo nivel"], answer: 1 },
    { question: "¿Qué es un repositorio Git?", options: ["Un servidor web", "Un sistema de control de versiones", "Un framework de desarrollo", "Un lenguaje de programación"], answer: 1 },
    { question: "¿Cuál de estos es un sistema operativo basado en Linux?", options: ["Windows", "Ubuntu", "MacOS", "iOS"], answer: 1 },
    { question: "¿Qué significa CSS?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Centralized Style Script"], answer: 0 },
    { question: "¿Qué es un algoritmo?", options: ["Un tipo de base de datos", "Un conjunto de instrucciones", "Un lenguaje de programación", "Un compilador de código"], answer: 1 },
    { question: "¿Cuál es el propósito principal de una API?", options: ["Crear bases de datos", "Permitir la interacción entre sistemas", "Gestionar usuarios", "Monitorear servidores"], answer: 1 },
    { question: "¿Qué hace el comando `git clone`?", options: ["Descarga una copia de un repositorio remoto", "Crea un nuevo repositorio", "Comprime archivos", "Elimina archivos de un repositorio"], answer: 0 },
    { question: "¿Qué significa JSON?", options: ["JavaScript Option Node", "JavaScript Object Notation", "Just Simple Object Notation", "Java Source Object Notation"], answer: 1 },
    { question: "¿Qué es un framework en desarrollo web?", options: ["Un servidor", "Un conjunto de herramientas y bibliotecas", "Un sistema operativo", "Un lenguaje de programación"], answer: 1 },
    { question: "¿Qué protocolo se utiliza para la transferencia de archivos seguros?", options: ["FTP", "SFTP", "HTTP", "SMTP"], answer: 1 },
    { question: "¿Qué tipo de dato es `boolean` en programación?", options: ["Un número decimal", "Una cadena de texto", "Un valor verdadero o falso", "Un tipo de objeto"], answer: 2 },
    { question: "¿Qué significa la sigla URL?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Unique Resource Locator", "Universal Render Locator"], answer: 0 },
    { question: "¿Qué se utiliza para crear interfaces gráficas en Python?", options: ["Flask", "PyGame", "Tkinter", "Django"], answer: 2 },
    { question: "¿Cuál es el propósito de un servidor web?", options: ["Ejecutar aplicaciones de escritorio", "Gestionar bases de datos", "Almacenar y servir contenido web", "Ejecutar código compilado"], answer: 2 },
    { question: "¿Qué es una variable en programación?", options: ["Un tipo de archivo", "Una referencia a un valor en la memoria", "Un conjunto de datos", "Una función matemática"], answer: 1 },
    { question: "¿Qué es la encriptación en redes?", options: ["Un proceso de compresión de datos", "Un proceso de transformación de datos para proteger su privacidad", "Un proceso de transferencia de datos", "Un proceso de creación de direcciones IP"], answer: 1 },
    { question: "¿Qué comando de SQL se utiliza para actualizar registros?", options: ["UPDATE", "SELECT", "DELETE", "INSERT"], answer: 0 },
    { question: "¿Qué extensión de archivo tiene una hoja de estilo CSS?", options: [".css", ".html", ".js", ".xml"], answer: 0 },
    { question: "¿Qué significa 'AJAX' en desarrollo web?", options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Automatic JavaScript and XML", "Advanced JSON and XML"], answer: 0 },
    { question: "¿Qué es un proxy?", options: ["Un servidor que distribuye contenido", "Un tipo de malware", "Un servidor intermediario entre el cliente y el servidor", "Un firewall de red"], answer: 2 },
    { question: "¿Qué es la virtualización?", options: ["Ejecutar sistemas operativos en hardware físico", "Crear redes virtuales", "Crear máquinas virtuales dentro de un sistema operativo", "Crear dispositivos físicos virtuales"], answer: 2 },
    { question: "¿Qué tipo de pruebas se realizan antes de que el software sea lanzado al público?", options: ["Pruebas unitarias", "Pruebas de aceptación", "Pruebas de integración", "Pruebas alfa y beta"], answer: 3 },
    { question: "¿Cuál es la función de un router?", options: ["Filtrar correos", "Conectar redes", "Transferir archivos", "Asignar direcciones IP"], answer: 1 },
    { question: "¿Qué es un modelo de red en capas?", options: ["Una arquitectura que divide las tareas de red en capas", "Un protocolo de comunicación", "Un tipo de base de datos", "Un sistema operativo"], answer: 0 },
    { question: "¿Qué es GitHub?", options: ["Un servidor web", "Una plataforma de control de versiones basada en Git", "Un lenguaje de programación", "Una herramienta de análisis de tráfico"], answer: 1 },
    { question: "¿Qué es una función recursiva?", options: ["Una función que se llama a sí misma", "Una función que ejecuta tareas en paralelo", "Una función que no retorna valores", "Una función que no se puede modificar"], answer: 0 },
    { question: "¿Qué es el Big Data?", options: ["Un conjunto pequeño de datos", "Un conjunto grande y complejo de datos", "Una base de datos relacional", "Un tipo de base de datos no SQL"], answer: 1 },
    { question: "¿Qué es la autenticación multifactor?", options: ["El proceso de verificar la identidad mediante múltiples métodos", "El proceso de proteger la red con un solo factor", "El proceso de bloquear usuarios no autorizados", "El proceso de comprobar la dirección IP"], answer: 0 },
    { question: "¿Cuál es la característica principal de una base de datos NoSQL?", options: ["Almacena datos en tablas", "Usa consultas SQL", "No usa esquemas fijos para los datos", "Es relacional"], answer: 2 },
    { question: "¿Qué significa el término `frontend`?", options: ["El servidor de una aplicación", "La parte del servidor que se encarga de la lógica de negocio", "La parte visible de una aplicación web", "La base de datos de una aplicación"], answer: 2 },
    { question: "¿Qué es un SSL?", options: ["Un sistema para almacenar datos", "Un protocolo de transferencia de archivos", "Un protocolo para seguridad en la web", "Un tipo de servidor de base de datos"], answer: 2 },
    { question: "¿Cuál es la función de un switch en una red?", options: ["Conectar diferentes redes", "Filtrar contenido web", "Conectar dispositivos dentro de la misma red", "Asignar direcciones IP"], answer: 2 }
];


function selectRandomQuestions(questions, count) {
    const shuffled = questions.sort(() => 0.9 - Math.random());
    return shuffled.slice(0, count);
}

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = selectRandomQuestions(quizData, 12);
let userName = '';
let userLastName = '';
let userCareer = '';

const startForm = document.getElementById('start-form');
const startButton = document.getElementById('start-button');
const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-button');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(index));
        optionsElement.appendChild(button);
    });

    nextButton.classList.add("hidden"); 
}

function selectAnswer(selectedIndex) {
    const correctIndex = selectedQuestions[currentQuestionIndex].answer;
    const buttons = optionsElement.querySelectorAll("button");

    buttons.forEach((button, index) => {
        if (index === correctIndex) {
            button.style.backgroundColor = "#1fddff;"; 
        } else if (index === selectedIndex) {
            button.style.backgroundColor = "#1fddff;"; 
        }
        button.disabled = true; 
    });

    if (selectedIndex === correctIndex) {
        score++;
    }

    nextButton.classList.remove("hidden");
}

function resetStartForm() {
    startForm.classList.remove('hidden'); 
    quizContainer.classList.add('hidden'); 
    resultElement.classList.add('hidden'); 

    document.getElementById('name').value = ''; 
    document.getElementById('last-name').value = ''; 
    document.getElementById('career').value = ''; 
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedQuestions = selectRandomQuestions(quizData, 12); 
    resetStartForm(); 
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultElement.classList.remove("hidden"); 
    scoreElement.textContent = `Puntuación: ${score} de ${selectedQuestions.length}`;

    const data = {
        nombre: userName,
        apellido: userLastName,
        carrera: userCareer,
        puntuacion: score
    };

    fetch('guardar_datos.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log("Resultado guardado con éxito:", data.message);
        } else {
            console.error("Error al guardar el resultado:", data.message);
        }
    })
    .catch(error => {
        console.error("Error al guardar el resultado:", error);
    });

    restartButton.textContent = "Volver al formulario";
    restartButton.removeEventListener("click", restartQuiz);
    restartButton.addEventListener("click", resetStartForm);
}


function resetStartForm() {
    currentQuestionIndex = 0; 
    score = 0;
    selectedQuestions = selectRandomQuestions(quizData, 12); 

    document.getElementById('name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('career').value = '';

    startForm.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultElement.classList.add('hidden');
}

function startQuiz() {
    userName = document.getElementById('name').value.trim();
    userLastName = document.getElementById('last-name').value.trim();
    userCareer = document.getElementById('career').value.trim();

    if (userName && userLastName && userCareer) {
        startForm.classList.add('hidden'); 
        quizContainer.classList.remove('hidden'); 
        loadQuestion(); 
    } else {
        alert("Por favor, completa todos los campos. Ningún campo debe estar vacío.");
    }
}

restartButton.addEventListener("click", resetStartForm);

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
        nextButton.classList.add("hidden");
    } else {
        showResult();
    }
});
restartButton.addEventListener("click", resetStartForm);

window.onload = function() {
    setTimeout(function() {
      
        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.display = "none";

        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.classList.remove("hidden");
    }, 3000); 
}
