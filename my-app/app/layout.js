import "../styles/globals.css";
			export const metadata = {
				title: "My App Next.js",
			};
			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
);
		}
