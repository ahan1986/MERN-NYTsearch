import { FETCH_POSTS, NEW_POST } from './types';
import NewsAPI from 'newsapi';

export const searchPost = postData => dispatch => {
    console.log('searchPost in action.js');
    console.log(postData);
    const newsapi = new NewsAPI("1a45a81e8e1a4f8fafd77681279d4998");
        // using newsapi package to get news information from the query that was typed in the topic input section.
        newsapi.v2.everything({
            sources: 'bbc-news, the-verge',
            q: postData.topic,
            from: postData.startYear + '-09-30',
            to: postData.endYear + "-10-24",
        }).then(res => {
            console.log("made correct api call to news sources");
            dispatch({
                type: FETCH_POSTS,
                payload: res.articles
            })
        }).catch(err => {
            console.log(err);
            console.log("there was an error");
        })
}