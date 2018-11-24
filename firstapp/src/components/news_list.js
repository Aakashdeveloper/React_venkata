import React from 'react';

const NewsList = (props) => {
    console.log(props)

    const output = props.news.map((item) => {
        return(
            <div>
                <h3>{item.title}</h3>
                <h5>{item.feed}</h5>
            </div>
        )
    })

    return(
        <div> 
            {output}
        </div>
    )
}

export default NewsList;