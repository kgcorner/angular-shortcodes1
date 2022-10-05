# Wordpress like Shortcodes in angular

This project demonstrate, how you can implement wordpress liek shortcode in angular web app.

For this purpose I have used Angular element to create web element which can be embedded inside any html. 

# UseCase

So Consider, you are created an excellent blog post from your headless CMS (like strapi) and you want to embed a list of movies releasing in current month. You want that list to be dynamic so that it shows movies which is releasing in current month and it should continue to do so in next month or for all coming months. It's not a very good way to update the post every month from your CMS, You can use an API to fetch a movie list and show that using a web component using ***angular element*** 

This project does the same. For example if you want to show a movie list just use a shortcode [[sc class="all-movies"]][[/sc]]

here ***All-movies*** will instruct angular app to convert this into an angular component while rendering. And as result, you will see list of movies instead of plain HTML text.
