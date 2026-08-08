# 🎮 Contributing to OverlineDev's Game Hub

Thanks for wanting to add a game to the hub!

This project is a collection of browser games and other playable projects. Contributions are welcome!

## ➕ Adding a Game

There are two ways to add a game:

### 🔗 Option 1 — Link to an Existing Game

If the game is already hosted somewhere, you can simply link to it.

1. Fork this repository.
2. Add a JSON file for your game inside the `games/` folder.
3. Add the JSON filename to `games/games.json`.
4. Add a thumbnail if you have one.
5. Open a pull request.

Example:

```json
{
  "title": "Example Game",
  "genre": "Arcade",
  "image": "./games/thumbnails/example.png",
  "url": "https://example.com/game",
  "description": "A short description of the game."
}
```

### 📦 Option 2 — Add the Game Files

If the game is allowed to be redistributed and you have the game files, you can add them to the repository.

Place the game files inside the `games-files/` folder.

For example:

```text
games-files/
└── example-game/
    ├── index.html
    ├── game.js
    └── assets/
```

Then your game JSON should point to the local game:

```json
{
  "title": "Example Game",
  "genre": "Arcade",
  "image": "./games/thumbnails/example.png",
  "url": "./games-files/example-game/index.html",
  "description": "A short description of the game."
}
```

The game hub will recognize local games and display a **Local File** badge.

> **Important:** Only add game files if you have permission to redistribute them or their license allows redistribution.

## 📄 Game JSON Format

A basic game entry looks like this:

```json
{
  "title": "Your Game",
  "genre": "Action",
  "image": "./games/thumbnails/your-game.png",
  "url": "https://example.com/game",
  "description": "A short description of the game."
}
```

For a locally hosted game, replace the URL with the path to the game's files.

### Required fields

* `title` — The name of the game.
* `genre` — The game's genre.
* `url` — Where the game can be played.
* `description` — A description of the game.

### Optional fields

* `image` — A thumbnail for the game.

If you don't have a thumbnail, the hub will use a placeholder.

## 📜 Game Ownership & Licensing

Please only submit games that you are allowed to share or link to.

If the game belongs to someone else, make sure you respect its license and give proper credit when required.

Do **not** submit:

* Games you do not have permission to redistribute.
* Stolen or modified games presented as your own.
* Malware or malicious files.
* Illegal content.

If you're unsure whether a game can be added, please ask before opening a pull request.

## 🖼️ Thumbnails

Please use a thumbnail that is appropriate for the game and that you are allowed to use.

Try to keep thumbnails reasonably sized so the game hub stays fast.

## 🔍 Before Opening a Pull Request

Please check that:

* [ ] The game works.
* [ ] The JSON is valid.
* [ ] The game has a title.
* [ ] The game has a genre.
* [ ] The game has a working URL or local game path.
* [ ] The description accurately describes the game.
* [ ] The game is allowed to be shared or linked.
* [ ] The thumbnail works, if one is provided.
* [ ] The game's JSON filename has been added to `games/games.json`.
* [ ] Any local game files are in `games-files/`.

## 🤝 Pull Requests

Please explain what game you are adding in your pull request.

For example:

> Added [Game Name] to the game hub.

I may make changes to submissions before they are accepted.

Thanks for helping grow the game hub! 🎮
