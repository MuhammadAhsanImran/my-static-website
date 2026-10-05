FROM php:8.3-apache

WORKDIR /var/www/html

COPY . /var/www/html/

RUN docker-php-ext-install pdo pdo_mysql

RUN a2dismod mpm_event mpm_worker mpm_prefork
RUN a2enmod mpm_prefork

EXPOSE 80

CMD ["apache2-foreground"]
