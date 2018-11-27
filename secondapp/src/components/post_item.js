import React, {Component} from 'react';

class PostsItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.match.params.id)
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">Panel with PostsItem class</div>
                <div className="panel-body">PostsItem Content for id {this.props.match.params.id}</div>
            </div>
        )
    }
}

export default PostsItem;