# Soundcloud-Extractor
A simple bookmarklet for extracting the title, link and date for all the tracks of any user on Soundcloud.

The problem I had was when I found a user who had hundreds of tracks and I wanted to hear them all from the start but I couldn't find a way to easily get to the end without scrolling and loading in all the excess information for each track. Then you have to follow the same process each time you reload the browser to get to the bottom and continue from where you left off.

The solution was to create a simple bookmarklet that dynamically creates a list of all the tracks that are currently loaded in the browser window (so you do have to scroll to the bottom once). The extractor pulls the link to each track and the date that it was published. You can then copy the output to a note program and easily pick up from where you left off or copy the HTML for your own personal usage.

##Installation
1. Open the raw view for the [bookmarklet](https://raw.githubusercontent.com/Demaine/Soundcloud-Extractor/master/bookmarklets/soundcloud-extractor-bookmarklet.js).
2. Copy the text from the raw view.
3. Create a new bookmark in your browser of choice.
4. Paste the text in the "location" (Firefox) or "URL" (Chrome).
5. Add a name for the bookmark.

##Usage
1. Go to a user's page on Soundcloud.
2. Scroll to the bottom of the feed.
3. Open the bookmarklet from your browser's bookmarks.
4. The bookmarklet opens a new tab with the list of extracted links.