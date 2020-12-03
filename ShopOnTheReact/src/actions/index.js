const mapStateToProps = state => ({
    resultRequest: state
});

const mapDispatchToProps = dispatch => ({
    onRequestData: event => dispatch(event)
});

export {mapStateToProps, mapDispatchToProps};