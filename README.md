# WELL ROUNDED

Well Rounded is based on the philosophy that happiness cannot be gained by the fulfillment any single aspect of life. We believe that to be happy is to be well rounded, and we break this up into eight core elements: FINANCE, LOVE LIFE, your relationship with FRIENDS AND FAMILY, WORK, CREATIVITY, EXERCISE, HEALTHY EATING, and SPIRITUALITY / SELF.

## technologies used
**FRONT END:**
- React
- JavaScript
- HTML
- CSS
- Surge

**BACK END:**
- Ruby on Rails
- PostgreSQL
- Heroku

**TECHNOLOGIES USED:**
- fetch
- bcrypt
- rack-cors
- jwt
- react-router-dom
- [react-minimal-pie-chart](https://www.npmjs.com/package/react-minimal-pie-chart)

## installation instructions
- git clone
- rails create:db
- rails reset:db
- rails server
- cd client
- npm install
- npm start

## wireframes

![wf1](https://github.com/maddyrombes/well-rounded/blob/master/client/images/wf-1.png)
![wf2](https://github.com/maddyrombes/well-rounded/blob/master/client/images/wf-2.png)
![wf2](https://github.com/maddyrombes/well-rounded/blob/master/client/images/wf-3.png)

## erd

![erd](https://github.com/maddyrombes/well-rounded/blob/master/client/images/well-rounded-erd.png)

## code snippet

This edit function became more complex than I originally imagined.

```  
updateRatings() {
    const ratingKeys = Object.keys(this.state.ratingForm)
    ratingKeys.forEach(async (rating, index) => {
      if (this.state.ratingForm[rating].length > 0) {
        const newRating = await putUserRatings(this.state.currentUser.id, this.state.currentUser.ratings[index].id, this.state.ratingForm[rating] )
        this.setState(prevState=>({
          currentUser: {
            ...prevState.currentUser,
            ratings: prevState.currentUser.ratings.map(rating => (rating.id === newRating.id ? newRating : rating))
          }
        }))
      }
    })
  }
```
