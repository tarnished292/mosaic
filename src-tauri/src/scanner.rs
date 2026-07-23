use lyrics_acquisition_engine::get_metadata;
use serde::Serialize;
use std::{fs, path::PathBuf};

#[derive(Serialize, Clone)]
pub struct Song {
    pub title: String,
    pub artist: String,
    pub album: String,
    pub duration: String,
    pub cover: String,
    pub path: PathBuf,
}

const EXT: [&str; 3] = ["mp3", "flac", "opus"];

#[tauri::command]
pub fn scan_dir(dir: PathBuf) -> Result<Vec<Song>, String> {
    let entries = fs::read_dir(&dir).map_err(|e| e.to_string())?;
    let mut songs = Vec::new();

    for file in entries {
        let entry = file.map_err(|e| e.to_string())?;
        let path = entry.path();

        if path.is_dir() {
            songs.extend(scan_dir(path)?);
            continue;
        }

        if let Some(extension) = path.extension().and_then(|e| e.to_str()) {
            if EXT.contains(&extension) {
                if let Some(metadata) = get_metadata(&path) {
                    songs.push(metadata);
                }
            }
        }
    }

    Ok(songs)
}

