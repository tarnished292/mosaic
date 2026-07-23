mod scanner;
// use scanner::scan_music;
mod download;
use download::download_track;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
         .plugin(tauri_plugin_store::Builder::default().build())
          .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![download_track])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
