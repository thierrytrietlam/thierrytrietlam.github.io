---
key: "mobile-game-build-quality"
lang: "fr"
title: "Faut-il déployer la nouvelle version ?"
summary: "Un studio de jeu mobile faisait tourner deux versions en parallèle et voulait savoir si la nouvelle pouvait partir en déploiement complet. J'ai transformé deux exports d'événements bruts en un verdict reproductible : suspendre le déploiement, un niveau est cassé, et en voici la preuve."
question: "La version 11.0 peut-elle partir en déploiement complet, et sinon, qu'est-ce qui a cassé exactement ?"
dataset: "Données synthétiques qui reproduisent un cas réel d'analytics mobile. Deux exports d'événements : activité quotidienne et progression par niveau. 90 jours d'installations Android, dix pays, environ 615 000 lignes."
goal: "Donner une base de preuve à la décision de déploiement : lancer, suspendre ou corriger, avec la chose exacte à corriger."
outcome: "Déploiement suspendu. La version 11.0 garde moins de joueurs chaque jour de la première semaine, et toute la perte remonte au niveau 7, dont la complétion s'effondre de 85 à 40 pour cent."
stack: ["Python", "DuckDB", "SQL", "matplotlib"]
cover: "/img/projects/mobile-game-build-quality/fr/cover.svg"
date: "2026-07"
featured: true
synthetic: true
order: 90
links: []
---

Un studio de jeu mobile avait deux versions de son jeu de puzzle en production en même temps. La 10.2 était la version éprouvée. La 11.0 était la nouvelle, livrée à une partie des joueurs et en route vers le déploiement complet. Le publishing voulait savoir si la nouvelle version garde ses joueurs. Le game design voulait savoir si quelque chose de précis avait cassé. Voici cette analyse, de deux exports d'événements bruts à une décision appuyée par un chiffre à chaque étape.

## L'approche

