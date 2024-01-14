export const Note = ({ isBlackKey }: { isBlackKey: boolean }) => {
	return (
		<div className="w-6 h-6 bg-black rounded-full absolute top-0 bottom-0 right-0 left-0 m-auto">
			{isBlackKey && <p className="absolute right-8 -top-[16px] text-2xl">#</p>}
		</div>
	)
}
