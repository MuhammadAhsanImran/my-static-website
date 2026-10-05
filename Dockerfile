FROM php:8.3-apache

WORKDIR /var/www/html

COPY . /var/www/html/

RUN docker-php-ext-install pdo pdo_mysql

RUN rm -f /etc/apache2/mods-enabled/mpm_*.load /etc/apache2/mods-enabled/mpm_*.conf
RUN a2enmod mpm_prefork

EXPOSE 80

CMD ["apache2-foreground"]
