function Products(props){
    return (
        <li key={props.id} className= {`product-list_item ${props.name ? 'wish-list_item--done' : ''}`}>
            <input id={ props.id } type="checkbox"
                   checked = {props.stock}
                   onChange= {e => props.onDoneChange(e.target.checked)} />
            <label htmlFor={ props.id }>{props.name}</label>
        </li>
    );

}

export default Products;