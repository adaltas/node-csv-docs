FROM jumanjiman/caddy
MAINTAINER David Worms <david@adaltas.com>

USER root
RUN apk update && apk add nodejs && rm -rf /var/cache/apk/*
RUN git clone https://github.com/wdavidw/node-csv-docs.git /src && chown -R caddy /src
WORKDIR /src
USER caddy
