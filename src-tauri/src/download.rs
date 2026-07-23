use std::path::PathBuf;

#[tauri::command]
pub async fn download_track(url: String, output_dir: String) -> Result<String, String> {
    let dir = PathBuf::from(output_dir);
    syncify::library::integration::wire(&url, &dir).await;
    Ok("Download complete".to_string())
}