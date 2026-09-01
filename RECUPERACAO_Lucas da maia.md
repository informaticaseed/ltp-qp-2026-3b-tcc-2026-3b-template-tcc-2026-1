Recuperação — 2º Bimestre — Lucas da maia

1. O que é uma Issue e para que serve no desenvolvimento de software?

Uma Issue é um registro usado para descrever uma tarefa, um problema ou uma ideia que precisa ser resolvida dentro de um projeto. Ela serve para organizar o trabalho do grupo, porque cada Issue representa um pedaço específico do que precisa ser feito, com título, descrição e responsável. Assim, em vez de o time trabalhar de forma desorganizada, cada pessoa sabe exatamente o que está pendente e pode acompanhar o progresso do projeto pelo quadro de Issues.

2. O que é um Pull Request e por que ele é importante?

Um Pull Request (PR) é uma solicitação para que as alterações feitas em uma branch separada sejam incorporadas à branch principal do projeto (geralmente a main). Ele é importante porque cria um momento de revisão: antes de o código entrar na versão oficial do projeto, alguém do time pode ler as mudanças, sugerir ajustes e evitar que erros sejam introduzidos. Além disso, o PR mantém um histórico organizado de quem fez o quê e por quê, o que facilita entender a evolução do projeto ao longo do tempo.

3. O que é separação de camadas no código? Explique a diferença entre app.py e repositorio.py e por que isso importa.

Separação de camadas é uma prática de organização do código em que cada parte do sistema tem uma responsabilidade específica, em vez de tudo estar misturado em um único arquivo. No caso do app.py e do repositorio.py, o app.py normalmente cuida da camada de aplicação — ou seja, das rotas, das requisições que chegam do usuário e das respostas que são enviadas de volta. Já o repositorio.py cuida da camada de acesso a dados, ou seja, das consultas e operações diretamente relacionadas ao banco de dados. Essa separação importa porque, se um dia for necessário trocar o banco de dados ou mudar a forma como as rotas funcionam, é possível alterar uma camada sem precisar mexer na outra, o que deixa o código mais fácil de manter e de corrigir.

4. O que você deixou de fazer neste bimestre e por quê?

Neste bimestre, deixei o BACKLOG.md do grupo incompleto, com vários campos ainda marcados como "(escreva aqui)", em vez de preencher com as funcionalidades reais do MVP do chatbot. Também não mantive uma frequência constante de commits ao longo das semanas, o que fez com que o teste automático de participação semanal do grupo falhasse. Além disso, não abri nem fiz merge de nenhum Pull Request nas semanas recentes, então o fluxo de revisão de código que o projeto deveria seguir não foi respeitado. Isso aconteceu principalmente porque priorizei outras atividades e deixei as tarefas do projeto se acumularem, sem organizar um cronograma semanal fixo para trabalhar nele.

5. Plano para o 3º bimestre


Vou preencher e manter o BACKLOG.md sempre atualizado, revisando o status de cada funcionalidade toda semana.
Vou fazer pelo menos um commit por semana no repositório do grupo, mesmo que a tarefa seja pequena, para manter a consistência exigida pelo autograding.
Vou abrir um Pull Request por semana (com referência à Issue correspondente usando Closes #N) e garantir que ele seja revisado e mergeado antes do prazo.
