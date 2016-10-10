For Part 3, we worked on a simple JS object called Library that is stored using HTML local storage.
The library object consists of shelves, which are in turn collections of books. The object is retrieved
from local storage, and then displayed to the user in a HTML table. Depending on if the user is an admin
or a undergraduate student, different onclick handlers are added to the table cells, based on the requirements
in the assignment. Since we store any changes to the HTML local storage, we can login as a different user next time,
and see any changes that previous users did.