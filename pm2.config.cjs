module.exports = {
  apps: [
    {
      name: "gjs:@gjsify/generated-docs",
      script: "npm run start:gjs",
      instances: 1,
      env: {}
    },
    {
      name: "node-gtk:@gjsify/generated-docs",
      script: "npm run start:node-gtk",
      instances: 1,
      env: {}
    },
    {
      name: "try-gjs:@gjsify/generated-docs",
      script: "npm run start:try-gjs",
      instances: 1,
      env: {}
    },
    {
      name: "try-node-gtk:@gjsify/generated-docs",
      script: "npm run start:try-node-gtk",
      instances: 1,
      env: {}
    }
  ]
};
