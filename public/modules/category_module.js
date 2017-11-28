define(function () {
    return {
        salaryAddon: function (salary, category) {
            var addon = 0;
            if(category)
                addon = 200;
            return salary + addon;
        }
    };
});