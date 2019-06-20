import * as React from 'react';
import { ListItem, Typography, ListItemText } from '@material-ui/core';
import { setProductId } from '../redux/actions/productId';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => ({
	setId: () => dispatch(setProductId(ownProps.prod.isbn13))
});

const Product = props => {
	const { prod, setId, handleOpen } = props;
	const onClick = () => {
		setId(prod.isbn13);
		handleOpen();
	};
	return (
		<div>
			<ListItem button onClick={onClick} alignItems='center' spacing={2}>
				<Typography variant='h6' style={{ flexGrow: 1 }}>
					{prod.title}
				</Typography>
				<div edge='flex-end'>
					<ListItemText variant='h4'>{prod.price}</ListItemText>
				</div>
			</ListItem>
		</div>
	);
};

export default connect(
	null,
	mapDispatchToProps
)(Product);
