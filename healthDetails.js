const dialogIds = [
    'BMIDialog', 'BtrDialog', 'TempDialog', 'SleepDialog',
    'BloodDialog', 'HeartRDialog', 'WeightDialog', 'FatPDialog',
    'AVGDialog', 'WorkoutDialog', 'HydrationDialog', 'msgDialog'
];

function openDialog(id) {
    const dialog = document.getElementById(id);
    dialog.removeAttribute('hidden'); // Remove the hidden attribute
    dialog.showModal();
}

function closeDialog(id) {
    const dialog = document.getElementById(id);
    dialog.close();
    dialog.setAttribute('hidden', 'true'); // Re-add the hidden attribute
}


// function closeMsgDialog() {
//     const dialog = document.getElementById('msgDialog');
//     dialog.close();
//     dialog.setAttribute('hidden', 'true'); // Re-add the hidden attribute
// }