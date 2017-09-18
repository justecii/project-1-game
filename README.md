# project-1-game
Project 1 - Star Wars Slots

For the first project in the WDI course at GA, I decided to make a slot-machine game with a Star Wars theme.

Getting Started:
To start, I looked into slot machines, how the paylines work, what kind of bets the user makes and how I should organize my board. I first decided I wanted to make a gameboard with 3 rows, 5 columns, and 7 possible paylines depending on the bets chosen, but quickly decided on just 5 paylines for the sake of rounder numbers in my bets. The paylines i settle for were as follows:
    1. Line 1 - straight across the middle row
    2. Line 2 - straight across the top row
    3. Line 3 - straight across the bottom row
    4. Line 4 - an angled line, starting at the bottom of the first row, moving diagonally towards the middle column of the top row, then moving back down diagonally towards the final column of the bottom row.
    5. Line 5 - inverse of line 4, starting at the top, moving down towards the center, then back up towards the final column of the top row.

I decided to only require 3 of the 5 elements in a row for my victory condition, believing that requiring all 5 to be the same to be too rare. I chose an array of 10 images and having 5 of them all line up is 1 in 100,000 odds. Even if the house always wins, that a little too long of odds for the user.

For my bets, i decided to give the user three options of paylines and the chance to multiply their bets by 20. Although I couldn't decide on how much the user should win on each bet, the  6 bets i decided on putting on my gameboard were:
    1. Bet 1 - Only Payline 1 as possible victory
    2. Bet 3 - Paylines 1-3 as possible victory
    3. Bet 5 - All 5 paylines
    4. Bet 20 - same as Bet 1 but with 20x greater reward
    5. Bet 60 - same as Bet 3 but with 20x greater reward
    6. Bet 100 - same as Bet 5 but with 20x greater reward


Initial Wireframe:
Although I am a terrible artist, I decided to wireframe out my page before I went to work on actually coding the board








Resources and Contributor:
* http://www.vegasslotsonline.com/features/paylines/ - figured out which paylines i wanted to use.
