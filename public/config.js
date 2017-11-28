/**
 * Created by acer on 22.05.2015.
 */
requirejs.config({
    baseUrl: "./",
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        mustache: 'bower_components/mustache/mustache',

        average_tmpl: 'templates/average',
        employee_tmpl: 'templates/employee',

        controllCategory: 'modules/category_module',
        controllAdditionalTime: 'modules/additional_time_module',
        controllTax: 'modules/tax_module'
    }
});

requirejs(['app/main']);