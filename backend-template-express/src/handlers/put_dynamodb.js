
export  const put_dynamodb={
    // arrow function
    put_item: (data)=>{
         return `Put single item from dynamodb,${data}`
    },
    //anonumus function
    put_batchItems: function (data){
        return `Get batch of items from dynamodb,${data}`
    }
}