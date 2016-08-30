/* global fluid, jqUnit */

(function ($) {
    "use strict";

    $(document).ready(function () {

        jqUnit.module("Hello World Tests");

        jqUnit.test("Initialization Test", function () {
            jqUnit.expect(1);

            var that = fluid.helloWorld(".flc-helloWorld");
            jqUnit.assertNotUndefined("The component should have initialized", that);
        });
    });
})(jQuery);
