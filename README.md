# 📍 Localizador de Quadras - SADE

O **Localizador de Quadras** é um Progressive Web App (PWA) desenvolvido para otimizar a localização de endereços e quadras específicas que o Google não encontra ao pesquisarmos. Utilizando a API do Leaflet e integração com o Google Maps, a ferramenta permite buscas rápidas por CEP, Bairro ou Quadra, funcionando de forma eficiente tanto em desktop quanto em dispositivos móveis.

## 🤔 A quem se destina

O aplicativo se destina a moradores, motoristas e entregadores da cidade que buscam otimizar a localização de quadras que antes só eram possíveis de achar com pontos de referência.

## 🚀 Funcionalidades

[Preview do App](img/preview.png)

[https://lucasdosantu.github.io/quadras-sade/](https://lucasdosantu.github.io/quadras-sade/)

- **Busca Inteligente:** Auto-complete para localização imediata de pontos cadastrados.
- **Modo Offline (PWA):** Graças ao Service Worker, o mapa e os dados podem ser acessados mesmo em áreas com sinal de internet insDistância**Cálculo de Distância:** Exibe em tempo real a distância entre a sua posição GPS e o ponto selecionado.
- **Modo Sugestão:** Clique no mapa para capturar coordenadas e sugerir novos pontos via formulário integrado.
- **Visualização Dupla:** Alternância rápida entre visão de Rua e Satélite (Google Maps Tiles).

## 📂 Estrutura do Projeto

O projeto foi construído seguindo princípios de **modularização** para facilitar a manutenção:

```text
/quadras-sade
├── index.html           # Interface principal e estrutura do app
├── dados.js             # Base de dados (JSON) das quadras e CEPs
├── manifest.json        # Configurações de instalação do PWA
├── sw.js                # Motor de Service Worker (Cache Offline)
├── /css
│   └── estilo-mapa.css  # Layout, cores e responsividade (CSS)
└── /js
│   ├── config.js        # Configuração do mapa e camadas Google
│   ├── gps.js           # Geolocalização e cálculo de distância
│   ├── busca.js         # Lógica do motor de busca e sugestões
│   └── acoes.js         # Eventos de clique, pop-ups e formulários
```

## 🛠️ Tecnologias Utilizadas

* [Leaflet.js](https://leafletjs.com/) - Biblioteca para mapas interativos.
* [Google Maps Tiles](https://developers.google.com/maps) - Provedor de camadas de mapa.
* [JavaScript ES6+](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Lógica modularizada.
* [Service Workers](https://developer.mozilla.org/pt-BR/docs/Web/API/Service_Worker_API) - Suporte Offline e PWA.

## 🔧 Como usar

1.  **Instalação:** Por ser um PWA, abra o site no navegador do celular e selecione "Adicionar à tela de início".
2.  **Trabalho de Campo:** Para garantir o funcionamento offline, navegue pela área de interesse enquanto estiver conectado ao Wi-Fi para alimentar o cache.
3.  **Navegação:** Ao encontrar uma quadra, utilize o botão "IR PARA O LOCAL" para abrir a rota diretamente no aplicativo de GPS do seu dispositivo.

## 📄 Licença e Termos de Uso

Este projeto está sob uma licença de **Uso Pessoal e Não Comercial**. 

* **Uso Permitido:** Uso privado, estudo e modificações para fins pessoais.
* **Uso Vedado:** É estritamente proibida a venda, comercialização ou distribuição deste software para fins lucrativos ou comerciais de qualquer natureza.

Copyright © 2026 - Desenvolvido por [Lucas Santos](https://instagram.com/lucasdosantu).
