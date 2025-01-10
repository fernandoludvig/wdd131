// getdates.js

// Obtém o ano atual
const currentYear = new Date().getFullYear();

// Insere o ano atual no primeiro parágrafo do rodapé
const footerFirstParagraph = document.querySelector('footer p:first-of-type');
footerFirstParagraph.textContent = `© ${currentYear} Fernando   Brazil`;

// Obtém a data da última modificação do documento
const lastModifiedDate = document.lastModified;

// Insere a data da última modificação no segundo parágrafo do rodapé
const footerSecondParagraph = document.querySelector('footer p:nth-of-type(2)');
footerSecondParagraph.textContent = `Last Modification: ${lastModifiedDate}`;
