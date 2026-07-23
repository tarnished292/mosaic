# Mosaic

<p align="center">
  <img src="./public/logo.png" alt="Mosaic Logo" width="160" />
</p>

<p align="center">
  A modern, local-first music player designed to rethink how we interact with our music.
</p>

---

## About

Mosaic is a music player built around a simple idea:

> **Music should be the focus, not the filesystem.**

Most local music players treat your collection like a file manager — folders, tables, directories, and endless lists.

Mosaic takes a different approach.

Instead of making users manage files, Mosaic aims to create a focused, visual, and intuitive environment where your music feels like the center of the experience.

Your files stay local. Your library stays yours. The interface stays out of the way.

---

## Vision

Mosaic is being built around three principles:

### Music First

The experience should revolve around listening, discovery, and enjoying music — not navigating directories.

### Beautiful by Default

A music player should feel as good to use as it sounds. Mosaic focuses on thoughtful interactions, album artwork, motion, typography, and a clean interface.

### Local by Design

Your music collection belongs to you.

Mosaic is designed around local music and local-first experiences rather than forcing your collection into a cloud service.

---

## Features

Mosaic is currently under active development.

Planned and experimental features include:

* Local music library
* Automatic music directory scanning
* Filesystem change detection
* Metadata-based organization
* Album and artist browsing
* Playlists
* Music queue
* Search
* Playback controls
* Synchronized lyrics
* Beautiful Now Playing experience
* Album artwork
* Syncify integration for acquiring and preparing music

The feature set and architecture are still evolving.

---

## Syncify

Mosaic is designed to work alongside [Syncify](https://github.com/tarnished292/syncify), a Rust library focused on acquiring and preparing music.

Syncify handles things like:

* Music source detection
* Metadata retrieval
* Audio downloading
* Audio matching
* Metadata tagging
* Synchronized lyrics

Mosaic focuses on the experience around that music:

```text
                    Syncify
                       │
              Acquire & Prepare
                       │
                       ▼
                Mosaic Library
                       │
                       ▼
                     Music
                       │
                       ▼
                  Listen
```

The two projects are intentionally separate.

---

## Tech Stack

Mosaic is built with:

* **Rust** — Core application logic
* **Tauri 2** — Desktop application framework
* **React** — User interface
* **JavaScript** — Frontend development
* **Tailwind CSS** — UI styling

The project is being developed with a focus on clean architecture, maintainability, and a polished user experience.

---

## Project Status

🚧 **Early Development**

Mosaic is currently in the early stages of development.

The architecture, UI, and feature set are actively evolving.

Expect things to change.

---

## License

License information will be added as the project matures.
