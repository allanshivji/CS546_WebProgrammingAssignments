const express = require('express');
const router = express.Router();

var stories = {
    "storyTitle": "A Leason to be Learned",
    "story":"I would like to share a small story from my life. It was the time when I got my 10th class grade and was looking for a admission in a different college for my 11th and 12th grade. I got 89.45% in my 10th grade and the admissions for the 11th grade for Computer Science course was getting closed on 90%. I was too worried about my future and did not know what needs to be done. I applied for almost more than 20 best colleges where they provide best environment for study in Computer Science. It was just 0.55% where I failed to achieve 90%. I got rejection from almost 11 colleges and still was waiting for a reply from other colleges. I did complete all the procedures online, but still was getting scared about my future. \nIt was the time when my dad looked at me when I was worried about my admissions and how frustrating I was. I used to talk rudely to my parents as well due to this frustration. I did not know what needs to be done. My dad calmed me down and told not to be frustrated and told me just to pray to God. I was the only member in my family who did not believe much in God and then asking me to pray was not at all possible. Since I had nothing to do so I did start praying to God. I could me some change in me where I was not now too rude with my family and new change was coming on my way. Still I was worried about my admissions and I did try to few more colleges. \nAfter my dad did some research on the colleges which I applied for, he told me to go to each college who still did not replied me back and speak in the admin office about their procedures. I was a kind of teenager who was scared to go inside admin office and speak with them. Basically, I was scared to talk with higher authority people back then. But my Dad always motivated me to go and speak with them. Next day I was literally sweating and was scared to talk with the admin office about the admissions. I visited every admin office of 8 remaining colleges who still did not reply to my process. Well it turned out that the people were very sweet to talk and none of them spoke in a rude manner. They also explained about the new offline procedure for the admission just by filling out some forms and told to wait for a week to get back. I was constantly praying that I get an admission to the college. And guess what, after a week I got an admit for 5 colleges and one of the college was my favorite. I was a lot happy. It turned out that the office admission form which I filled was checked by the internal office team and they give less preference to online admission procedure. I asked my Dad, how was this possible. He then smiled at me and told that he did not find anything relevant when he researched about the colleges. But as he had experience in his life, he told me that talking with people and giving them respect and believing in God is what make things happen. I also did ask him that as he already knew that I was scared to talk with people of higher authority then why did he made me do that. The answer that he gave me was surprising. He simply replied to me that:\n If you want to be scared, then get scared of doing Wrong things and not the Right ones."
}

router.get("/", function (req, res) {
    res.json(stories);
    // try {
    //     //const userList = await userData.getAllUsers();
    //     res.json(stories);
    // } catch (e) {
    //     // when something goes wrong with the server!
    //     res.status(500).send();
    // }
});

module.exports = router;