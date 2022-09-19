const express = require ('express');
const apiRoutes = require('./routers/app.routers')


const PORT = process.execArgv.PORT || 8080;
const app = express();

app.use('/api', apiRoutes);

const connectedServer = app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.error('Error: ', error);
})