I was bored so I decided to rip the ChromeOS built-in media app (found at chrome://media-app) so that it can be hosted somewhere else.
Issues:
- Opening files from the site doesn't work.
- Images, PDFs and audio won't open, only videos work (IDK why)
Changes:
I modified some of the HTMl code (Especially where it gets assets) to work outside of the ChromeOS environment.
Try it here: https://chromeos-media.glitch.me/