J'ai traité les deux exports comme n'importe quelle table d'entrepôt inconnue : profiler d'abord, calculer ensuite. Les deux fichiers partagent la même maille (date d'installation, version, pays, réseau, package, jour de cohorte), et chaque affirmation structurelle est vérifiée par une assertion avant le moindre KPI. L'identité commencés égale terminés plus échoués tient sur les 530 411 lignes de progression. Aucun doublon, aucune valeur négative, aucune cellule orpheline entre les deux fichiers, des dates d'installation contiguës, et un jour d'extraction complet. La donnée ligne à ligne est propre. Les vrais pièges sont structurels : une étiquette qui ne peut pas être vraie, et un dénominateur qui ment en silence.

Le premier piège est une étiquette de version. Un troisième tag, 11.0.1, porte des installations datées deux mois avant l'existence de sa version parente, et un patch ne peut pas précéder son parent. Cela représente 767 joueurs au jour 0, 0,3 pour cent du volume, et son comportement ressemble à celui de la 11.0. L'intégrer serait un pari, la supprimer en silence cacherait un défaut de pipeline, donc elle est mise en quarantaine hors de la lecture principale et signalée comme un constat à part pour le data engineering.

Le second piège est la censure à droite. Prenez toutes les cohortes ensemble et la nouvelle version paraît catastrophique : la rétention au jour 7 affiche 6,8 pour cent. Mais les cohortes installées moins de sept jours avant l'extraction n'ont pas encore de ligne au jour 7 et restent pourtant au dénominateur du jour 0. La lecture honnête compare les versions sur la seule fenêtre où les deux existent et où chaque cohorte est assez âgée pour être mesurée, et là, la rétention au jour 7 vaut 12,9 pour cent. La lecture naïve double presque le dégât apparent. Une barrière de maturité jour par jour sur les 90 jours d'historique aboutit au même verdict, donc la fenêtre ne fabrique pas le résultat.

<figure>
  <img src="/img/projects/mobile-game-build-quality/fr/chart3_censoring.png" width="1140" height="690" alt="Diagramme à barres groupées comparant les lectures naïve et corrigée de la rétention de la version 11.0 aux jours 1, 3 et 7, avec la référence 10.2 marquée par une ligne bleue à chaque jour. La barre naïve du jour 7 affiche 6,8 pour cent, la barre corrigée 12,9, toutes deux sous la référence 10.2 à 19,6." loading="lazy" />
  <figcaption>Le graphique de méthode. Les cohortes de moins de N jours n'ont pas encore de ligne au jour N mais gonflent le dénominateur du jour 0. Corriger la censure fait la différence entre un écart réel et un effondrement fictif.</figcaption>
</figure>

Un dernier contrôle protège la comparaison elle-même : la répartition du déploiement. Le mix du jour 0 sur dix pays, sept réseaux d'acquisition et le package du store diffère d'au plus 0,72 point entre les versions. La répartition est propre, donc la comparaison mondiale agrégée est équitable. Vérifié, pas supposé.

## Ce que les données ont révélé

Sur la fenêtre appariée, la version 11.0 garde moins de joueurs à chaque point de la première semaine, et l'écart grandit avec l'âge de la cohorte : 10 pour cent de moins au jour 1, 24 au jour 3, 34 au jour 7. Des tests z de deux proportions entre 9,1 et 15,0 écartent le bruit d'échantillonnage, et l'écart du jour 1 est négatif sur les douze dates d'installation partagées. Les survivants jouent aussi moins : 31 minutes par joueur actif et par jour contre 44 sur l'ancienne version.

<figure>
  <img src="/img/projects/mobile-game-build-quality/fr/chart1_retention.png" width="1290" height="780" alt="Courbe de rétention du jour 0 au jour 7 pour les versions 10.2 et 11.0 sur la fenêtre d'installation appariée. La ligne 11.0 se situe sous la 10.2 chaque jour et la distance grandit : 50,1 contre 55,4 au jour 1, 24,2 contre 31,9 au jour 3, 12,9 contre 19,6 au jour 7." loading="lazy" />
  <figcaption>La réponse rétention. Un écart structurel qui grandit avec l'âge, pas un accident de lancement. Tailles de cohortes : 22 334 joueurs en 10.2, 10 595 en 11.0.</figcaption>
</figure>

Un écart de rétention qui grandit dit que les joueurs partent, pas pourquoi. Le funnel de niveaux répond au pourquoi. Jugées sur la complétion par tentative, les deux versions se suivent de près sur les niveaux 1 à 6. Puis le niveau 7 tombe de la falaise : la complétion s'effondre de 85 à 40 pour cent, les tentatives par joueur bondissent de 70 pour cent, de 1,14 à 1,94, et le temps par tentative reste stable autour de 160 secondes. Les joueurs rejouent un niveau qui se déroule normalement et échoue, ce qui pointe vers un changement de difficulté ou de condition de victoire, pas vers un crash. Un crash tronquerait les tentatives, et un contrôle des temps de jeu nuls confirme que personne ne sort au lancement.

<figure>
  <img src="/img/projects/mobile-game-build-quality/fr/chart2_level_funnel.png" width="1380" height="1080" alt="Graphique à deux panneaux par niveau pour les versions 10.2 et 11.0. Le panneau du haut montre le taux de complétion par niveau avec un effondrement au niveau 7 de 85 à 40 pour cent, surligné en rouge. Le panneau du bas montre les tentatives par joueur qui bondissent au niveau 7 de 1,14 à 1,94." loading="lazy" />
  <figcaption>La cause. Un seul niveau, surligné, où la complétion s'effondre et les réessais doublent, quand chaque niveau voisin bouge de quelques points au plus.</figcaption>
</figure>

La cassure est dans la version, pas dans un marché : la complétion du niveau 7 tombe autour de 40 pour cent dans les dix pays, dès la toute première cohorte 11.0, et reste stable. Au delà de la falaise, il reste une dérive plus douce, environ 8 points de complétion sur les niveaux 8 à 24, et les niveaux 25 à 30 portent trop peu de joueurs pour la moindre conclusion, donc leurs écarts sont rapportés comme du bruit plutôt que comme des constats. Une relance de la lecture rétention sur les seuls États-Unis donne la même forme que le monde entier, ce qui referme la question régionale.

## Le résultat

Suspendre le déploiement. C'était la recommandation, et elle coûte peu à mettre en œuvre, parce que l'analyse nomme le correctif : revenir en arrière ou rééquilibrer le niveau 7, confirmer que la complétion revient près de 85 pour cent sur une cohorte fraîche, puis reprendre la montée en charge une fois que les jours 1 et 3 se rétablissent. L'alternative, livrer en l'état, coûte un tiers de la rétention au jour 7 et 13 minutes de jeu quotidien par joueur actif, c'est à dire l'économie d'un titre free to play qui s'érode à l'endroit exact où les habitudes se forment.

Ce sont les choix de métriques qui rendent le constat visible. La rétention prend les joueurs actifs du jour 0 comme dénominateur et une fenêtre appariée et mature, pour que la censure ne puisse pas fabriquer un effondrement. La santé des niveaux se lit en complétion par tentative et en tentatives par joueur, deux ratios, pour que les réessais massifs d'un niveau dur ne puissent pas cacher la fuite derrière un grand chiffre de passage. Et l'étiquette impossible 11.0.1 repart vers le data engineering comme un constat à part entière, parce qu'une version mal taguée dans le pipeline de tracking empoisonnera aussi la prochaine expérience.

## Comment c'est construit

Un script Python exécute tout le pipeline sur DuckDB : les contrôles d'intégrité, la barrière de qualité des données, les lectures de rétention, le contrôle de mix, le funnel de niveaux, les trois graphiques, et un fichier de métriques avec chaque chiffre produit par l'analyse. Les quatre requêtes SQL tournent aussi seules depuis la CLI DuckDB, chacune commentée avec la raison de chaque filtre, pour que la logique se déroule ligne à ligne. La fenêtre d'analyse est dérivée des données, jamais codée en dur, pour qu'une relance nocturne reste honnête au lieu de simuler un effondrement de rétention à mesure que les cohortes fraîches arrivent. Aucune clé d'API et aucun réseau : deux CSV en entrée, une commande, et chaque figure de cette page se reconstruit.

## Une note sur les données

Les données de cette page sont synthétiques. Elles reproduisent la structure, la forme et les pièges d'une mission réelle d'analytics mobile, sans aucun jeu, aucune entreprise ni aucun joueur réels. La méthode est réelle et les chiffres sont illustratifs. L'objet de la pièce est le jugement : quelles lectures croire, lesquelles mettre en quarantaine, et quoi faire ensuite.

## Hypothèses à confirmer

La rétention est mesurée jusqu'au jour 7, c'est donc un verdict de première semaine, et une lecture au jour 30 demanderait une fenêtre plus longue. Le brief couvre l'engagement et la progression, la monétisation reste donc hors périmètre, et une vraie décision de déploiement poserait le revenu par joueur à côté de ces courbes. Le diagnostic du niveau 7 est comportemental : les données disent difficulté ou condition de victoire, et la confirmation appartient à l'équipe de design. Enfin, le mauvais tag 11.0.1 mérite une analyse de cause racine dans le pipeline de tracking avant que la prochaine expérience n'en hérite.
