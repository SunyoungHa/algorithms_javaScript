// Version 1: The telephone game is a whisper-to-your-neighbor game that is passed from one neighbor to the next in a line as if they formed a telephone line. The last person who receives the whispered message says the message aloud. Their message is compared to the first person who whispered a message. The start message and end message is compared. Usually, the result of hearing the disparity in the messages brings about a lot of laughter because each person may mishear a word or syllable and try to fill it in with what they think the previous person just whispered to them. Your product manager wants you to design a beta version of this telephone game using only 3 users and wants to see the slight change of each user's statement logged to the console like so:
//"[User1]: [starter statement]"
//"[User2]: [slight change to starter statement]"
//"[User3]: [slight change to User2's statement]"

// Version 2: Your product manager thinks that it would be fun to have lorem ipsum, veggie ipsum, or pirate ipsum words as possible words to change the starter statement.

// Version 3: With the beta version working now, your product manager comes back to you and wants you to build a version of this program for a larger pool of users. She wants the user to be able to give a number for the number of people playing this game and a starter statement that is at least 5 words long. The program should then enable the user to be able to see on each line each corresponding change in the whispered statements in such a way:
//1. [starter statement]
//2. [slight change to starter statement]
//3. [slight change to preceding statement (statement #2)]
//etc.
