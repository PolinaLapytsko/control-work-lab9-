/**
 * Created by acer on 23.05.2015.
 */
define(function () {
    return {
        getTemplate: function () {
            return '<tr><td>{{employee.name}}</td><td>{{employee.department}}</td><td>{{employee.position}}</td><td>{{employee.tariff}}</td><td>{{employee.additional_time}}</td><td>{{employee.tax}}</td><td>{{#employee.category}}Higher{{/employee.category}}{{^employee.category}}Average{{/employee.category}}</td><td>{{employee.salary}}$</td></tr>';
        }
    };
});