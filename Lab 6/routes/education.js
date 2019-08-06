const express = require('express');
const router = express.Router();

var schools = [
    {
        "schoolName": "St. Anthony's Convent High School",
        "degree": "Higher Secondary School Certificate",
        "favoriteClass": "Computer",
        "favoriteMemory": "My favorite memory in this school was when, the soccer team was formed for the first time in our school I was the second person to get chosen for the team. Also when we won the inter-school tournament I was been awarded as the best Defender in the entire tournament and receiving an award from my school principal was of great honor to me."
      },
      {
        "schoolName": "Thakur College of Science and Commerce",
        "degree": "Computer Science",
        "favoriteClass": "Software",
        "favoriteMemory": "It's hard to pick favourite memory, but a fond memory I have is having a barbecue with my friends from my dorm senior year. It just stands out in my mind because it was one of the few occasions where we were all together, joking around and having fun. Also, there was food."
      },
      {
        "schoolName": "St. John College of Engineering and Management",
        "degree": "Computer Science",
        "favoriteClass": "Software Engineering",
        "favoriteMemory": "My favorite memory in thus college was when, my teacher came to our class with our answer sheets. It was Artificial Intelligence subject. He gave us the answer sheets and I was waiting for my turn to get the answer sheet. He said my name, my heart was beating with 160 beats per minute and was super nervous. I got my sheet and looked for the marks. It was shocking that I got 28/30 marks. I was surprised, happy and with mixed feelings. As the way I do, I looked at the sheets and was satisfied with the marks that was given. I summed up all the marks and it was 27. Well! I thought to be quiet and give back the sheet. But, as he was my favorite teacher so how could I cheat him? I went to him and informed about the incorrect summation that he did of my marks. My other friends before me were discussing their problems. When it was my turn, he looked at me with strange expressions. My teacher asked if someone was having a red pen to change my marks. He was asking for the pen as if he was going to cut my marks. But, later to my shock, he looked at my sheet and looked for the marks where he gave 4/5 marks and changed it to 4.5 marks (So total would be 27.5 which when we round off it becomes 28). He looked at me with a short smile and said, Well now it 28 so go to your seat and sit down. As I was surprised, I asked him why did he do it. He said, You should get marks for honesty as well. It was the first time that this happened to me. It is truly said, Honesty is the best policy."
      }
]

router.get("/", function (req, res) {
    res.json(schools);
    // try {
    //     //const userList = await userData.getAllUsers();
    //     res.json(schools);
    // } catch (e) {
    //     // when something goes wrong with the server!
    //     res.status(500).send();
    // }
});

module.exports = router;