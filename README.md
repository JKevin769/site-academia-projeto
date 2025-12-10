# site-academia-projeto
 Trabalho prático de Programação Web do curso Sistema de Informação

 Relatório de Desenvolvimento Web: PowerFit Gym
Disciplina: Desenvolvimento Web (Front-end) Aluno: João Kevin Projeto: Site Institucional de Academia com Funcionalidades Interativas

1. Objetivo do Projeto
O objetivo deste trabalho prático foi desenvolver um site responsivo para uma academia fictícia ("PowerFit Gym"), aplicando conceitos fundamentais de HTML5, CSS3 e JavaScript, com ênfase no uso do framework Bootstrap 5 para agilizar a estilização e garantir responsividade, além de manipulação dinâmica do DOM.

2. Tecnologias e Ferramentas Utilizadas
HTML5: Para estruturação semântica do conteúdo.

CSS3: Para estilos personalizados pontuais (imagem de fundo).

Bootstrap 5 (CDN): Framework principal utilizado para layout (Grid System), tipografia, cores, botões e componentes (Cards, Navbar, Alerts).

JavaScript (ES6+): Para lógica de programação e interatividade.

Bootstrap Icons: Biblioteca de ícones vetoriais para o rodapé.

Git & GitHub: Para versionamento de código e hospedagem via GitHub Pages.

3. Estrutura de Arquivos
O projeto foi organizado separando estrutura, estilo e comportamento (Separação de Preocupações):

index.html: Contém toda a marcação e conteúdo do site.

style.css: Contém apenas as customizações que o Bootstrap não cobre nativamente (ex: background do banner).

script.js: Contém toda a lógica de manipulação do DOM e eventos.

4. Detalhamento do Desenvolvimento
4.1. Estrutura e Layout (HTML & Bootstrap)
O site foi construído utilizando Tags Semânticas (<header>, <nav>, <main>, <section>, <footer>) para melhor acessibilidade e SEO.

Menu de Navegação: Utilizou-se o componente Navbar do Bootstrap, fixo no topo (fixed-top) e colapsável em dispositivos móveis (menu hambúrguer).

Seção Hero: Um banner de destaque ocupando 100% da altura da tela (100vh), com imagem de fundo e chamada para ação (Call to Action).

Grid System: A seção de planos utilizou o sistema de colunas (row, col-md-4), garantindo que os cards fiquem lado a lado em telas grandes e empilhados em telas pequenas.

4.2. Estilização (CSS)
Seguindo os requisitos, o uso de CSS manual foi minimizado.

A maior parte do visual foi construída com Utility Classes do Bootstrap (ex: bg-dark, text-warning, p-5, shadow, rounded).

O arquivo style.css foi usado estritamente para configurar a imagem de fundo com sobreposição (overlay) escura na seção Hero e efeitos de transição (hover) nos cards.

4.3. Interatividade e Lógica (JavaScript)
A manipulação do DOM foi central neste projeto:

Calculadora de IMC:

Captura os valores dos inputs de peso e altura.

Realiza o cálculo matemático peso / (altura * altura).

Utiliza condicionais (if/else) para determinar a classificação (Abaixo do peso, Normal, Obesidade, etc.).

Manipulação DOM: Altera dinamicamente as classes do alerta (verde para normal, vermelho para obesidade) e injeta o resultado na página usando innerHTML.

Botões de Assinar:

Uso de querySelectorAll para selecionar múltiplos botões.

Ao clicar, o botão muda de texto ("Assinar" -> "Adicionado") e de cor, simulando uma interação com carrinho de compras, e retorna ao estado original após 2 segundos (setTimeout).

Scroll Suave: Função para rolar a página até a seção de planos ao clicar no botão inicial.

5. Funcionalidades do Site
Navegação Responsiva: O usuário pode navegar entre as seções (Início, Planos, IMC) através de um menu que se adapta a celulares e desktops.

Visualização de Planos: Apresentação clara de três níveis de serviço (Básico, Gold, Platinum) usando Cards.

Cálculo de Saúde: Uma ferramenta funcional onde o usuário insere seus dados e recebe feedback visual imediato sobre seu Índice de Massa Corporal.

Informações de Contato: Rodapé completo com endereço, links para redes sociais e créditos ao desenvolvedor João Kevin.

6. Conclusão
O projeto atendeu a todos os requisitos propostos. O uso do Bootstrap permitiu um desenvolvimento rápido e visualmente agradável, enquanto o JavaScript adicionou a camada de inteligência necessária para transformar uma página estática em uma aplicação web interativa. O site encontra-se publicado e acessível publicamente via GitHub Pages.
