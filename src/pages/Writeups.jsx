import { Link } from 'react-router-dom';

// DUMMY DATA: Replace this with your actual writeup data
const writeups = [
    { id: 1, title: 'Writeup: Leetcon "Hack me if you can"', date: '2023-10-26', category: 'Web Exploitation', excerpt: 'A detailed walkthrough of the web challenges in the Leetcon CTF...' },
    { id: 2, title: 'Knight CTF: A Journey Through Pwn', date: '2023-09-15', category: 'Binary Exploitation', excerpt: 'Exploiting a simple buffer overflow to get a shell...' },
    // Add more writeups here
];


const Writeups = () => {
    return (
        <div className="bg-navy min-h-screen text-lightest-slate">
            <div className="container mx-auto px-6 py-24">
                <h1 className="text-5xl font-bold text-lightest-slate mb-2">CTF Writeups</h1>
                <p className="text-lg text-green mb-12">My collection of solved challenges and thoughts.</p>
                
                <div className="space-y-8">
                    {writeups.map(writeup => (
                        <div key={writeup.id} className="bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-lightest-slate hover:text-green transition-colors duration-300 cursor-pointer">{writeup.title}</h2>
                        <p className="text-sm text-slate mt-1 mb-3">{writeup.date} • <span className="font-semibold text-green">{writeup.category}</span></p>
                        <p className="text-light-slate">{writeup.excerpt}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/" className="text-green font-mono border border-green px-6 py-3 rounded hover:bg-green/10 transition-colors duration-300">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Writeups;