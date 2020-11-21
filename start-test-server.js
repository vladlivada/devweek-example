const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const npm = require('npm');
const PORT = process.env.npm_config_port ? process.env.npm_config_port : 3001;
const baseDirectory = process.env.npm_config_baseDirectory ? process.env.npm_config_baseDirectory : 'dist'

app.use(express.static(path.join(__dirname, `${baseDirectory}/devweek-example`)));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, `${baseDirectory}/devweek-example/index.html`));
});
const server = http.createServer(app);
server.listen(PORT, () => {
	console.log(`Test server is running on port ${PORT}`);
	npm.load(
		() => {
			npm.run('cypress-headless', ...['--config', `baseUrl=http://localhost:${PORT}`], (res) => {
				if (res != null && res.errno !== 0) {
					process.exit(res.errno);
				} else {
					process.exit();
				}
			})
		});
});
