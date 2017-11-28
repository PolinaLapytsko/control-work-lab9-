define(function () {
    return {
        salaryAddon: function (salary, additional_time, tariff) {
                return salary + additional_time * tariff;
        }
    };
});