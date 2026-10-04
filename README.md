# 🍔 Atividade Prática 7 - Cardápio (React Native)

Este repositório contém a entrega da **Atividade Prática 7** desenvolvida para a disciplina de **Programação para Dispositivos Móveis II** do professor Jeferson de Souza Dias do curso de **Desenvolvimento de Software Multiplataforma**.

## 📌 Sobre o Projeto

O aplicativo consiste em um cardápio digital interativo para um restaurante estilo *fast food*. Ele apresenta diferentes categorias de produtos de forma organizada, com um design moderno e atrativo, simulando a experiência real de navegação de um cliente buscando por pizzas, hambúrgueres e bebidas.

## 🎯 Requisitos da Atividade e Como Foram Aplicados

| Requisito Solicitado | Como foi implementado |
| :--- | :--- |
| **React Navigation TAB** | Foi utilizada a biblioteca `@react-navigation/bottom-tabs` para criar uma barra de navegação inferior fluida, permitindo alternar entre as categorias do cardápio. |
| **Categorias de Produtos** | Seguindo a sugestão da atividade, o menu foi dividido nas categorias: **Pizza**, **Hamburger** e **Bebida**, ilustradas utilizando a biblioteca nativa `@expo/vector-icons`. |
| **No mínimo 3 telas separadas** | Para cumprir o requisito e evitar a penalidade na nota, o projeto foi devidamente modularizado. As telas foram separadas em `tela1.js`, `tela2.js` e `tela3.js` dentro da pasta `src`. |
| **Layout Criativo e Bem Cuidado** | Desenvolvemos um layout *premium* utilizando componentes nativos como `FlatList` para performance, e `Cards` customizados com sombras (`elevation`), imagens arredondadas e uma paleta de cores voltada para o setor alimentício. |
| **Uso de Imagens** | As imagens dos produtos foram referenciadas localmente nos códigos (ex: `require('../assets/pizza1.png')`), garantindo o carregamento rápido e offline dos itens do cardápio. |

---

## 🚀 Como Executar o Projeto

Você pode testar este projeto de duas maneiras: diretamente no navegador via Snack Expo (forma mais rápida) ou localmente na sua máquina.

### Opção 1: Pelo Snack Expo (Direto no Navegador)
1. Acesse o [Snack Expo](https://snack.expo.dev/).
2. No painel esquerdo de arquivos, crie a seguinte estrutura (apagando o conteúdo padrão):
   - `App.js` (na raiz)
   - `src/Routes.js`
   - `src/tela1.js`
   - `src/tela2.js`
   - `src/tela3.js`
   - `assets/`
3. Copie e cole os respectivos códigos deste repositório em cada arquivo.
4. Caso o Snack solicite, instale as dependências relacionadas ao React Navigation que aparecerem na tela.
5. Selecione a aba **Web**, **iOS** ou **Android** no painel direito para visualizar e interagir com o aplicativo em tempo real.

### Opção 2: Localmente na sua Máquina
**Pré-requisitos:** Node.js instalado e o aplicativo *Expo Go* no seu dispositivo móvel (opcional).

1. Clone este repositório para a sua máquina:
   ```bash
   git clone https://github.com/allanmsilva23/Aplicativo-Cardapio.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Aplicativo-Cardapio
   ```
3. Instale as dependências (incluindo o React Navigation):
   ```bash
   npm install
   ```
4. Inicie o servidor do Expo:
   ```bash
   npx expo start
   ```
5. Escaneie o QR Code que aparecerá no terminal usando a câmera do seu celular (iOS) ou o app do Expo Go (Android).

---

## 🛠️ Tecnologias Utilizadas
*   **React Native**
*   **Expo (v54.0.0)**
*   **React Navigation (Bottom Tabs)**
*   **Expo Vector Icons**
*   **JavaScript (ES6+)**