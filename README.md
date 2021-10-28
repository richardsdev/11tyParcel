11ty and Parcel Working together (mostly)

OK so this is not a finished starter, still need to rearrange things so that they work on first run, but it will show you roughly what am doing.

Before you can run it, manually create a folder called "site" in the root directory, and another one called "bundle". Then for the first run, start the "11ty-watch" script. It will build the site with eleventy and dump it in "site". Then, start the parcel-watch script. It will pick up the index.html file in "site" and bundle everything to "bundle". After that, kill those two processes and from then on, you can just run "dev" to start everything.
