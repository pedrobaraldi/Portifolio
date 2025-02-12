# Portfolio Contact Form

Este é um formulário de contato utilizado em um portfólio pessoal, com integração com o Firebase para armazenamento de mensagens e o EmailJS para envio de e-mails.

---

## :bulb: Funcionalidades

- **Envio de mensagens**: Os usuários podem preencher o formulário de contato para enviar mensagens.
- **Armazenamento de dados**: As mensagens enviadas são armazenadas no Firebase Realtime Database.
- **Envio de e-mail**: Ao submeter o formulário, um e-mail é enviado para o dono do portfólio via EmailJS.
- **Alerta de envio**: Após o envio, um alerta de confirmação é exibido por alguns segundos.

---

## :gear: Tecnologias Utilizadas

- **HTML5**: Estrutura da página e elementos do formulário.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript**: Interatividade e funcionalidades de envio de dados.
- **Firebase**: Armazenamento de dados no Firebase Realtime Database.
- **EmailJS**: Envio de e-mails após a submissão do formulário.
- **Material Icons**: Ícones usados para o menu e navegação.

---

## :file_folder: Estrutura do Código

### HTML

O código HTML define a estrutura da página, com seções para **About**, **Skills**, **Projects**, e **Contact**. Ele também inclui o formulário de contato, onde os dados do usuário (nome, e-mail e mensagem) são capturados e enviados para o Firebase e EmailJS.

### JavaScript

O código JavaScript é responsável por:

- **Submissão do Formulário**: Quando o formulário é enviado, os dados são coletados, armazenados no Firebase e um e-mail é enviado.
- **Menu de Navegação**: Implementa funcionalidades para navegação suave entre seções da página.
- **Deslizar os Itens**: Implementação de carrossel para navegação entre projetos.

---

## :file_folder: Estrutura de Arquivos

