_Read this in other languages: [Português](README.pt.md), [Español](README.es.md)._

# Hero Classifier

In this simple project, we will check the level of your hero.

## Quick Start

To run this project, follow these simple steps:

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone the repository or download the code.
3. Open a terminal and navigate to the root folder of the project.
4. Run the command below to start the project:

```bash
   node index.js
```

## Objective

Based on the reported power (XP), we will show your hero's level.

- If XP is less than 1,000 = Iron
- If XP is between 1,001 and 2,000 = Bronze
- If XP is between 2,001 and 5,000 = Silver
- If XP is between 5,001 and 7,000 = Gold
- If XP is between 7,001 and 8,000 = Platinum
- If XP is between 8,001 and 9,000 = Ascendant
- If XP is between 9,001 and 10,000 = Immortal
- If XP is greater or equal to 10,001 = Radiant

## Output

In the end, a message should be displayed:

```
"The hero named **{name}** is at the level of **{level}**"
```
