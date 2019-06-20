import * as React from 'react';
import ProductList from './ProductList';
import Navbar from './Navbar';
import { Container, CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';

const mapStateToProps = state => ({
	loading: state.loading,
	id: state.productId
});

const App = ({ loading, id }) => {
	const [showModal, toggleShow] = React.useState(false);
	const handleClose = () => toggleShow(false);
	const handleOpen = () => toggleShow(true);
	return (
		<div>
			<CssBaseline />
			<Navbar />
			<Container maxWidth='md'>
				{loading ? <p>Loading...</p> : <ProductList handleOpen={handleOpen} />}
			</Container>
			{id && <ProductDetails open={showModal} onClose={handleClose} />}
		</div>
	);
};

export default connect(
	mapStateToProps,
	null
)(App);
