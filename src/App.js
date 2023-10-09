import './App.css';
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import { News } from './components/News';
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// import { NewsUpdate } from './components/NewsUpdate';
// import News from './components/News';

// import React, { Component } from 'react'

export default class App extends Component {
    apikey="63f7e8da95164aa4ba789791a3dbe4c1";
    state={
        progress:0,
    }
    setProgress=(progress)=>{
        this.setState({progress:progress})
    }
    render() {
        return (
            
            <
            div >
            <
            Navbar / >
            <LoadingBar color="red" progress={this.state.progress}/>
            <Routes>
                <Route  path='/' element={<News setProgress={this.setProgress} key="general" apikey={this.apikey} category="general"/>}> </Route>
                <Route  path='/business' element={<News setProgress={this.setProgress} key="business" apikey={this.apikey} category="business"/>}> </Route>
                <Route  path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" apikey={this.apikey} category="entertainment"/>}> </Route>
                <Route  path='/health' element={<News setProgress={this.setProgress} key="health" apikey={this.apikey} category="health"/>}> </Route>
                <Route  path='/science' element={<News setProgress={this.setProgress} key="science" apikey={this.apikey} category="science"/>}> </Route>
                <Route  path='/sport' element={<News setProgress={this.setProgress} key="sport" apikey={this.apikey} category="sport"/>}> </Route>
                <Route  path='/technology' element={<News setProgress={this.setProgress} key="technology" apikey={this.apikey} category="technology"/>}> </Route>
            </Routes>

            <
            /div>
        )
    }
}