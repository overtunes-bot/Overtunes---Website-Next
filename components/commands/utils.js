export default function Utils() {
    return (
        <section>
            <div className="p-2 flex flex-col gap-6 md:text-xl lg:text-2xl">
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /help
                    </summary>
                    <p className="mt-3">Shows all commands at Overtunes</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /vote
                    </summary>
                    <p className="mt-3">Shows vote links for Overtunes</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /support
                    </summary>
                    <p className="mt-3">Shows supports link for Overtunes</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /invite
                    </summary>
                    <p className="mt-3">Shows invite link for Overtunes</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /ping
                    </summary>
                    <p className="mt-3">Show Overtunes latency</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /nodes
                    </summary>
                    <p className="mt-3">Shows music server stats for Overtunes</p>
                </details>
                <details className="bg-[#172b55] cursor-pointer rounded-lg p-3 text-gray-200">
                    <summary className="">
                        /aboutme
                    </summary>
                    <p className="mt-3">Shows info about Overtunes</p>
                </details>
            </div>
        </section>
    )
}