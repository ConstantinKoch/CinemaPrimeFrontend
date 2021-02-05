import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Navbar.css';

function Navbar() {
	const [ click, setClick ] = useState(false);
	const [ button, setButton ] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link style={{ whiteSpace: 'pre-wrap' }} to="/" className="navbar-logo" onClick={closeMobileMenu}>
					CinemaPrime &nbsp; <i className="fas fa-film" />
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				
					<li className="nav-item">
						<Link to="/programm" className="nav-links" onClick={closeMobileMenu}>
							Programm
						</Link>
					</li>
					{/*<li className="nav-item">
						<Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
							Contact
						</Link>
	</li>*/}
					<li className="nav-item">
						<Link to="/info" className="nav-links" onClick={closeMobileMenu}>
							Informationen
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/kontakt" className="nav-links" onClick={closeMobileMenu}>
							Kontakt
						</Link>
					</li>
					{click ? (
						<li>
							<Link to="/register" className="nav-links" onClick={closeMobileMenu}>
								Sign up
							</Link>
						</li>
					) : (
						<li className="nav-item-register">
							<Link className="nav-links-register" to="/register" onClick={closeMobileMenu}>
								<Button
									size={click ? 'medium' : 'large'}
									className="nav-btn-register"
									variant={click ? 'text' : 'outlined'}
									color="inherit"
								>
									Sign up
								</Button>
							</Link>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
