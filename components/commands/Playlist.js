export default function Playlist() {
    return (
        <section>
            <div className="p-2 flex flex-col gap-6 md:text-xl lg:text-2xl">
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /create
                    </summary>
                    <p className="mt-3">Create private playlist</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /rename
                    </summary>
                    <p className="mt-3">Rename your saved playlist</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /list
                    </summary>
                    <p className="mt-3">See all your playlist</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /save
                    </summary>
                    <p className="mt-3">Save current song to your saved playlist</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /view
                    </summary>
                    <p className="mt-3">View all your song at your saved playlist</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /load
                    </summary>
                    <p className="mt-3">Load all your songs at saved queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /addlist
                    </summary>
                    <p className="mt-3">Add all songs in the queue to playlist</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /delete
                    </summary>
                    <p className="mt-3">Delete your saved playlist</p>
                </details>
            </div>
        </section>
    )
}