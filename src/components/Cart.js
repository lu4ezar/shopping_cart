import * as React from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Badge, Menu, MenuItem, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getTotalCart } from '../redux/reselect';
import { updateCart } from '../redux/actions/cart';

const mapStateToProps = state => ({
	count: getTotalCart(state),
	cart: state.cart
});

const mapDispatchToProps = dispatch => ({
	updateCart: (id, quantity) => dispatch(updateCart({ id, quantity }))
});

const Cart = ({ count = 0, cart, updateCart }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = event => {
		if (!count) {
			return;
		}
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => setAnchorEl(null);
	const dropdownItems = Object.keys(cart).length
		? Object.keys(cart).map((key, index) => (
				<MenuItem
					key={index}
					onClick={() => updateCart(key, cart[key] ? cart[key] - 1 : 0)}
				>
					{key}
				</MenuItem>
		  ))
		: null;
	return (
		<div>
			<Button onClick={handleClick}>
				<Badge badgeContent={count}>
					<ShoppingCart />
				</Badge>
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				keepMounted
				onClose={handleClose}
			>
				{dropdownItems}
			</Menu>
		</div>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
