# ChatGPT Read Aloud

A Chrome extension that restores and enhances ChatGPT's "Read Aloud" experience. It injects a dedicated speaker button next to every assistant response, reuses the native playback UI, and optionally auto-starts narration as soon as a reply is ready.

## Features
- **Speaker shortcut** – Adds a visible read-aloud button for every ChatGPT message, avoiding the hidden overflow menu.
- **Invisible overflow menu** – Temporarily hides the contextual menu while the extension triggers the native read-aloud control, preventing UI flicker.
- **Smart state handling** – Updates the proxy button between play/stop icons and respects manual stops and completed playback.
- **Auto-play toggle** – Popup switch lets you choose whether new assistant responses should start reading automatically.

## Installation
1. Clone or download this repository.
2. Navigate to `chrome://extensions` in Chrome.
3. Enable **Developer mode** (top-right corner).
4. Click **Load unpacked** and select the project directory.

The extension will appear in your toolbar and can be pinned like any other Chrome extension.

## Usage
- Open ChatGPT and start any conversation.
- A speaker button is injected next to each assistant response. Click it to play or stop the native read-aloud audio.
- Click the extension toolbar icon to open the popup.
  - Use the **Auto-play new responses** switch to automatically start playback whenever ChatGPT finishes responding.

## Development notes
- The speaker SVG path used by the extension lives in `src/content/content.js`. Export it to regenerate icon PNGs if needed.
- Icons are declared in `manifest.json` (`"icons"` and `"action.default_icon"`). Replace the PNGs in `src/assets/icons/` if you redesign the artwork.
- Content script behavior (proxy button creation, menu hiding, auto-play automation) is managed inside `src/content/content.js`. Adjust delays or selectors there if ChatGPT updates its DOM.

Enjoy a more accessible ChatGPT experience!
