# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev
```

To run from container, local no CICD:

```sh
yarn install
yarn tsc
yarn build
docker image build . -f packages/backend/Dockerfile --tag backstage
docker run -d -p 7007:7007 backstage
```
