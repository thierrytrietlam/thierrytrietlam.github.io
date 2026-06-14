---
key: "b2b-saas-sales-attainment"
lang: "fr"
title: "Quels commerciaux ont manqué leur objectif ?"
summary: "Une équipe commerciale SaaS B2B a dépassé son plan global, et pourtant trois commerciaux ont discrètement manqué leur chiffre. J'ai reconstruit cinq exports CRM bruts en un entrepôt testé, et je les ai trouvés en reportant à la maille où vivent réellement les objectifs."
question: "Pourquoi certains commerciaux ratent leur objectif trimestriel quand l'entreprise dépasse son plan ?"
dataset: "Données synthétiques qui reproduisent une mission réelle. Cinq exports CRM : opportunités, activités, comptes, commerciaux et objectifs. Quinze mois, environ 3 300 opportunités et 8 200 activités."
goal: "Orienter le coaching et le recrutement vers les personnes qui en ont besoin, pas vers les bureaux qui semblent seulement occupés."
outcome: "Trois objectifs manqués, cachés dans des bureaux d'apparence saine, chacun avec une cause différente et un remède différent."
stack: ["dbt", "DuckDB", "SQL", "Python", "Compatible cloud"]
cover: "/img/projects/b2b-saas-sales-attainment/fr/cover.svg"
date: "2026-05"
featured: true
synthetic: true
order: 100
links: []
---

Une entreprise SaaS B2B a clôturé un trimestre solide. Le new business a atteint 202 pour cent de l'objectif combiné. Le Head of Sales gardait pourtant une question en tête : quelques personnes n'avaient pas atteint leur chiffre, et il voulait savoir lesquelles, et pourquoi. La réponse honnête dépendait entièrement d'un seul choix de modélisation. Voici cette analyse, de cinq exports CSV bruts à un entrepôt testé et reproductible.

## L'approche

J'ai traité le cas comme un pipeline de production, pas comme une requête jetable. Huit étapes. Explorer chaque fichier et le profiler avant de faire confiance à un seul chiffre. Modéliser la cible comme un entrepôt en couches façon dbt et fixer la maille. Dessiner le lignage pour garder le modèle lisible. Vérifier les jointures et les clés. Cataloguer chaque problème de qualité avec un compte et une règle. Lire les distributions qui portent le résultat. Produire la réponse attendue par la question. La livrer comme un pipeline que chacun peut relancer.

L'outillage reste volontairement léger. La bibliothèque standard de Python pour le profilage, sans risque de dépendance face aux fichiers bruts. DuckDB pour exécuter le SQL de transformation de bout en bout et confirmer chaque chiffre. dbt pour le modèle de production, en couches staging, intermediate et marts, pour que chaque responsabilité vive au même endroit. Le SQL est standard, donc les mêmes modèles montent sur un entrepôt cloud en changeant l'adaptateur.

Avant toute analyse, je fais confiance aux entrées. Le profilage a fait remonter dix problèmes de qualité dans les exports. Chacun porte un compte et une règle de traitement. Certains sont réparés en staging. D'autres sont conservés avec un drapeau, pour que les totaux se réconcilient et que rien ne disparaisse en silence.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/fr/data-quality.svg" alt="Diagramme à barres horizontales de dix problèmes de qualité de données avec leurs comptes. Le plus grand est l'ARR posé sur des opportunités non gagnées à 2 795 lignes, puis les dates de clôture sur opportunités ouvertes à 2 019, puis les activités datées après la fenêtre à 582. Les barres rouges sont réparées en staging, les bleues sont signalées et conservées." loading="lazy" />
  <figcaption>Dix problèmes trouvés et traités. Le plus gros piège : un ARR posé sur 2 795 opportunités ouvertes ou perdues. Le prendre pour du revenu et chaque chiffre gonfle plusieurs fois.</figcaption>
</figure>

Le modèle prend trois décisions qui façonnent chaque chiffre en aval. La maille est commercial par bureau, car c'est exactement là que les objectifs sont fixés. La métrique est le new business gagné, crédité au trimestre de clôture de l'affaire. Le crédit suit le bureau du compte, pas le bureau d'origine du commercial, donc une affaire sur un compte allemand compte pour l'Allemagne même quand un commercial basé aux États-Unis la signe.

## Ce que les données ont révélé

Agrégez le trimestre au niveau du bureau, le niveau choisi par défaut par la plupart des dashboards, et l'équipe paraît saine. Quatre bureaux sur cinq dépassent l'objectif. Un seul, l'Allemagne, semble légèrement court à 87 pour cent. Rien ici ne dit d'envoyer de l'aide.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/fr/by-office.svg" alt="Diagramme à barres divergentes de l'atteinte trimestrielle par bureau autour d'une ligne d'objectif à 100 pour cent. L'Allemagne se situe juste à gauche de la ligne à 87 pour cent en rouge. La France à 118, le Royaume-Uni à 146, les États-Unis à 374 et Singapour à 396 pour cent sont à droite en bleu." loading="lazy" />
  <figcaption>La vue que montrent la plupart des dashboards. Agrégé au bureau, seule l'Allemagne paraît courte, et de peu.</figcaption>
</figure>

