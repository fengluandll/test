(
    function () {
        "use strict";
        describe('Tests',function () {
           it("True should be truthy",function () {
              expect(true).toBeTruthy();
           });

           it('True should fail falsy',function () {
               expect(false).toBeFalsy();
           });
        });
    }
)();