$(document).ready(function () {
    // Dark Mode Toggle
    $('#darkModeToggle').click(function () {
        $('body').toggleClass('bg-dark text-light');
        $('.navbar').toggleClass('navbar-dark bg-dark');
        $('.sidebar').toggleClass('bg-dark text-light');
        $('.chat-input-container').toggleClass('bg-dark text-light');
        $('input').toggleClass('bg-dark text-light');
    });

    // Sidebar Toggle
    $('#sidebarToggle').click(function () {
        $('#sidebar').toggleClass('active');
    });

    $('#closeSidebar').click(function () {
        $('#sidebar').removeClass('active');
    });

    $('.navbar-toggler').click(function () {
        $('#sidebar').toggleClass('active');
    });
});
