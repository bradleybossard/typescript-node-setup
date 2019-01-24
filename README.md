# typescript-node-setup

### Links

[How to get auto restart and breakpoint support with Typescript and Node](https://medium.com/aherforth/how-to-get-auto-restart-and-breakpoint-support-with-typescript-and-node-5af589dd8687)

[ts-node-dev - npm](https://www.npmjs.com/package/ts-node-dev)

`ts-node-dev` uses the runtime flags from these tools

[node-dev - npm](https://www.npmjs.com/package/node-dev)

[ts-node - npm](https://www.npmjs.com/package/ts-node)


### Setup steps for new repo

#### git and npm setup
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
echo node_modules > .gitignore
npm install --save-dev typescript @types/express ts-node-dev
git add -A
git commit -m "Adding dependencies"
```

#### npm scripts and code template

At this point, we need to update src/index.ts and tsconfig.json to match
those in this repo. Secondly, update package.json and add the following script
```
  "scripts": {
    "start": "tsc && node build/index.js",
    "start:dev": "ts-node-dev --respawn --transpileOnly src/index.ts"
  }
```

Add we can run our Typescript server with
```
  npm start
```

#### testing setup
```
npm install --save-dev ts-jest jest @types/jest
```


Add the following scripts to the package.json
```
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  },
```

and copy the files src/index.test.js and jest.config.js from this repo
