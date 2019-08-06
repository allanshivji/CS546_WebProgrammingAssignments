const express = require('express');
const router = express.Router();

var bio = {
    "name": "Allan Michael Shivji",
    "cwid": 10437270,
    "biography": "Firstly, welcome to this post! Well, I was born on 22nd of November 1995 in a small town called Vasai which is near to city Mumbai in sate of Maharashtra and country India. Vasai has a lot of history connected to it. It has a Bassein Fort (a.k.a. Vasai Fort) which is the tourist attraction place. It was build by Portuguese and latter on ruled by many kings. Since my childhood I was the most notorious in my family. I always used to break things and even my toys. I love to play soccer and played in inter-school competition when in school and also won award as the best defender. \nWell.. in my family, I have my super cool Dad who always jokes around and my best friend. He works in Bharat Petroleum Co. Ltd. India. He is been working there for almost a 25 years. My Mom is a teacher who teaches in St. Peter High School. She is a hard working women and also has been in teaching profession for almost 22 years. Then I have my best and worst brother :-) who currently studies in 12th grade. Well.. we fight a lot but still help in every difficult situations. ",
    "favoriteShows": ["Grey's Anatomy", "Friends", "Game of Thrones", "Ellen DeGeneres Show", "Ghoul"],
    "hobbies": ["Watching Tech. related youtube videos", "Collecting Coins", "Swimming", "Playing Soccer", "Playing Cricket"]
}

router.get("/", function (req, res) {
    res.json(bio);
    // try {
    //     //const userList = await userData.getAllUsers();
    //     res.json(bio);
    // } catch (e) {
    //     // when something goes wrong with the server!
    //     res.status(500).send();
    // }
});

module.exports = router;