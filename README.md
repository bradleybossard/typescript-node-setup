# typescript-node-setup

### Links

[How to get auto restart and breakpoint support with Typescript and Node](https://medium.com/aherforth/how-to-get-auto-restart-and-breakpoint-support-with-typescript-and-node-5af589dd8687)

```
mkdir typescript-node-setup
cd typescript-node-setup/
npm init --yes
basename $PWD > README.md
mkdir src && touch src/index.js
tsc --init
npm install --save express
npm install --save-dev typescript @types/express
echo node_modules > .gitignore
npm install --save-dev typescript @types/express
```
