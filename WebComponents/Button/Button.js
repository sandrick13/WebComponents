// Definição do web component de botão
class BotaoComponent extends HTMLElement {
    constructor() {
      super();
  
      // Cria um shadow root
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Cria um elemento de botão
      const button = document.createElement('button');
  
      // Adiciona algum conteúdo e estilo ao botão
      button.textContent = this.getAttribute('label') || 'Clique Aqui';
      button.style.padding = '10px 20px';
      button.style.border = 'none';
      button.style.borderRadius = '5px';
      button.style.cursor = 'pointer';
      button.style.backgroundColor = '#3498db';
      button.style.color = '#fff';
  
      // Adiciona o evento de clique ao botão
      button.addEventListener('click', () => {
        alert('O botão foi clicado!');
      });
  
      // Adiciona o botão ao shadow root
      shadow.appendChild(button);
    }
  
    // Observa mudanças nos atributos do componente
    static get observedAttributes() {
      return ['label'];
    }
  
    // Reage a mudanças nos atributos
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'label') {
        const button = this.shadowRoot.querySelector('button');
        if (button) {
          button.textContent = newValue;
        }
      }
    }
  }
  
  // Define o novo elemento personalizado
  customElements.define('botao-component', BotaoComponent);
  