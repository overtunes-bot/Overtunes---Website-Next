export default function Loading() {
    return (
        <div className="flex flex-col justify-center w-full">
            <img className="h-32 w-32 mx-auto" src="/loading.svg" alt="loading" />
            <p className="text-gray-200 text-center font-sansPro">Searching Command</p>
        </div>
    )
}