# Hello Actions

Reference repo for writing a GitHub Action.


### Running locally

Uses the [local-action](https://github.com/github/local-action) package to
support running the action locally.

```shell
cp .env.example .env
npm run local-action
```

Set desired `inputs` into the action by setting `INPUT_` environment variables in the `.env`.

### TODO

- Set up with `act` instead of `local-actions` 
- Add TypeScript
- Add Jest
- Set node version on pipeline explicitly
- Add CI for action
- Add eslint