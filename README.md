# Node.js CSV Documentation

This is the source code for the official website of the CSV parser for Node.js
hosted at [csv.adaltas.com]. Please submit an issue if you see any typo or
possible improvement for the documentation.

## Deploy Instructions

```bash
git clone https://github.com/wdavidw/node-csv-docs.git csv-docs
cd csv-docs
cat /root/.bowerrc
npm install
# Generate the documentation
node_modules/docpad/bin/docpad generate --env static
# Build the container
docker build -t csv-docs .
# Start nginx unless already running
docker run -d -p 91.121.35.92:80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
# Serve the CSV documentation
docker run -e VIRTUAL_HOST=csv.adaltas.com -d -p 80 csv-docs
```
