# typescript-node-setup

### Links

[How to get auto restart and breakpoint support with Typescript and Node](https://medium.com/aherforth/how-to-get-auto-restart-and-breakpoint-support-with-typescript-and-node-5af589dd8687)


### Setup steps for new repo

#### npm
```
mkdir typescript-node-setup
cd typescript-node-setup/
git init
basename $PWD > README.md
git add README.md
git commit -m "Initial README"
hub create
git push --set-upstream origin master
npm init --yes
mkdir src && touch src/index.ts
tsc --init
npm install --save express
npm install --save-dev typescript @types/express
echo node_modules > .gitignore
npm install --save-dev typescript @types/express
git add -A
git commit -m "Adding dependencies"
```

```
# At this point, we need to update src/index.ts and tsconfig.json to match those in this repo.
# Secondly, update package.json and add the following script

  "scripts": {
    "start": "tsc && node build/index.js"
  }

# Add we can run our Typescript server with
  npm start
```
