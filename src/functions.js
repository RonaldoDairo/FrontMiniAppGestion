import Swal from "sweetalert2";
import axios from "axios";


export function showAlert(title,icon,focus=''){
    if(focus!=''){
        document.querySelector("#focus").focus();
    }
    Swal.fire({
        title: title,
        icon:icon,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoomIn'},
        buttonsStyling:false
    });
}


export function confirm(url,id,title,message){
    let fullUrl = url+id;

    const swalWithBootstrapButton =Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3',cancelButton:'btn btn-danger', popup:'animated zoomIn'}
    });
    swalWithBootstrapButton.fire({
        title: title,
        text:message,
        icon:'question',
        showCancelButton: true,
        confirmButtonText: ' <i class="fa-solid fa-check"></i> Yes, Delete',
        cancelButtonText: ' <i class="fa-solid fa-ban"></i> Cancel'}).then((res)=>{
            if(res.isConfirmed){
                sendRequest('DELETE',{id:id}, fullUrl,'Deleted successfully');
            }else{
                showAlert('Operation canceled', 'info');
            }
        });  
    

   
}

export function sendRequest(method,params,url,message){
    axios({method:method, url:url, data:params}).then(function(res){
        let status = res.status;
        if (status == 200){
            showAlert('Deleted successfully', message);
            window.setTimeout(function() {
                window.location.href = '/'
            },1000);
        }else{
            showAlert('we did not get an answer','error')
        }
    }).catch(function(error) {
        showAlert('Served not available','error')
    });
}