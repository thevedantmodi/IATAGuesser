# IATAGuesser
IATA Guesser is a personal tool that my traveling friends and I use to memorise the IATA code for an airport.

# Development
This was the first website created fully in HTML, CSS, and JS. I learned the syntax needed to recreate the old Python program in JavaScript, with plans to expand this to a more visually appealing app, with React.

A big trouble that I encountered was understanding the algorithm to generate not already seen codes, as I initially had a recursive solution, but this caused a stack overflow error. I opted for an iterative one, since it proved to not make the client stop and stopped some very strange behavior, that made the game unplayable. This taught me about the oddities of JavaScript, and how it may vary from C++, which I have more of a background in.

# Usage
Open the GitHub site, where the page is hosted, refresh the page the reload your results! Be sure to share your results at the end of the game!

# Credits
- [airportsdata by Mike Borsetti]https://github.com/mborsetti/airportsdata was a very useful dataset for taking the IATA codes I wanted, and easily retrieving information about them

- [toastr by CodeSeven]https://github.com/CodeSeven/toastr was an API that proved useful for game notifications, that made it look a little prettier than the default browser notifications


