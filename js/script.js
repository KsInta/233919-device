function checkParams() {
    var search = $('#search').val();
    if (search.length = 0) {
        $('#search-btn').attr('hidden');
    } else {
        $('#search-btn').removeAttr('hidden');
    }
} 

$('div.main-menu li').each(function () {
    if (this.getElementsByTagName("a")[0].href == location.href) this.className = "selected";});



