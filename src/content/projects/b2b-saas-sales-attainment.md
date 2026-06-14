---
key: "b2b-saas-sales-attainment"
lang: "en"
title: "Which salespeople missed their target?"
summary: "A B2B SaaS sales org beat plan overall, yet three reps quietly missed their number. I rebuilt five raw CRM exports into a tested warehouse and found them by reporting at the grain where targets actually live."
question: "Why did some salespeople miss their quarterly target when the company beat plan overall?"
dataset: "Synthetic data that mirrors a real engagement. Five CRM exports: opportunities, activities, accounts, salespeople, and targets. Fifteen months, around 3,300 opportunities and 8,200 activities."
goal: "Point coaching and hiring at the exact people who need it, not at the offices that merely look busy."
outcome: "Found three missed targets hidden inside healthy looking offices, each with a different root cause and a different fix."
stack: ["dbt", "DuckDB", "SQL", "Python"]
cover: "/img/projects/b2b-saas-sales-attainment/cover.svg"
date: "2026-05"
featured: true
synthetic: true
order: 100
links: []
---

A B2B SaaS company closed a strong quarter. New business landed at 202 percent of the combined target. The Head of Sales still had a nagging question: a few people did not hit their number, and he wanted to know who, and why. The honest answer depended entirely on one modeling choice. This is that analysis, from five raw CSV exports to a tested, reproducible warehouse.

## The approach

I treated the case as a production pipeline, not a throwaway query. Eight steps. Explore every file and profile it before trusting one number. Model the target shape as a layered, dbt style warehouse and fix the grain. Diagram the lineage so the model stays legible. Verify the joins and the keys. Catalog every data quality issue with a count and a rule. Read the distributions that drive the result. Produce the answer the question needs. Ship it as a pipeline that anyone can rerun.

The tooling stays deliberately light. Python standard library for profiling, with zero dependency risk against raw files. DuckDB to run the transformation SQL end to end and confirm every figure. dbt for the production model, layered staging to intermediate to marts, so each concern lives in one place. The SQL is standard throughout.

Before any analysis, I trust the inputs. Profiling surfaced ten data quality issues across the exports. Each one carries a count and a handling rule. Some get repaired in staging. Some are kept with a flag, so totals still reconcile and nothing is silently dropped.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/data-quality.svg" alt="Horizontal bar chart of ten data quality issues with counts. The largest is ARR filled on non won opportunities at 2,795 rows, then closed dates on open opportunities at 2,019, then activities dated after the window at 582. Red bars are repaired in staging, blue bars are flagged and kept." loading="lazy" />
  <figcaption>Ten issues found and handled. The biggest trap is ARR sitting on 2,795 open and lost opportunities. Treat it as revenue and every figure inflates several fold.</figcaption>
</figure>

The model makes three decisions that shape every number downstream. The grain is salesperson by office, because that is exactly where the targets are set. The metric is new business won, credited in the quarter the deal closes. Credit follows the account office, not the rep home office, so a deal on a German account counts toward Germany even when a US based rep closes it.

## What the data showed

Roll the quarter up to office, the level most dashboards default to, and the team looks fine. Four of five offices beat target. Only one, Germany, reads slightly short at 87 percent. Nothing here says send help.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/by-office.svg" alt="Diverging bar chart of quarterly attainment by office against a 100 percent target line. Germany sits just left of the line at 87 percent in red. France at 118 percent, UK at 146 percent, US at 374 percent, and Singapore at 396 percent all sit right of the line in blue." loading="lazy" />
  <figcaption>The view most dashboards show. Roll up to office and only Germany looks short, and only by a little.</figcaption>
</figure>

Drop to the grain where the targets live, salesperson by office, and the real picture appears. Three people missed. Each one is masked inside an office that looks healthy. SP009 booked zero against a 45K target. SP001 reached 64 percent. SP005 reached 74 percent. The other eight rows all cleared their number.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/by-rep.svg" alt="Diverging bar chart of quarterly attainment for eleven salesperson by office target rows against a 100 percent line. Three rose bars fall left of the line: SP009 Germany at 0 percent, SP001 France at 64 percent, SP005 UK at 74 percent. Eight blue bars beat target, several beyond 200 percent." loading="lazy" />
  <figcaption>The view at the grain targets live. Same quarter, same data. Three reps fall left of the line. Germany only looked close because SP008, a US based rep holding a German sub target, beat it at 217 percent and masked SP009's zero.</figcaption>
</figure>

The office rollup and the rep grain disagree, and that disagreement is the finding. The two tables describe the same quarter. One says a single team narrowly missed. The other says three people missed, in three different offices, for three different reasons.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/why-missed.svg" alt="Scatter plot of win rate against pipeline volume for ten reps, bubble size showing activities per opportunity. SP009 sits bottom left with the thinnest pipeline and worst win rate. SP001 has high pipeline and effort but a low win rate. SP005 has the best win rate on the team but moderate volume." loading="lazy" />
  <figcaption>Three misses, three causes. SP009 is a pipeline collapse. SP001 works hard but converts poorly. SP005 closes best on the team but lands too few net new logos.</figcaption>
</figure>

## The result

Reporting at the salesperson grain is what makes a useful prescription possible. SP009 in Germany needs pipeline volume and late stage coaching. The office number is false comfort, propped up by one rep covering for another, which is a staffing risk rather than a healthy team. SP001 in France needs conversion support, not more activity, because the effort is already the highest on the team. SP005 in the UK needs larger or more frequent new business deals, since the closing skill is the team's best asset.

The office view would have sent help to the wrong place. It would have flagged Germany as a team problem and missed France and the UK entirely. The same data, read at the right grain, turns a vague worry into three specific, actionable plans. The last recommendation is to fix the CRM at source, since the date formats, the ARR on open deals, and the duplicate activity logs are the issues that erode trust in any future dashboard.

## How it is built

The model runs as a dbt project on DuckDB, so the five CSVs become a tested warehouse with one command. Staging mirrors each source one to one and does cleaning only. Intermediate holds the business logic, joining offices and deriving the measures and quality flags. Marts expose conformed dimensions and facts, plus one purpose built table that answers the question. Forty data tests protect the result: key uniqueness, accepted values, referential integrity, grain uniqueness on the answer table, and singular tests tied to each data quality finding. Integrity breaks the build. Known data noise warns. One command, `dbt build`, loads the seeds, builds every model, and runs every test.

<figure>
  <img src="/img/projects/b2b-saas-sales-attainment/lineage.png" alt="dbt lineage graph: five seed files flow through staging models into intermediate models, then into dimension and fact tables and one answer table, with assertion tests attached at every layer." loading="lazy" />
  <figcaption>The data model as dbt sees it. Five seeds flow left to right through staging and intermediate into marts, and the assertion tests hang off the layer they protect. This is the diagram I keep legible before trusting any number.</figcaption>
</figure>

## A note on the data

The data on this page is synthetic. It mirrors the structure, the shape, and the relationships of a real engagement, with no real company, customer, or person present. The method is real and the numbers are illustrative. The point of the piece is the modeling judgment, not the figures.

## Assumptions worth confirming

New business is the primary reading of the target. Including upsell would lift SP005 from 74 percent to 97 percent and change whether SP005 even counts as a miss, so that definition is the one to confirm with the business. Targets cover a single quarter, so this is a snapshot, not a trend. Orphan accounts and zero value wins are flagged rather than dropped, so totals reconcile and the problems stay visible for a source fix.
