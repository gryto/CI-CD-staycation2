#!/bin/bash
cd /home/ec2-user/server/src
npm run build
npm start
pm2 start npm --name "staycation2" -- start
pm2 startup
pm2 save
pm2 restart all