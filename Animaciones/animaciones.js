// document.getElementById('openDialogBtn').addEventListener('click', function() {
//     var dialog = document.getElementById('myDialog');
    
//     // Remove the fadeOut class to reset the animation
//     dialog.classList.remove('fadeOutDialog');
    
//     // Trigger reflow to restart the animation
//     void dialog.offsetWidth;
    
//     // Add the fadeOut class to apply the animation
//     dialog.classList.add('fadeOutDialog');
    
//     // Show the dialog
//     dialog.showModal();
// });

// document.getElementById('closeDialogBtn').addEventListener('click', function() {
//     var dialog = document.getElementById('myDialog');
//     dialog.classList.remove('fadeInDialog');
    
//     // Trigger reflow to restart the animation
//     void dialog.offsetWidth;
    
//     // Add the fadeOut class to apply the animation
//     dialog.classList.add('fadeInDialog');
    
//     // Close the dialog
//     dialog.close();
// });




document.getElementById('openDialogBtn').addEventListener('click', function() {
    var dialog = document.getElementById('myDialog');
    dialog.classList.remove('Fade__Out');
    dialog.classList.add('Fade__Out');
    dialog.showModal();
    
    // Show the dialog
   
});

document.getElementById('closeDialogBtn').addEventListener('click', function() {
    var dialog = document.getElementById('myDialog');
    dialog.classList.add('Fade__In');

    setTimeout(function() {
        dialog.close();
        dialog.classList.remove('Fade__In');
    }, 500);
    // 249
    //    // Close the dialog
    //    dialog.close();
});