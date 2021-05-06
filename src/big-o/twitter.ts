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

function findOldestTweet(tweets: Tweets) {
    let oldest: Tweet | null = null

    tweets.forEach(tweet => {
        if (!oldest) {
            oldest = tweet
            return
        }

        if (tweet.date > oldest.date) {
            oldest = tweet
        }
    })

    return oldest
}

console.log(findOldestTweet(tweets))
