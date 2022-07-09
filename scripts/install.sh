# add nodejs to yum
curl -sL https://rpm.nodesource.com/setup_lts.x | bash 
. ~/.nvm/nvm.sh
yum install nodejs -y #default-jre ImageMagick

#create our working directory if it doesnt exist
DIR="/home/ec2-user/staycation2"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi
