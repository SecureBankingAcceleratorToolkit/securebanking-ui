## Running app via CLI
```shell
cd securebanking-auth-ui
```
```shell
npm ci
```
```shell
npm run build.auth.themes
```
```shell
npm run serve.auth
```
## Running docker image manually

**auth-ui** is a build of the Auth app with only the Forgerock theme.

It is convenient to start the app in no time.

- `<PORT>`: **REQUIRED** Port to use on your machine
- `<DOMAIN>`: **REQUIRED** Domain to use. Will replace `DOMAIN` in the frontend [config](./forgerock-openbanking-ui/projects/auth/docker/deployment-settings.js) e.g: `https://analytics.DOMAIN`
- `<TEMPLATE_NAME>`: Default value: `forgerock`.

```bash
docker run -it -p <PORT>:80 -e TEMPLATE=<TEMPLATE_NAME> -e DOMAIN=<DOMAIN> securebanking/securebanking-auth-ui
```

## Run Docker compose
The UI apps depend on services:
- Reference implementation services
    - AUTHENTICATION_URL: "https://am.DOMAIN"
    - DIRECTORY_BACKEND_URL: "https://service.directory.DOMAIN/directory-services"
    
> Run first the reference implementation spring boot apps

Working Directory: ./securebanking-auth-ui
```bash
docker-compose up
```
```bash
docker-compose -f [docker-compose-file] up
```
## Building the app with your theme

Create a new theme: <https://github.com/OpenBankingToolkit/openbanking-toolkit/wiki/Create-a-new-Theme>

Then build the docker image

## Building your own docker image
```bash
# Build
docker build -t <IMAGE_NAME> -f projects/auth/docker/Dockerfile .
```
