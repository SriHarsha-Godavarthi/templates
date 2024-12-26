import React,{Component} from "react";
// all custom components are imported here
import { Error } from "../pages";
import { BrowserRouter, Route,Routes } from "react-router-dom";

export default class App extends Component{
    constructor(props){
        super(props);
            this.state={
                routesInfo: [
                    {path: "/" ,element: <h1>This is front-end-template-webpack</h1>,errorElement: <Error/>,name:"Home"},
                ], 
            }
    }
    componentDidMount(){
        
    }
    render(){
    return(
    <div className="App">
    <BrowserRouter >
    <Routes>
      {this.state.routesInfo.map((route)=>{
        return <Route key={route.path} path={route.path} element={route.element} errorElement={route.errorElement}/>})}
    </Routes>
    </BrowserRouter>
    </div>
    )}
}