interface Tweet {
    tweet: string
    date: number
}

type Tweets = Tweet[]

function createTweet(tweet: string, date: number): Tweet {
    return {
        tweet,
        date
    }
}

const tweets: Tweets = [createTweet("tweet 1", 2012), createTweet("tweet 2", 2014), createTweet("tweet 3", 2016)]

function compareAllTweets(tweets: Tweets) {
    tweets.forEach(outerTweet => {
        tweets.forEach(innerTweet => {
            // compare?
            if (outerTweet.date === innerTweet.date) {
            }
        })
    })
}

compareAllTweets(tweets)
