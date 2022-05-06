[Unit]
Description=Github webhook
After=network.target

[Service]
Environment=/home/ubuntu/.npm-global/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
Type=simple
User=ubuntu
ExecStart=/usr/bin/node /home/ubuntu/NodeWebHooks/webhook.js
Restart=on-failure

[Install]
WantedBy=multi-user.target