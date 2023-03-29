$("#layout_switch button").on("click", function () {
    $("#testLayout").removeClass("layout-0").removeClass("layout-1");
    $("body").addClass("mobile");
    console.log('mobile layout');
});
$("#layout_switch button:nth-child(2)").on("click", function () {
    $("#testLayout").addClass("layout-0");
    $("body.mobile").removeClass("mobile");
    console.log('3 column layout');
});
$("#layout_switch button:nth-child(3)").on("click", function () {
    $("#testLayout").addClass("layout-1");
    $("body.mobile").removeClass("mobile");
    console.log('4 column layout');
});