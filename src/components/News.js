import React, { Component } from 'react'
import { NewsUpdate } from './NewsUpdate'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {

    static defaultProps = {
        category: "general",
    }
    static propTypes = {
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0,
        }
    }
    async updateNews() {
        this.props.setProgress(5)
        let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=30`
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.props.setProgress(50)
        this.setState({ 
            page:this.state.page,
            articles: parsedData.articles,
            totalResults:parsedData.totalResults,

         })
         this.props.setProgress(100)
    }
    async componentDidMount(){
        this.updateNews();
    }
    fetchMoreData=async ()=>{
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=12`
        let data = await fetch(url);
       
        let parsedData = await data.json()
        this.setState({ 
            page:this.state.page,
            articles: this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults,

         })
    }
    render() {
            return ( <
                    div className = 'container my-5' >
                    <
                    div className = 'container d-flex justify-content-between' > < /
                    div > 
                    <InfiniteScroll dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<h4>loading...</h4>}
                    >
                    
                    <
                div className = 'row' > {
                    this.state.articles.map((element) => {
                        return <
                            div className = "col-md-4"
                        key = { element.url } >
                            <
                            
                            NewsUpdate author={element.author} source={element.source.name}date={element.publishedAt.slice(0,10)} title = { element.title }
                        newsUrl = { element.url }
                       
                        imageUrl = { element.urlToImage }
                        / > < /
                        div >
                    })
                }
                 <
                /div> </InfiniteScroll>
          <
        /
    div >

)
}
}


export default News