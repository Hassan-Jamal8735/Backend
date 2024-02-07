class ApiError extends Error{
    constructor(
        statuscode,
        message,
        stack,
        error=[]
    ){
        super(message)
        this.error=error,
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