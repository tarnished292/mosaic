# Mosaic TODO

## Library Scanner

Write a recursive music library scanner that:

* Reads the music directory selected by the user.
* Recursively scans all subdirectories.
* Filters supported audio files, initially `.mp3`.
* Extracts metadata from each audio file.
* Returns the scanned tracks in a structured format.

## Track Metadata

The metadata extracted from each track should contain:

* Title
* Artist
* Album
* Duration

This metadata will be used to identify tracks and fetch their corresponding synchronized lyrics from LRCLIB.

## Future Scanner Improvements

* Support additional audio formats.
* Extract embedded album artwork.
* Handle missing or invalid metadata.
* Handle duplicate tracks.
* Gracefully handle corrupted or unreadable audio files.
* Watch the music directory for newly added, modified, or removed files.
* Incrementally update the library instead of rescanning the entire directory.
