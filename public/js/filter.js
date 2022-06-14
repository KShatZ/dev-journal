const dateFilter = document.getElementById("dateFilter");

dateFilter.addEventListener("change", function (event) {
    this.parentElement.submit();
});