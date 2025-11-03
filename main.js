console.log("JS funcionando correctamente");

const languages = [
  {
    name: "Python",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    description:
      "Lenguaje versátil y fácil de aprender, muy usado en ciencia de datos, inteligencia artificial y desarrollo web.",
    advantages: ["Sintaxis sencilla", "Gran comunidad", "Multipropósito"],
    example: 'print("Hola, mundo!")'
  },
  {
    name: "JavaScript",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    description:
      "Lenguaje del lado del cliente para páginas web interactivas, también se usa en servidores con Node.js.",
    advantages: ["Corre en todos los navegadores", "Amplio ecosistema", "Full stack"],
    example: 'console.log("Hola, mundo!");'
  },
  {
    name: "C++",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    description:
      "Lenguaje de alto rendimiento usado en videojuegos, sistemas embebidos y software de bajo nivel.",
    advantages: ["Rápido", "Control total del hardware", "Usado en la industria"],
    example:
      "#include <iostream>\nusing namespace std;\nint main(){ cout << 'Hola, mundo!'; return 0; }"
  },
  {
    name: "Java",
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    description:
      "Lenguaje orientado a objetos popular para aplicaciones empresariales, móviles y web.",
    advantages: ["Multiplataforma (JVM)", "Seguridad", "Robusto"],
    example:
      "public class Main {\n  public static void main(String[] args) {\n    System.out.println('Hola, mundo!');\n  }\n}"
  },
  {
    name: "C#",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    description:
      "Lenguaje de Microsoft usado para desarrollo en .NET, videojuegos con Unity y aplicaciones de escritorio.",
    advantages: ["Integración con .NET", "Orientado a objetos", "Buen rendimiento"],
    example:
      "using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine('Hola, mundo!');\n  }\n}"
  }
];

const container = document.getElementById("languagesContainer");
const searchInput = document.getElementById("searchInput");

function renderLanguages(list) {
  container.innerHTML = "";
  list.forEach(lang => {
    const card = document.createElement("div");
    card.className = "language-card";
    card.innerHTML = `
      <h2>${lang.name}</h2>
      <img src="${lang.image}" alt="Logo de ${lang.name}">
      <p>${lang.description}</p>
      <h4>Ventajas:</h4>
      <ul>${lang.advantages.map(a => `<li>${a}</li>`).join("")}</ul>
      <h4>Ejemplo:</h4>
      <pre><code>${lang.example}</code></pre>
    `;
    container.appendChild(card);
  });
}

renderLanguages(languages);

searchInput.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = languages.filter(lang =>
    lang.name.toLowerCase().includes(query) ||
    lang.description.toLowerCase().includes(query)
  );
  renderLanguages(filtered);
});
