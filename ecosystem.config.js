module.exports = {
  apps: [
    {
      name: 'mhdrizkicandra - Orchestrator',
      script: 'cd orchestrator && npm install && nodemon app.js'
    },
    {
      name: 'mhdrizkicandra - Service Users',
      script: 'cd services/users && npm install && nodemon app.js',
      env: {
        NODE_ENV: "development",
        JWT_SECRET:"secret",
      },
      env_production: {
        NODE_ENV: "production",
        JWT_SECRET:"secret",
      }
    },
    {
      name: "mhdrizkicandra - Generate Token",
      script: "cd services/generate-token && npm install && nodemon app.js",
      env: {
        NODE_ENV: "development",
        JWT_SECRET:"secret",
      },
      env_production: {
        NODE_ENV: "production",
        JWT_SECRET:"secret",
      }
    }
  ],
};