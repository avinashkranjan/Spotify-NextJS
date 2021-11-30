import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  HeartIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          type="button"
        >
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button
          className="flex items-center space-x-2 hover:text-white"
          type="button"
        >
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button
          className="flex items-center space-x-2 hover:text-white"
          type="button"
        >
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button
          className="flex items-center space-x-2 hover:text-white"
          type="button"
        >
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button
          className="flex items-center space-x-2 hover:text-white"
          type="button"
        >
          <HeartIcon className="h-5 w-5" />
          <p>Favourites</p>
        </button>
        <button
          className="flex items-center space-x-2 hover:text-white"
          type="button"
        >
          <RssIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
        <p className="cursor-pointer hover:text-white ">Playlist name ..</p>
      </div>
    </div>
  );
}

export default Sidebar;
