import { Link } from 'react-router-dom';
export default function Navbar() { return <header className="site-header"><Link to="/" className="brand">BUILDATHON</Link><nav aria-label="Main navigation"><Link to="/login">Login</Link><Link to="/register">Register</Link></nav></header>; }