Descendez à la maille où vivent les objectifs, commercial par bureau, et l'image réelle apparaît. Trois personnes ont manqué. Chacune est masquée dans un bureau d'apparence saine. SP009 a réservé zéro face à un objectif de 45 K. SP001 a atteint 64 pour cent. SP005 a atteint 74 pour cent. Les huit autres lignes ont toutes dépassé leur chiffre.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/fr/by-rep.svg" alt="Diagramme à barres divergentes de l'atteinte trimestrielle pour onze lignes d'objectif commercial par bureau autour d'une ligne à 100 pour cent. Trois barres roses tombent à gauche de la ligne : SP009 Allemagne à 0, SP001 France à 64, SP005 Royaume-Uni à 74 pour cent. Huit barres bleues dépassent l'objectif." loading="lazy" />
  <figcaption>La vue à la maille des objectifs. Même trimestre, mêmes données. Trois commerciaux tombent à gauche de la ligne. L'Allemagne ne paraissait proche que parce que SP008, un commercial basé aux États-Unis portant aussi un objectif allemand, l'a dépassé à 217 pour cent et a masqué le zéro de SP009.</figcaption>
</figure>

La vue par bureau et la maille par commercial se contredisent, et c'est là le constat. Les deux tables décrivent le même trimestre. L'une dit qu'une seule équipe a manqué de peu. L'autre dit que trois personnes ont manqué, dans trois bureaux différents, pour trois raisons différentes.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/fr/why-missed.svg" alt="Nuage de points du taux de réussite contre le volume de pipeline pour dix commerciaux, la taille des bulles indiquant les activités par opportunité. SP009 en bas à gauche, pipeline le plus mince et pire taux de réussite. SP001 fort volume et effort mais faible taux de réussite. SP005 meilleur taux de réussite de l'équipe mais trop peu d'affaires new business." loading="lazy" />
  <figcaption>Trois manques, trois causes. SP009 est un effondrement de pipeline. SP001 travaille dur mais convertit mal. SP005 clôt le mieux de l'équipe mais signe trop peu de nouveaux logos.</figcaption>
</figure>

## Le résultat

Reporter à la maille du commercial, c'est ce qui rend un diagnostic utile possible. SP009 en Allemagne a besoin de volume de pipeline et de coaching en phase finale. Le chiffre du bureau est un faux confort, soutenu par un commercial qui en couvre un autre, ce qui relève du risque d'effectif plutôt que d'une équipe saine. SP001 en France a besoin de soutien à la conversion, pas de plus d'activité, car l'effort est déjà le plus élevé de l'équipe. SP005 au Royaume-Uni a besoin d'affaires new business plus grosses ou plus fréquentes, puisque la capacité à clôturer est le meilleur atout de l'équipe.

La vue par bureau aurait envoyé l'aide au mauvais endroit. Elle aurait signalé l'Allemagne comme un problème d'équipe et raté entièrement la France et le Royaume-Uni. Les mêmes données, lues à la bonne maille, transforment une inquiétude floue en trois plans d'action précis. La dernière recommandation est de corriger le CRM à la source, car les formats de date, l'ARR sur les affaires ouvertes et les logs d'activité dupliqués sont les problèmes qui érodent la confiance dans n'importe quel futur dashboard.

## Comment c'est construit

Le modèle tourne comme un projet dbt sur DuckDB, donc les cinq CSV deviennent un entrepôt testé en une commande. Staging reflète chaque source une à une et ne fait que du nettoyage. Intermediate porte la logique métier, en joignant les bureaux et en dérivant les mesures et les drapeaux de qualité. Marts exposent des dimensions et des faits conformes, plus une table dédiée qui répond à la question. Quarante tests de données protègent le résultat : unicité des clés, valeurs acceptées, intégrité référentielle, unicité de la maille sur la table de réponse, et tests singuliers liés à chaque constat de qualité. L'intégrité casse le build. Le bruit connu se contente d'avertir. Une commande, `dbt build`, charge les seeds, construit chaque modèle et lance chaque test.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/lineage.png" alt="Graphe de lignage dbt : cinq fichiers seed traversent les modèles staging puis intermediate, jusqu'aux tables de dimensions, de faits et à la table de réponse, avec les tests d'assertion attachés à chaque couche." loading="lazy" />
  <figcaption>Le modèle de données tel que dbt le voit. Cinq seeds circulent de gauche à droite à travers staging et intermediate jusqu'aux marts, et les tests d'assertion s'accrochent à la couche qu'ils protègent. C'est le diagramme que je garde lisible avant de faire confiance à un chiffre.</figcaption>
</figure>

## Une note sur les données

Les données de cette page sont synthétiques. Elles reproduisent la structure, la forme et les relations d'une mission réelle, sans aucune entreprise, aucun client ni aucune personne réels. La méthode est réelle et les chiffres sont illustratifs. L'objet de la pièce est le jugement de modélisation, pas les chiffres.

## Hypothèses à confirmer

Le new business est la lecture principale de l'objectif. Inclure l'upsell ferait passer SP005 de 74 à 97 pour cent et changerait le fait que SP005 compte ou non comme un manque, donc c'est la définition à confirmer avec le métier. Les objectifs couvrent un seul trimestre, c'est donc un instantané, pas une tendance. Les comptes orphelins et les affaires gagnées à valeur nulle sont signalés plutôt que supprimés, pour que les totaux se réconcilient et que les problèmes restent visibles pour une correction à la source.
