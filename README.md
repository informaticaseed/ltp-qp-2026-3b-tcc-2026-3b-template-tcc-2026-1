# TCC 2026 — equipe 5 chatbot
**LTP3 + QP3 · CEMIC 2026 · Prof. Rafael Martins Alves**

---

## 👥 Integrantes

| Nome completo | GitHub | Turma |
|--------------|--------|-------|
| Lucas da maia | @Zluc7  | 3B |
| Israel cabral | israelcabral3312008 | 3B |
| Enzo cavalcante | Enzincavalcante | 3B |

**Tema:** Sistema cemic facilitador de comunicação entre coordenação e pais ou responsáveis
**Tecnologia:** Python + Flask + SQLite

---

## 🎯 O que o sistema faz

O Sistema comunicador cemi foi desenvolvido para facilitar a comunicação entre a coordenação escolar e os pais ou responsáveis, centralizando avisos, comunicados e informações importantes em um único ambiente digital. O objetivo é reduzir falhas de comunicação, agilizar o envio de informações e tornar o acompanhamento da vida escolar mais eficiente para todos os envolvidos.

---

## 🔄 Como o grupo trabalha toda semana

Segunda — Cada integrante abre as Issues da semana no GitHub usando o template "Tarefa Semanal".
Durante a semana — Desenvolvemos as funcionalidades do chatbot, realizamos testes locais e fazemos os commits.
Sexta — O grupo abre 1 Pull Request único linkando todas as Issues concluídas na semana para revisão e merge.
Push/Merge — As métricas de participação e a validação do código rodam automaticamente via GitHub Actions.

---

## 📁 Estrutura do projeto

├── README.md           ← Visão geral e documentação principal do sistema
├── BACKLOG.md          ← Backlog do MVP, sprints e planejamento das funcionalidades
├── arquitetura.md      ← Modelagem do chatbot (fluxo de diálogo e integradores)
├── decisoes/           ← Registros de Decisão Técnica (ADRs do Flask e SQLite)
├── diagramas/          ← Diagramas de Casos de Uso, DER e fluxogramas escolares
├── evidencias/         ← Screenshots das telas e logs de conversas de teste
├── src/                ← Código-fonte do sistema (servidor Flask, rotas e banco)
└── tests/              ← Testes automáticos das rotas e respostas do chatbot
```

---

## ⚡ Comandos rápidos

```bash
# Clonar o repositório
git clone <URL> https://github.com/informaticaseed/tcc-2026-3b-equipe-5-chatbot.git
cd tcc-2026-3b-equipe-5-chatbot

# Rodar o projeto
pip install -r requirements.txt
python src/app.py

# Rodar os testes
pytest tests/ -v
```
