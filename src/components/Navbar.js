import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import Cart from './Cart';

const Navbar = ({ count }) => (
	<div>
		<AppBar position='static'>
			<Container maxWidth='md'>
				<Toolbar>
					<Typography variant='h4' style={{ flexGrow: 1 }}>
						A Good Book Shop
					</Typography>
					<Cart count={count} />
				</Toolbar>
			</Container>
		</AppBar>
	</div>
);

export default Navbar;
