class ApiError extends Error{
    constructor(
        statuscode,
        message,
        stack,
        errors=[]
    ){
        super(message)
        this.errors=errors,
        this.statuscode=statuscode,
        this.data=null,
        this.success=false;
        if (stack) {
            this.stack=stack;
        } else {
            Error.captureStackTrace(this,this.constructor);
            
        }
    }
}
export default ApiError;