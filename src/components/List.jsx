import { useLibraryStore } from "../store/store";

export default function List({ songs }) {
  const currentSong = useLibraryStore((state) => state.currentSong);
  const setCurrentSong = useLibraryStore((state) => state.setCurrentSong);
  console.log(currentSong);

  if (!songs.length) {
    return <p className="mt-10 text-center text-sm text-neutral-500">No songs found.</p>;
  }

  return (
    <div className="space-y-1 p-3">
      {songs.map((song, i) => (
        <div
          onClick={() => setCurrentSong(song)}
          key={song.path || i}
          className="group flex items-center gap-3 rounded-lg p-2 hover:bg-white/5 transition"
        >
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-md bg-white/5">
            {song.cover ? (
              <img
                src={`data:image/jpeg;base64,${song.cover}`}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-lg text-neutral-600">
                ♪
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-neutral-100">{song.title}</p>
            <p className="truncate text-xs text-neutral-500">
              {song.artist} · {song.album}
            </p>
          </div>

          <span className="text-xs tabular-nums text-neutral-500">{song.duration}</span>
        </div>
      ))}
    </div>
  );
}
