function deleteHandler(){
    Swal.fire({
    title: 'Warning',
    text: 'Are you sure to delete this?',
    type: 'warning',
    showConfirmButton:true,
    showCancelButton:true,

   }).then((result) => {
        if (result.value) {
            Swal.fire(
            'Success',
            'You have deleted successfuly!',
            'success'
            )
        }
        });
};

function editHandler(){
    Swal.fire({
    title: 'Info',
    text: 'You will be redirected to the edit page',
    type: 'info'
   });
}



