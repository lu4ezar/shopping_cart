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
import { getProductById } from '../redux/reselect';
import { connect } from 'react-redux';
import { updateCart } from '../redux/actions/cart';
import { getBookInCartCount } from '../redux/reselect';

const mapStateToProps = state => ({
	product: getProductById(state),
	bookCount: getBookInCartCount(state)
});

const mapDispatchToProps = dispatch => ({
	addProduct: (id, quantity) => dispatch(updateCart({ id, quantity }))
});

const ProductDetails = props => {
	const { product, open, onClose, addProduct, bookCount } = props;
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
						onClick={() =>
							addProduct(product.isbn13, bookCount ? bookCount + 1 : 1)
						}
					>
						<AddShoppingCart />
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
