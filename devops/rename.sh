#!/bin/bash
set -e;

'''
Adding new services, controllers and routes can be done via strapi, but this
causes problems with overwriting and deleting data. While rebuilding, we needed
a more hands-dirty approach to replicating the folder structure of a content block.

This script takes a single argument and clones the `about-page` folder. It then finds and replaces
file and folder names where it can, leaving the remaining edits to be made in the content-types folder.

Pass the singular of the block you want to create.
'''

name=$1;
plural="$1s"

rm -rf ./src/api/$name;

# copy the about-page directory

cp -r ./src/api/about-page ./src/api/$name;

# list all files with the name and rename
find ./src/api/$name -iname *.js -exec rename about-page.js $name.js '{}' \;
mv ./src/api/$name/content-types/about-page/ ./src/api/$name/content-types/$name;


# find and replace
find ./src/api/$name -type f -exec sed -i "s/about-page/$name/g" {} \;
find ./src/api/$name -type f -exec sed -i "s/about-pages/$plural/g" {} \;
find ./src/api/$name -type f -exec sed -i "s/about_pages/$plural/g" {} \;
