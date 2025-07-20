# Sistema de Check-in com Validação de Horário

**Documentação Técnica e Acadêmica**  
**Autor:** Luiz Guilherme rid #195440
**Data:** 20/07/2025  

---

## Sumário

1. [Declaração do Problema](#1-declaração-do-problema)  
2. [Conjuntos de Entradas](#2-conjuntos-de-entradas)  
3. [Declaração da Solução](#3-declaração-da-solução)  
4. [Modelo de Referência](#4-modelo-de-referência)  
5. [Métricas de Avaliação](#5-métricas-de-avaliação)  
6. [Design do Projeto](#6-design-do-projeto)  
7. [Apresentação](#7-apresentação)  

---

## 1. Declaração do Problema

O problema a ser resolvido é a necessidade de garantir que os pacientes realizem o check-in online apenas nos 15 minutos anteriores à consulta médica, evitando registros prematuros que possam comprometer o fluxo de confirmação e gerar inconsistências nos horários de entrada.

Esse controle visa aprimorar a organização de clínicas, hospitais e centros de atendimento, assegurando que os registros de presença sejam realizados apenas quando pertinentes.

Este problema é quantificável (em minutos), mensurável (com logs) e replicável em diferentes cenários de agendamento de serviços presenciais.

---

## 2. Conjuntos de Entradas

O sistema recebe os seguintes dados por meio do formulário:

- Nome completo do paciente;
- Cidade e estado;
- Nome do plano de saúde;
- Número da carteirinha (apenas dígitos);
- Data da consulta (campo do tipo data);
- Telefone com DDD (mínimo de oito dígitos numéricos);
- Data do acesso (preenchido automaticamente via API SheetMonkey).

A data e hora da consulta, no momento, são simuladas com uma variável fixa, porém futuramente serão integradas a um banco de dados ou sistema de agendamentos.

---

## 3. Declaração da Solução

A solução consiste em um formulário web com:

- Validação de campos via expressões regulares;
- Verificação da diferença entre o horário atual e o horário da consulta;
- Integração com a API do SheetMonkey para persistência dos dados.

**Regra de negócio:** caso o formulário seja submetido com mais de 15 minutos de antecedência à consulta, o envio é bloqueado com a exibição de um alerta. O envio só é permitido dentro do intervalo de 15 minutos antes do horário agendado.

---

## 4. Modelo de Referência

Sistemas convencionais permitem o check-in com várias horas de antecedência, o que pode causar acúmulo de cadastros irrelevantes e dificultar o controle de comparecimento.

A proposta apresentada restringe esse processo ao intervalo de 15 minutos anteriores à consulta, o que se alinha às boas práticas já adotadas por clínicas modernas, favorecendo a previsibilidade e a organização do atendimento.

---

## 5. Métricas de Avaliação

As seguintes métricas serão consideradas para avaliar o sistema:

- Taxa de tentativas bloqueadas por envio com antecedência indevida;
- Diferença média entre o horário de envio e o horário da consulta;
- Taxa de sucesso dos envios realizados dentro do intervalo permitido;
- Quantidade de tentativas repetidas por parte dos usuários após bloqueio.

Essas métricas poderão ser observadas por meio da análise dos registros da planilha conectada via API.

---

## 6. Design do Projeto

**Tecnologias utilizadas:**

- HTML5  
- CSS3  
- JavaScript (sem frameworks)  
- API do SheetMonkey  

**Fluxo de funcionamento:**

1. O usuário preenche o formulário com os dados obrigatórios;  
2. O JavaScript valida o conteúdo dos campos preenchidos;  
3. O sistema compara a hora atual com a hora da consulta;  
4. Caso a diferença seja maior que 15 minutos, exibe alerta e impede o envio;  
5. Se dentro do intervalo permitido, o formulário é enviado para a planilha.

**Fluxo ilustrativo:**

[Usuário Preenche] -> [Validação dos Campos] -> [Comparação com a Hora da Consulta]
->
(Diferença > 15 min) -> Alerta + Bloqueio do envio
(Diferença <= 15 min) -> Envio permitido e registro na planilha

yaml
Copiar
Editar

---

## 7. Apresentação

O projeto está apresentado em formato acadêmico, com linguagem formal, estrutura lógica clara e fundamentação adequada.

As seções estão organizadas conforme os critérios de avaliação exigidos, e a documentação está preparada para apresentação em banca técnica.

**Referências utilizadas:**

- Documentação da API SheetMonkey: [https://sheetmonkey.io/](https://sheetmonkey.io/)  
- Mozilla Developer Network (MDN): JavaScript Date, setMinutes, RegExp  

---
