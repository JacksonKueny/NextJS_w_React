// app/layout.js
import './globals.css';

export const metadata = {
    title: 'Next.js Assignment',
    description: 'Simple Next.js site with multiple components',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <header>
            <h1>My Next.js Assignment</h1>
        </header>
        <main>{children}</main>
        </body>
        </html>
    );
}
