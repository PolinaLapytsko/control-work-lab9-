/**
 * Created by acer on 22.05.2015.
 */
define(function (require) {
    var $ = require('jquery'),
        Mustache = require('mustache'),
        controllCategory = require('controllCategory'),
        controllAdditionalTime = require('controllAdditionalTime'),
        controllTax = require('controllTax');
        average_tmpl = require('average_tmpl'),
        employee_tmpl = require('employee_tmpl');

    var employeesData = 'json/employeesData.json',
        employees;

    $.getJSON(employeesData, function (data) {
        employees = data['employees'];
        var employee;
        for (var counter in employees) {
            employee = employees[counter];
            employee.salary = 0;
            employee.tariff = 0;
            employee.category = false;
            employee.additional_time = 0;
            employee.tax = 0;
            $('#selectEmployee').append('<option value=' + employee.name + '>' + employee.name + '</option>');
        }
    }).fail(function() {
        $('#fail').removeClass("disp");
    });

    $(document).ready(function() {
        $('form#employeeForm').submit(function(event){
            event.preventDefault();
            var formData = $(this).serializeArray();
            if(! /^\d+$/.test(formData[1].value) || ! /^\d+$/.test(formData[2].value) || ! /^\d+$/.test(formData[3].value)) {
                alert("Check form fields.");
            }
            else{
                for (var counter in employees) {
                    employee = employees[counter];
                    if(employee.name == formData[0].value) {
                        employee.tariff = formData[1].value;
                        if(formData[4])
                            employee.category = true;
                        employee.additional_time = formData[2].value;
                        employee.tax = formData[3].value;
                        // Предположительно стандартная рабочая неделя длится 40 часов, рабочий месяц - 4 недели.
                        employee.salary = 160 * employee.tariff;
                        employee.salary = controllCategory.salaryAddon(employee.salary, employee.category);
                        employee.salary = controllAdditionalTime.salaryAddon(employee.salary, employee.additional_time, employee.tariff);
                        employee.salary = controllTax.salaryAddon(employee.salary, employee.tax);
                    }
                }
            }
        });

        $(document).bind("ajaxError", function() {
            $('#fail').show();
        });

        $('#show_avg').click(function(){
            var average = 0;
            for (var counter in employees) {
                average += employees[counter].salary;
            }
            average = (average/employees.length).toFixed(2);
            $('#avg').html(Mustache.to_html(average_tmpl.getTemplate(), {average: average}));
        });

        $('#show_all').click(function(){
            $('#employees').html("<tr><td>Name</td><td>Department</td><td>Position</td><td>Tariff</td><td>Overtime</td><td>Tax</td><td>Category</td><td>Salary</td></tr>");
            for (var counter in employees) {
                $('#employees').append(Mustache.to_html(employee_tmpl.getTemplate(), {employee: employees[counter]}));
            }
        });
    });
});
