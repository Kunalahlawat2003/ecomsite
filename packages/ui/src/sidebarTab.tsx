

interface sidebarTabProps {
    text: string;
    onClick?: () => void;
}

export function SidebarTab ({text, onClick}: sidebarTabProps) {

    return <>
    <div onClick={onClick} className="w-full tracking-wider sm:text-xl text-xl px-7 py-3 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer transition-all">
        {text}
    </div>
    <hr className="mx-7 "/>
    </>
}