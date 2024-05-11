const initializeToastAlert = (msg, type) => {
    if (msg.length > 0 || type.length > 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 4500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        Toast.fire({
            icon: type,
            title: msg
        });
    }
}

export { initializeToastAlert };
