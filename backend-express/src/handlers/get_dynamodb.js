import { DynamoDBClient} from "@aws-sdk/client-dynamodb"; // ES Modules import
import { DynamoDBDocumentClient, GetCommand,BatchGetCommand } from "@aws-sdk/lib-dynamodb";
import config from ".././config.js";
const client = new DynamoDBClient({
    //if credetials are not provided it will takes those from .aws/credentials and uses default profile section in credential
    credentials: config.credentials,
    apiVersion: '2012-08-10',
    region: config.REGION,
    httpOptions: {
     timeout: 5000
}});
const docClient = DynamoDBDocumentClient.from(client);

export  const get_dynamodb={
    // arrow function
    get_item: async(params)=>{
        console.log("Input for dynamodb Get Item",params);
        try{
            // example for passing params in dynamodb
            // const params = {
            //     TableName: "dynamodbtableName",
            //     Key: {
            //       keyName: 'keyValue'
            //     },
            //   };
            const response = await docClient.send(new GetCommand(params));
            //delete the partKey and sortKey from the respone before Sending it to client
            // delete respons?.Item?.keyName 
            console.log(response);
            return response.Item;
        }catch(error){
         console.error(`get Item from dynamoDb failed with error:`,error);
         throw error
        }
    },
    //anonumus function
    get_batchItems: async function (params){

        // dynamodb BatchGetitem retrives only retrieve up to 16 MB of data per operation 
        // BatchGetItem returns a partial result if the response size limit is exceeded(16MB)
        try{
            // example for passing params in dynamodb
            // const params = {
            //     RequestItems: { // tableName as properties and 
            //         "Table1Name": {
            //             Keys: [//keys is array of objects { "PartitionKey": "Value", "SortKey": "Value" 
            //             ]
            //         },
            //         "Table2Name": {
            //             Keys: [//keys is array of objects { "PartitionKey": "Value", "SortKey": "Value" 
            //             ]
            //         }
            //     }
            // };
            
            const response = await docClient.send(new BatchGetCommand(params));
            //delete the partKey and sortKey from the respone before Sending it to client
            // delete responses?.Item?.keyName 
            console.log(response);
            return response;
        }catch(error){
         console.error(`BatchGetItem from dynamoDb failed with error:`,error.message);
         throw new error
        }
    }
}