import React, { Component } from 'react'

export class NewsUpdate extends Component {
    render() {
        let { title, imageUrl,source, newsUrl,author,date } = this.props;
        return ( <
            div className = 'my-3' >
            <
            div className = "card"
            style = {
                { width: "25rem" }
            } >
            <div className='card header bg-warning ' height="20px"><h5>
             <b> {source} </b> </h5>
             </div>
            <
            img src = { imageUrl }
            className = "card-img-top"
            alt = "img"
            height = "200px" width="400px"/ >
            <
            div className = "card-body" >
            <div style={{height:"100px"}}>
            <
            h5 className = "card-title" > { title } < /h5> </div><
            a rel = 'referrer'
            href = { newsUrl }
            className = "btn btn-primary br-4 " > Read < /a>
            </div>
           </div>
            <div className='card footer text-success'style = {
                { width: "25rem" }
            } ><b>
            <cite title="Source Title"> By : {!author?source:author}</cite></b><b>
           {date}</b>
           
              <
            /div>  < /
            div >
        )
    }
}

export default NewsUpdate