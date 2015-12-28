$(function() {
    ingredientsList = {}
    if (localStorage.getItem("ingredientsList") !== null) {
        ingredientsList = JSON.parse(localStorage.getItem("ingredientsList"));
        for (var prop in ingredientsList) {
            if (ingredientsList[prop]) {
                $("#" + prop).children("input").prop('checked', true);
            }
        }
    } else {
        $('.ingredientsList').each(function() {
            ingredientsList[$(this).attr('id')] = false;
        });
    }

    $('input').change(function() {
        console.log("check");
        if ($(this).is(":checked")) {
            ingredientsList[$(this).parent().attr('id')] = true;
            localStorage.setItem("ingredientsList",
                JSON.stringify(ingredientsList));
            return;
        } else {
            ingredientsList[$(this).parent().attr('id')] = false;
            localStorage.setItem("ingredientsList",
                JSON.stringify(ingredientsList));
            return;
        }
    });

});
