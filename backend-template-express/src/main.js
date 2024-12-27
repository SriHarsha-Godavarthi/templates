
import express from 'express'
import {get_dynamodb} from './handlers/index.js'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/item',(req,res)=>{
  console.log("path: item");
  res.send(get_dynamodb.get_item())
})
app.get('/Batchitem',(req,res)=>{
  console.log("path: batchitem");
  let data;
  try{
  data=get_dynamodb.get_batchItems()
  }catch(error){
    console.log(`error executing /Batchitem handler`);
  }
  res.send(data)
})
app.listen(port, () => {
  console.log(`listening on port ${port} access using url: http://localhost:3000/`)
})