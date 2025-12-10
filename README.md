Relatório de Desenvolvimento Web: PowerFit Gym
Aluno: João Kevin Disciplina: Desenvolvimento Web (Front-end) Projeto: Site Institucional e Funcional para Academia

1. Introdução
O presente relatório descreve o processo de desenvolvimento do site "PowerFit Gym". O objetivo do trabalho foi criar uma página web responsiva, visualmente atraente e interativa, simulando o ambiente digital de uma academia. O projeto visou consolidar conhecimentos em HTML, CSS e JavaScript, com ênfase na utilização do framework Bootstrap 5 para agilizar a estilização e na manipulação do DOM para interatividade.

2. Descrição do Site e Funcionalidades
O site foi estruturado como uma Landing Page (página única), facilitando a navegação do usuário. As principais seções e funcionalidades incluem:

Header e Navegação: Menu fixo no topo que permite navegação rápida entre as seções (Início, Planos, IMC).

Seção Hero (Banner): Área de destaque com imagem de fundo imersiva, "Call to Action" (chamada para ação) e botão de rolagem suave.

Seção de Planos: Apresentação de três opções de serviços (Básico, Gold e Platinum) utilizando Cards do Bootstrap para organização visual.

Calculadora de IMC: Uma ferramenta funcional desenvolvida em JavaScript. O usuário insere peso e altura, e o sistema retorna o índice calculado, a classificação (ex: Peso Normal, Sobrepeso) e feedback visual com cores (verde, amarelo, vermelho).

Botões Interativos: Botões de "Assinar" que simulam a adição ao carrinho, alterando seu texto e cor temporariamente ao serem clicados.

Rodapé (Footer): Área informativa contendo breve descrição, endereço, contatos, links para redes sociais e os créditos de desenvolvimento.

3. Tecnologias Utilizadas
HTML5: Para a estruturação semântica do conteúdo (header, main, section, footer).

CSS3: Utilizado minimamente para personalizações específicas (backgrounds e ajustes finos), priorizando o framework.

Bootstrap 5: Framework principal utilizado para o sistema de grid (responsividade), componentes (Navbar, Cards, Buttons, Inputs) e utilitários de espaçamento/cores.

JavaScript (ES6): Para a lógica de programação, manipulação do DOM e tratamento de eventos de clique.

Git & GitHub Pages: Para versionamento do código e hospedagem online do projeto.

4. Processo de Desenvolvimento
O desenvolvimento seguiu uma abordagem incremental:

Estruturação: Inicialmente, foi criado o esqueleto HTML com as tags semânticas e a importação da biblioteca Bootstrap via CDN.

Layout e Design: A estilização foi aplicada utilizando classes utilitárias do Bootstrap (ex: bg-dark, text-center, p-5). O CSS manual (style.css) foi restrito apenas à imagem de fundo da seção Hero e efeitos de hover nos cards, atendendo ao requisito de minimizar CSS puro.

Lógica e Interatividade: Foi implementado o arquivo script.js. A lógica focou em capturar os eventos de clique, validar os inputs da calculadora de IMC e injetar o resultado no HTML dinamicamente.

Refinamento: Inclusão de ícones (Bootstrap Icons) no rodapé e testes de responsividade em diferentes tamanhos de tela para garantir a adaptação do layout móvel.

5. Análise Crítica
Durante a execução do projeto, foram observados os seguintes pontos:

5.1. Facilidades
Uso do Bootstrap: A maior facilidade foi a construção do layout. O sistema de Grid (linhas e colunas) permitiu criar uma estrutura responsiva em minutos, sem a necessidade de media queries complexas no CSS.

Componentes Prontos: O uso de componentes pré-estilizados, como a Navbar e os Cards, acelerou drasticamente o desenvolvimento, garantindo um visual profissional imediato.

5.2. Dificuldades e Desafios
Manipulação do DOM: A implementação da lógica da Calculadora de IMC exigiu atenção. O desafio foi garantir que o script não apenas calculasse o valor, mas também limpasse as classes de cor anteriores (ex: remover o vermelho de "Obesidade" antes de mostrar o verde de "Peso Normal") a cada novo cálculo.

Personalização sobre o Framework: Em alguns momentos, sobrescrever o padrão do Bootstrap (como a cor específica de um botão ou a transparência do menu) exigiu o uso de CSS com seletores mais específicos ou classes adicionais.

6. Conclusão
O projeto PowerFit Gym foi concluído com sucesso, atendendo a todos os requisitos propostos. O site encontra-se funcional, responsivo e hospedado publicamente. O desenvolvimento permitiu compreender na prática como bibliotecas front-end (Bootstrap) interagem com a lógica de programação (JavaScript), resultando em uma aplicação web moderna e eficiente.
