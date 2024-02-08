class ApiResponse{
    constructor(message,statuscode,data="success"){
        this.data=data,
        this.statuscode=statuscode,
        this.message=message,
        this.success=statuscode<400
    }
}
export default ApiResponse;