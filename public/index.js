$(document).ready(function (){
    transformInputsToDesiredVendor();
})

function transformInputsToDesiredVendor() {
    $("#desired-meeting-date").dateDropper();
    $('#desired-meeting-time').timeDropper({
        meridians: true,
        setCurrentTime: false,
    });
}

$('#test_btn').on('click', function (){
    var clientMeetingRequest  = {}

    $("#patient-meeting-request").find("input").each(function (){
        alert(this.value);
        clientMeetingRequest[this.name] = this.value;
    });

    $.ajax({
        type: 'POST',
        data: clientMeetingRequest,
        contentType: 'application/x-www-form-urlencoded',
        url: 'http://localhost:8080/add',				
        success: function(data) {
            alert(data);
        }
    });
});

