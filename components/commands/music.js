export default function Music() {
    return (
        <section className="">
            <div className="p-2 flex flex-col gap-6 md:text-xl lg:text-2xl">
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /play
                    </summary>
                    <p className="mt-3">Play a song from url or song name, support spotify and Soundcloud</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /seek
                    </summary>
                    <p className="mt-3">Seek duration on current song</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /join
                    </summary>
                    <p className="mt-3">Make Overtunes join your voice channel</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /pause
                    </summary>
                    <p className="mt-3">Pause curreng queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /disconnect
                    </summary>
                    <p className="mt-3">Make Overtunes leave your voice channel</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /clear
                    </summary>
                    <p className="mt-3">Clear all current queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /back
                    </summary>
                    <p className="mt-3">Back to previous song</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /queue
                    </summary>
                    <p className="mt-3">Shows current queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /autoplay
                    </summary>
                    <p className="mt-3">Enable autoplay for current queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /shuffle
                    </summary>
                    <p className="mt-3">Shuffle current queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /resume
                    </summary>
                    <p className="mt-3">Resume current queue if paused</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /fix
                    </summary>
                    <p className="mt-3">Change discord voice server for better audio</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /search
                    </summary>
                    <p className="mt-3">Search requested song title</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /jump
                    </summary>
                    <p className="mt-3">Jump to another song at queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /volume
                    </summary>
                    <p className="mt-3">Change volume for current queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /nowplaying
                    </summary>
                    <p className="mt-3">Shows current playing song</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /loop
                    </summary>
                    <p className="mt-3">Loop current song or queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /remove
                    </summary>
                    <p className="mt-3">Remove request song at queue</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /stop
                    </summary>
                    <p className="mt-3">Stop current queue and remove all songs</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /lyrics
                    </summary>
                    <p className="mt-3">Search for lyrics for requested title or current song</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /skip
                    </summary>
                    <p className="mt-3">Skip current song</p>
                </details>
            </div>
        </section>
    )
}