import * as React from 'react';
import {
	Card,
	Dialog,
	CardMedia,
	CardHeader,
	CardActionArea,
	CardActions,
	CardContent,
	Typography,
	Button
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { getBookByIsbn13, getBookInCartQuantity } from '../utils/reselect';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cart';

const mapStateToProps = state => ({
	product: getBookByIsbn13(state),
	bookCount: getBookInCartQuantity(state)
});

const mapDispatchToProps = dispatch => ({
	addProduct: id => dispatch(addToCart(id)),
	removeProduct: id => dispatch(removeFromCart(id))
});

const ProductDetails = props => {
	const {
		product,
		open,
		onClose,
		addProduct,
		removeProduct,
		bookCount = 0
	} = props;
	return (
		<Dialog open={open} onClose={onClose}>
			<Card>
				<CardActionArea>
					<CardHeader title={product.title} />
					<CardContent>
						<Typography>{product.subtitle}</Typography>
						<a
							href={product.url}
							rel='noopener noreferrer'
							target='_blank'
							title='View in new tab'
						>
							<CardMedia
								component='img'
								alt="book's cover"
								image={product.image}
							/>
						</a>
					</CardContent>
				</CardActionArea>
				<CardActions spacing={2}>
					<Button
						size='large'
						fullWidth
						variant='contained'
						title='add to cart'
						onClick={() => addProduct(product.isbn13)}
					>
						<AddShoppingCart />
					</Button>
					<Button
						component='div'
						variant='outlined'
						title='remove from cart'
						onClick={() => removeProduct(product.isbn13)}
					>
						{bookCount}
					</Button>
				</CardActions>
			</Card>
		</Dialog>
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductDetails);
