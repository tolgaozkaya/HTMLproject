$(document).ready(function () {
    var tmpAnimation = 0; $("#logoID").click(function () {
        var element = $("#logoID");
        tmpAnimation = tmpAnimation + 360;
        $({ degrees: tmpAnimation - 360 }).animate({ degrees: tmpAnimation }, {
            duration: 1390,
            step: function (now) {
                element.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
    });
});
