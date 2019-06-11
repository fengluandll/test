beforeEach(function () {
    var testModuleMetadata = {
        declarations: [FavoriteIconDirective, TestComponent]
    };
    fixture = TestBed.configureTestingModule(testModuleMetadata)
        .createComponent(TestComponent);
    fixture.detectChanges();
});
