import * as React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { List, Typography } from '@material-ui/core';
import { hydrateList } from '../redux/actions/list';
import { changeLoadingState } from '../redux/actions/loading';

const mapStateToProps = state => ({
	loading: state.loading,
	list: state.list
});

const mapDispatchToProps = dispatch => ({
	hydrateList: data => dispatch(hydrateList(data)),
	setLoading: status => dispatch(changeLoadingState(status))
});

const ProductList = ({ list, loading, handleOpen }) =>
	loading ? (
		<Typography variant='h6'>Loading...</Typography>
	) : (
		<div>
			<List>
				{list.map((product, index) => (
					<Product key={index} prod={product} handleOpen={handleOpen} />
				))}
			</List>
		</div>
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);
