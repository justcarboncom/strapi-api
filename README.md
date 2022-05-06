## ⚙️ Deployment

Full details on the AWS deploy are found [here](https://www.notion.so/jordaniza/Strapi-AWS-Setup-1caebcd1610943be9cd625ea4c1104e2).

The `env.example` displays the various config settings required to build the application locally. For AWS:
- Database refers to the Amazon RDS service you want to connect to (please register an account to connect to the DB.
- AWS Key/Bucket refer to the S3 bucket to read and write images.
- JWT secrets are local to the application and are used for internal validation, set them however you want but keep them secure. 

Run the App in develop mode to make changes to the Content-Types (amending the data structure), then commit changes locally. The app will reload and apply changes to the database. For this reason, be careful to pull the latest development build if connecting to remote instances.

A webhook on the Amazon EC2 instance will handle automatic deploys to dev and prod, when merging to `dev` and `main` respectively. As of time of writing, the instances do not have notifications enabled so if changes are not being propagated, you will need to SSH into the EC2 instance and check the logs.

### Accessing the Instance

Follow the [Strapi AWS Deploy guide](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/amazon-aws.html#configure-ec2-as-a-node-js-server) for details on how to connect to the EC2 instance, for example:

```sh
ssh -i ~/.ssh/ec2-strapi-dev.pem ubuntu@3.95.227.178
```

From there run `pm2 status` to check if the applications are running and `sudo systemctl status webhook` to check if there are recent issues with the webhook.

The status will generally show something like: 

```sh
● webhook.service - Github webhook
     Loaded: loaded (/etc/systemd/system/webhook.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2022-05-01 02:52:42 UTC; 8h ago
   Main PID: 6910 (node)
      Tasks: 7 (limit: 2353)
     Memory: 6.0M
     CGroup: /system.slice/webhook.service
             └─6910 /usr/bin/node /home/ubuntu/NodeWebHooks/webhook.js

May 01 02:52:42 ip-172-31-84-49 systemd[1]: webhook.service: Scheduled restart job, restart counter is at 7.
May 01 02:52:42 ip-172-31-84-49 systemd[1]: Stopped Github webhook.
May 01 02:52:42 ip-172-31-84-49 systemd[1]: Started Github webhook.
```

Unless there is a recent pull, in which case the github status will be shown. The `webhook.js` file is included in this repo under `ec2-webhook.js`, for you to test locally. Run the webhook using node, then use an API testing tool of choice, like Postman, to check everything is working okay. You can get sample request payloads from the github webhook under `settings` in this repo.

When debugging, ensure the webhook fires by SSHing into the instance, and checking the repo:
```sh
cd strapi-api
ls src/api
# new files should appear
git branch
# should be main or dev depending
```

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
