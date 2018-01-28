import React,{Component} from 'react';
import classes from './SearchComponent.css';
import SearchResultItems from './SearchResultItems/SearchResultItems';

class SearchComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      SearchResults:["asd"]
    }
  }
  render(){
    return (
      <div>
        <div className={classes.SearchComponent}>
          <input type="text" placeholder="search"/>
          <button><i className="material-icons">search</i></button>
        </div>
          {this.state.SearchResults.length===0?null:<SearchResultItems/>} 
        </div>
    );
  }
}
export default SearchComponent;
