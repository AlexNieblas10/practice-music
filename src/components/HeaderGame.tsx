export const HeaderGame = ({ children }: { children: React.ReactNode }) => {
	return (
		<header className="w-full flex md:flex-row flex-col items-center justify-center md:gap-20 gap-3">
			{children}
		</header>
	)
}
