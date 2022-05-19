const dateFilter = document.getElementById("date_filter");

dateFilter.addEventListener("change", function (event) {
    this.parentElement.submit();
});