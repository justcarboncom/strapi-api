/**
 * Run as a standalone node process in the EC2 instance using Systemd & Pm2
 * to enable automatic CI/CD through Github
 */

var secret = 'your_secret_key'; // Your secret key from Settings in GitHub
var repo = '~/path-to-strapi-root-folder/'; // path to the root of your Strapi project on server

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

const PM2_CMD = 'cd ~ && pm2 startOrRestart ecosystem.config.js';
const TARGET_BRANCH = 'dev'; // branch to trigger an update

http
  .createServer(function(req, res) {
    req.on('data', function(chunk) {
      let body = ''
      let sig =
        'sha1=' +
        crypto
          .createHmac('sha1', secret)
          .update(chunk.toString())
          .digest('hex');

      body += chunk.toString();
      const ref = JSON.parse(body).ref

      if (req.headers['x-hub-signature'] === sig && ref === `refs/heads/${TARGET_BRANCH}`) {
        exec(`cd ${repo} && git pull && ${PM2_CMD}`, (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        });
      }
    });

    res.end();
  })
  .listen(8080);