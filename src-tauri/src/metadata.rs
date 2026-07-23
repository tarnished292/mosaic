pub fn get_metadata(path: &PathBuf) -> Option<Song> {
    // placeholder until lofty tag-reading is wired in
    Some(Song {
        title: path.file_stem()?.to_string_lossy().to_string(),
        artist: "Unknown Artist".to_string(),
        album: "Unknown Album".to_string(),
        duration: "0:00".to_string(),
        cover: String::new(),
        path: path.clone(),
    })
}