use crate::scanner::Song;
use base64::{engine::general_purpose, Engine as _};
use lofty::{
    file::{AudioFile, TaggedFileExt},
    read_from_path,
    tag::Accessor,
};
use std::path::PathBuf;

pub fn get_metadata(path: &PathBuf) -> Result<Song, Box<dyn std::error::Error>> {
    let tagged_file = read_from_path(path)?;

    let tag = tagged_file
        .primary_tag()
        .or_else(|| tagged_file.first_tag())
        .ok_or("No tag found in file")?;

    let title = match tag.title() {
        Some(s) => s.to_string(),
        None => "Unknown Title".to_string(),
    };
    let artist = match tag.artist() {
        Some(s) => s.to_string(),
        None => "Unknown Artist".to_string(),
    };
    let album = match tag.album() {
        Some(s) => s.to_string(),
        None => "Unknown Album".to_string(),
    };

    let total_secs = tagged_file.properties().duration().as_secs();
    let duration = format!("{}:{:02}", total_secs / 60, total_secs % 60);

    let cover = tag
        .pictures()
        .first()
        .map(|pic| general_purpose::STANDARD.encode(pic.data()))
        .unwrap_or_default();
    

    let metadata = Song {
        title,
        artist,
        album,
        duration,
        cover,
        path: path.clone(),
    };

    Ok(metadata)
}
