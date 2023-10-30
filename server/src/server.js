const http = require('http');
const app = require('./app');
const {LoadPlanetsData} = require('./models/planets.model'  );

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await LoadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();
