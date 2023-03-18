# Sentio

Sentio (sentio.xyz) is a tool to generate dashboards based on on-chain metrics and events.

If you are a Dapp developer, you may want to create a dashboard for your project, and publish it for the community to see.

In this example, we are setting up a simple dashboard to monitor the activity of Cronos Safe (cronos-safe.org).

# Login and create project

```
npx -y -p @sentio/cli sentio login
npx -y -p @sentio/cli sentio create sentio-project
cd sentio-project
```

# Configure project

Save contract ABI in abis/eth.

Then generate all the types under src/types. Note: Only works with yarn version 1.x and node version 16.x. 

```
yarn install
yarn sentio gen
```

Update src/processor.ts to bind metrics as explained in the SDK reference: https://docs.sentio.xyz/developer-guides/sdk-guide/processor-basic

Then upload the processor:

```
yarn sentio upload
```

And visit https://app.sentio.xyz/projects to visualize the project.

