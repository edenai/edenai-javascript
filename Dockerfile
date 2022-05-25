FROM node:18-bullseye

WORKDIR /edenai-javascript
COPY . .

# Install Swagger Codegen
RUN apt update
RUN apt install -y default-jre
RUN wget https://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.27/swagger-codegen-cli-2.4.27.jar -O ../swagger-codegen-cli.jar

# Auto Generate new sdk
# RUN java -jar ../swagger-codegen-cli.jar generate  -i swagger.json -c config.json -l javascript -o .

# Copy your swagger.json here
# write an edenai-javascript/.env file

# Install dependencies and test
RUN npm install
RUN npm install --global mocha
# RUN npm test
