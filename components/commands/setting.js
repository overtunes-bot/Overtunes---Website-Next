export default function Settings() {
    return (
        <section>
            <div className="p-2 flex flex-col gap-6 md:text-xl lg:text-2xl">
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        -setup
                    </summary>
                    <p className="mt-3">Setup special text channel for requesting song</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        -defaultvolume
                    </summary>
                    <p className="mt-3">Set default volume for player</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        -prefix
                    </summary>
                    <p className="mt-3">Set default prefix for the bot</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        -djonly
                    </summary>
                    <p className="mt-3">Set Overtunes only used for user has DJ role</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        -announce
                    </summary>
                    <p className="mt-3">Enable or unable announcement when song playing</p>
                </details>
            </div>
        </section>
    )
}