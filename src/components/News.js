import React from 'react';
import Headline from './Headline'
import PropTypes from 'prop-types'

const News = ({news}) => {
    return (
        <div className='row'>
            {news.data.articles.map(headline=>(
                <Headline key={headline.url} content={headline}/>
            ))}
        </div>
    );
};

News.propTypes = {
    news: PropTypes.object.isRequired,
}


export default News;