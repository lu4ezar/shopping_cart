import * as React from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { Add, Remove } from '@material-ui/icons';
import {
	Badge,
	Menu,
	MenuItem,
	Button,
	ButtonGroup,
	Divider
} from '@material-ui/core';
import { connect } from 'react-redux';
import {
	getTotalCartQuantity,
	getTotalCartSum,
	getCartBookTitlesByIsbn13
} from '../utils/reselect';
import { addToCart, removeFromCart } from '../redux/actions/cart';

const mapStateToProps = state => ({
	count: getTotalCartQuantity(state),
	titlesArray: getCartBookTitlesByIsbn13(state),
	cart: state.cart,
	sum: getTotalCartSum(state)
});

const mapDispatchToProps = dispatch => ({
	addOne: id => dispatch(addToCart(id)),
	removeOne: id => dispatch(removeFromCart(id))
});

const titleLength = 45;

const Cart = ({ count = 0, cart, sum, titlesArray, addOne, removeOne }) => {
	// anchor element for menu
	const [anchorEl, setAnchorEl] = React.useState(null);
	// close menu if cart is empty
	React.useEffect(() => {
		if (!Object.values(cart).some(el => el)) {
			handleClose();
		}
	}, [cart]);
	// open menu
	const handleClick = event => {
		// do not open menu if cart is empty
		if (!count) {
			return;
		}
		setAnchorEl(event.currentTarget);
	};
	//close menu
	const handleClose = () => setAnchorEl(null);
	// get titles of books in cart
	const titles = titlesArray.map(title =>
		title.length > titleLength
			? `${title.substr(0, titleLength - 3)}...`
			: title
	);
	// get MenuItems for menu
	const dropdownItems = Object.keys(cart).length
		? Object.keys(cart).map((key, index) =>
				cart[key] ? (
					<MenuItem key={index}>
						<div style={{ flexGrow: 1 }}>{titles[index]}</div>
						<ButtonGroup style={{ paddingLeft: '-20px' }}>
							<Button
								onClick={() => removeOne(key)}
							>
								<Remove />
							</Button>
							<Button component='div'>{cart[key]}</Button>
							<Button
								onClick={() => addOne(key)}
							>
								<Add />
							</Button>
						</ButtonGroup>
					</MenuItem>
				) : null
		  )
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
				<Divider />
				<MenuItem style={{ alignSelf: 'flex-end'}}>Total: ${sum}</MenuItem>
			</Menu>
		</div>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
