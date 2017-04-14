 - When we I am making the upvote function I need to set it up similarly to how the submit url and title are set up.

 - They will need to add(post) to the database then get the count from the database.

 - They will need to be two separate functions for each arrow

 - I also need to maybe make a display that shows the exact count for the database
 - ok so I thought i ahd the votes figured out but I was making a new PK every time I was using count which is not what I wanted to do
 - I need to roll back the database and see if I can find a way to just alter one row in a specific column
 - there is a problem with insert. I just cant figure out what it is. I am creating a new object each time and I dont want that when I am changing votes. I just want to target a specific key not the whole object.
