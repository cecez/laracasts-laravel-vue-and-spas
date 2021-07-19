```bash
# Configurando ambiente de desenvolvimento
docker run --rm --interactive --tty --volume $PWD:/app composer require laravel/homestead --dev
docker run -it --rm -v "$PWD":/usr/src/myapp -w /usr/src/myapp php:7.4-cli php vendor/bin/homestead make
# Configurar Homestead.yaml
vagrant up


```
